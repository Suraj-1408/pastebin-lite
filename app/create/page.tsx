"use client";

import { useState } from "react";
import Link from "next/link";

export default function CreatePastePage() {
  const [content, setContent] = useState("");
  const [ttl, setTtl] = useState("");
  const [maxViews, setMaxViews] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  //making use of localstorage to show users past pastes.
  function savePasteToLocal(url: string) {
  const existing = JSON.parse(localStorage.getItem("my_pastes") || "[]");

  existing.unshift({
    url,
    createdAt: new Date().toISOString(),
  });

  localStorage.setItem("my_pastes", JSON.stringify(existing));
}

  async function handleSubmit() {
    setError(null);
    setResult(null);
    setLoading(true);

    try {
      const res = await fetch("/api/pastes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content,
          ttl_seconds: ttl ? Number(ttl) : undefined,
          max_views: maxViews ? Number(maxViews) : undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      //saving the paste to local storage.
      savePasteToLocal(data.url);

      setResult(data.url);
      setContent("");
      setTtl("");
      setMaxViews("");
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#020617] flex items-center justify-center px-4">
      
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur rounded-xl border border-white/10 p-6 sm:p-8 shadow-lg">

        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-white">
          Create a Paste
        </h1>

        {/* Content */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-300">
            Paste Your Content
          </label>
          <textarea
            className="w-full min-h-[160px] rounded-lg border border-white/10 bg-[#020617] px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
            placeholder="Enter your text here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Expire Time (seconds)
            </label>
            <input
              type="number"
              className="w-full rounded-lg border border-white/10 bg-[#020617] px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              placeholder="Optional"
              value={ttl}
              onChange={(e) => setTtl(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Max Views
            </label>
            <input
              type="number"
              className="w-full rounded-lg border border-white/10 bg-[#020617] px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              placeholder="Optional"
              value={maxViews}
              onChange={(e) => setMaxViews(e.target.value)}
            />
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full rounded-lg bg-[#38bdf8] text-black py-2 font-semibold hover:bg-[#0ea5e9] transition disabled:opacity-50"
        >
          {loading ? "Creating..." : "Generate URL"}
        </button>

        {/* Error */}
        {error && (
          <p className="mt-4 text-sm text-center text-red-400">
            {error}
          </p>
        )}

        {/* Result */}
        {result && (
          <div className="mt-6">
            <label className="block text-sm font-medium mb-1 text-gray-300">
              Generated URL
            </label>

            <div className="flex items-center rounded-lg overflow-hidden border border-white/10 bg-[#020617]">
              <input
                type="text"
                readOnly
                value={result}
                onClick={() => window.open(result, "_blank")}
                className="flex-1 px-3 py-2 bg-transparent text-white cursor-pointer focus:outline-none"
              />
              <button
                onClick={handleCopy}
                className="px-4 py-2 bg-[#38bdf8] text-black font-semibold hover:bg-[#0ea5e9] transition"
              >
                Copy
              </button>
            </div>

            <div className="flex justify-between items-center mt-1">
              <p className="text-sm text-[#22c55e]">
                Click on the url to view the content
              </p>
              <p
                className={`text-sm transition-opacity duration-200
                ${copied ? "opacity-100 text-[#22c55e]" : "opacity-0"}`}
              >
                Copied!
              </p>
            </div>
          </div>
        )}

        {/* Back to Home */}
        {/* Back to Home link */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-[#38bdf8] hover:text-[#0ea5e9] transition"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}
