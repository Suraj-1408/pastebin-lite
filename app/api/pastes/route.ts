export const runtime = "nodejs";    // Required for PostgreSQL (`pg`) — Vercel Edge runtime does not support Node DB drivers

import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req: Request) {
  console.log("Inside Paste bin API");

  //printing db values
  console.log("DB HOST:", process.env.DB_HOST);
  try {
    const body = await req.json();
    const { content, ttl_seconds, max_views } = body;

    // ---------- Validation ----------
    if (!content || typeof content !== "string" || content.trim() === "") {
      return NextResponse.json(
        { error: "content is required and must be a non-empty string" },
        { status: 400 }
      );
    }

    if (
      ttl_seconds !== undefined &&
      (!Number.isInteger(ttl_seconds) || ttl_seconds < 1)
    ) {
      return NextResponse.json(
        { error: "ttl_seconds must be an integer >= 1" },
        { status: 400 }
      );
    }

    if (
      max_views !== undefined &&
      (!Number.isInteger(max_views) || max_views < 1)
    ) {
      return NextResponse.json(
        { error: "max_views must be an integer >= 1" },
        { status: 400 }
      );
    }

    // ---------- Compute expiry ----------
    const expiresAt = ttl_seconds
      ? new Date(Date.now() + ttl_seconds * 1000)
      : null;

    // ---------- Insert into DB ----------
    const result = await pool.query(
      `
      INSERT INTO pastes (content, max_views, expire_at)
      VALUES ($1, $2, $3)
      RETURNING id
      `,
      [content, max_views ?? null, expiresAt]
    );

    const id = result.rows[0].id;

    // ---------- Success response ----------
    return NextResponse.json(
      {
        id,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/p/${id}`,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/pastes error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
