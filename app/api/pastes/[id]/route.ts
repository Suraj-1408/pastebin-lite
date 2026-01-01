import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(req: Request,context : { params: Promise<{ id: string }> }) {
    //console.log("Inside GET /api/pastes/:id", params.id);

  const { id } = await context.params;
     console.log("Fetching paste ID:", id);
  try {
    console.log("Querying database for paste ID:", id);

    // Fetch paste by ID
    const result = await pool.query(
      `SELECT * FROM pastes WHERE id = $1`,
      [id]
    );
    
    console.log("DB query result rows:", result.rows);
    console.log("Number of rows found:", result.rows.length);
    //console.log("DB result:", result.rows);

    if (!result.rows.length) {
        console.log("No rows found → returning 404 Paste not found");
      // Paste not found
      return NextResponse.json({ error: "Paste not found" }, { status: 404 });
    }

    const paste = result.rows[0];

    // Check expiration
    if (paste.expire_at && new Date(paste.expire_at) < new Date()) {
      return NextResponse.json({ error: "Paste link has expired and is no longer available.Contact author  to share a new link." }, { status: 404 });
    }

    // Check max views
    if (paste.max_views !== null && paste.views >= paste.max_views) {
      return NextResponse.json({ error: "Max views has exceeded its set limit.Contact author to share a new link." }, { status: 404 });
    }

    // Increment views count
    await pool.query(
      `UPDATE pastes SET views = views + 1 WHERE id = $1`,
      [id]
    );

    // Calculate remaining views
    const remaining_views =
      paste.max_views !== null ? paste.max_views - paste.views - 1 : null;

    return NextResponse.json(
      {
        content: paste.content,
        remaining_views,
        expires_at: paste.expire_at, // null if no TTL
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("GET /api/pastes/:id error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
