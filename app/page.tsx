// app/page.tsx
export const metadata = {
  title: "Pastebin-Lite"  
};
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#020617] text-white">
      
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Create a Sharable links in Seconds
          <span className="block text-[#38bdf8] mt-2">
            Auto-Expire. View-Limited. Easy to Use.
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          A lightweight Pastebin alternative to quickly share code, notes, or
          text snippets with expiration time and view limits.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/create"
            className="px-6 py-3 rounded-lg bg-[#38bdf8] text-black font-semibold hover:bg-[#0ea5e9] transition"
          >
            Create a Paste
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          No Signup required • Free & fast • User friendly
        </p>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Auto Expiry",
            desc: "Set a time-to-live for your paste. It disappears automatically."
          },
          {
            title: "View Limits",
            desc: "Restrict how many times a paste can be opened."
          },
          {
            title: "Secure & Private",
            desc: "Random URLs with no indexing. Your data stays private."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <span className="text-4xl">📋</span>
            <h4 className="mt-4 font-semibold">Paste Content</h4>
            <p className="text-sm text-gray-400 mt-2">
              Add text, code, or notes with optional expiry & view limits.
            </p>
          </div>

          <div>
            <span className="text-4xl">🔗</span>
            <h4 className="mt-4 font-semibold">Share URL</h4>
            <p className="text-sm text-gray-400 mt-2">
              Copy the generated link and share it instantly.
            </p>
          </div>

          <div>
            <span className="text-4xl">⏳</span>
            <h4 className="mt-4 font-semibold">Auto Delete</h4>
            <p className="text-sm text-gray-400 mt-2">
              Paste expires automatically or after max views.
            </p>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Pastebin-Lite • Built by Suraj Paswan
      </footer>
    </main>
  );
}
