"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Paste = {
  url: string;
  createdAt: string;
};

export default function MyPastesPage() {
  const [pastes, setPastes] = useState<Paste[]>([]);

  useEffect(() => {
    const stored = JSON.parse(
      localStorage.getItem("my_pastes") || "[]"
    ) as Paste[];

    setPastes(stored);
  }, []);

  function deletePaste(index: number) {
    const updated = [...pastes];
    updated.splice(index, 1);
    setPastes(updated);
    localStorage.setItem("my_pastes", JSON.stringify(updated));
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#020617] text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">My Pastes</h1>
          <Link
            href="/create"
            className="text-sm text-[#38bdf8] hover:underline"
          >
            + Create New
          </Link>
        </div>

        {/* Empty State */}
        {pastes.length === 0 && (
          <div className="text-center text-gray-400 mt-20">
            <p>No pastes created yet.</p>
            <p className="text-sm mt-2">
              Create a paste and it will appear here.
            </p>
          </div>
        )}

        {/* Pastes List */}
        <ul className="space-y-4">
          {pastes.map((paste, index) => (
            <li
              key={index}
              className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/5 p-4"
            >
              <div className="flex-1 overflow-hidden">
                <a
                  href={paste.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block truncate text-[#38bdf8] hover:underline"
                >
                  {paste.url}
                </a>
                <p className="text-xs text-gray-400 mt-1">
                  Created{" "}
                  {new Date(paste.createdAt).toLocaleString()}
                </p>
              </div>

              <button
                onClick={() => deletePaste(index)}
                className="text-sm text-red-400 hover:text-red-300"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
