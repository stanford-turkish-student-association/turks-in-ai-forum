import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-40" aria-hidden>
          <div className="pointer-events-none [background:radial-gradient(600px_600px_at_50%_-50%,theme(colors.red.700/.25),transparent_60%)]" />
        </div>
        <div className="container py-24 sm:py-28 text-center">
          {/* Removed duplicate small title */}
          <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05] mb-3 text-[color:var(--brand)]">
            Stanford Turks in AI Forum
          </h1>
          <div className="flex flex-col items-center gap-2 mb-6">
            <div className="inline-flex items-center rounded-full border border-gray-300 dark:border-gray-700 px-4 py-1.5 font-mono tracking-widest text-white bg-white/60 dark:bg-white/5 backdrop-blur">
              11.15.2025
            </div>
            <div className="text-sm sm:text-base text-white">Stanford Campus</div>
          </div>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-white mb-8">
            The Stanford Turks in AI Forum will bring together researchers, entrepreneurs, and investors to empower the Turkish AI ecosystem. Organized by the <a className="underline underline-offset-4 font-normal" href="https://www.linkedin.com/company/stanford-turkish-student-association/about/" target="_blank" rel="noopener noreferrer">Stanford Turkish Student Association</a>, this landmark gathering will serve as a platform to elevate the ecosystem, foster collaboration, and highlight the success stories of Türkiye&apos;s AI community on the global stage. We extend our heartfelt thanks to <strong><a className="underline underline-offset-4" href="https://globalturksai.org/" target="_blank" rel="noopener noreferrer">Global Turks AI</a></strong> and to all the supporters who helped make this forum a reality.
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-3 justify-center">
              <Link className="inline-flex items-center justify-center rounded-md px-5 py-2.5 border border-gray-300 dark:border-gray-600" href="/speakers">Speakers</Link>
              <Link className="inline-flex items-center justify-center rounded-md px-5 py-2.5 border border-gray-300 dark:border-gray-600" href="/agenda">Agenda</Link>
            </div>
            <a className="btn-primary" href="https://luma.com/55ato326" target="_blank" rel="noopener noreferrer">Register</a>
          </div>
        </div>
      </section>

      {/* Program Overview removed per request */}
    </main>
  );
}
