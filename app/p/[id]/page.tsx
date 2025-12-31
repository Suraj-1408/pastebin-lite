"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ViewPastePage() {
  const { id } = useParams();
  const [content, setContent] = useState<string | null>(null);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [expiresAt, setExpiresAt] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    async function fetchPaste() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/pastes/${id}`);
        const data = await res.json();

        if (!res.ok) {
          setError(data.error || "Something went wrong");
          return;
        }

        setContent(data.content);
        setRemaining(data.remaining_views);
        setExpiresAt(
          data.expires_at
            ? new Date(data.expires_at).toLocaleString()
            : null
        );
      } catch {
        setError("Network error");
      } finally {
        setLoading(false);
      }
    }

    fetchPaste();
  }, [id]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#020617] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur rounded-xl border border-white/10 p-6 sm:p-8 pt-14 shadow-lg">
         <Link
          href="/"
          className="absolute top-4 right-4 px-4 py-1.5 rounded-md
                    text-sm font-semibold
                    bg-[#38bdf8] text-black
                    hover:bg-[#0ea5e9]
                    transition"
        >
          Back to Home
        </Link>

        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-white">
          View Paste
        </h1> 


        {loading && (
          <p className="text-gray-300 text-center">Loading...</p>
        )}

        {error && !loading && (
          <p className="text-center text-red-400 text-sm">{error}</p>
        )}

        {!loading && !error && content && (
          <>
            {/* Paste Content */}
            <div className="mb-6 relative">
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Paste Content
              </label>

              <pre
                className={`relative bg-[#020617] border border-white/10 rounded-lg p-4 text-white
                  overflow-x-auto whitespace-pre-wrap transition-all duration-300
                  ${showFull
                    ? "max-h-none"
                    : "max-h-[200px] sm:max-h-[300px] md:max-h-[400px]"
                  }`}
              >
                {content}

                {/* <span
                  onClick={() => setShowFull(!showFull)}
                  className="absolute bottom-2 right-4 text-sm text-[#38bdf8] cursor-pointer hover:underline"
                >
                  {showFull ? "Click to collapse" : "Click to expand"}
                </span> */}
              </pre>

              {/* Fixed control */}
              <button
                onClick={() => setShowFull(!showFull)}
                className="absolute bottom-2 right-4 text-sm text-[#38bdf8]
                          hover:underline bg-[#020617]/80 px-2 rounded"
              >
                {showFull ? "Click to collapse" : "Click to expand"}
              </button>
            </div>

            {/* Remaining Views */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Remaining Views
              </label>
              <div className="bg-[#020617] border border-white/10 rounded-lg p-4 text-white">
                {remaining ?? "Not Set"}
              </div>
            </div>

            {/* Expiry */}
            <div className="mb-2">
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Expires At
              </label>
              <div className="bg-[#020617] border border-white/10 rounded-lg p-4 text-white">
                {expiresAt ?? "No Expiration Set"}
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
