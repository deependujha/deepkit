import Link from "next/link";
import { TOOLS_LIST } from "@/components/constants";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Header */ }
      <header className="border-b border-gray-800 px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          <span className="text-2xl font-bold tracking-tight">DeepKit</span>
          <span className="text-gray-500 text-sm">developer utilities</span>
        </div>
      </header>

      {/* Hero */ }
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Lightweight Dev Tools
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          No backend. No tracking. No nonsense. Just tools that work.
        </p>
      </section>

      {/* Tools Grid */ }
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">
          All Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          { TOOLS_LIST.map( ( tool ) => (
            <Link
              key={ tool.path }
              href={ tool.path }
              className="group rounded-xl border border-gray-800 bg-gray-900 p-5 hover:border-gray-600 hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-white group-hover:text-white">
                  { tool.name }
                </h3>
                <span className="text-gray-600 group-hover:text-gray-400 transition-colors mt-0.5">↗</span>
              </div>
              <p className="mt-2 text-sm text-gray-400">{ tool.description }</p>
            </Link>
          ) ) }
        </div>
      </section>
    </main>
  );
}
