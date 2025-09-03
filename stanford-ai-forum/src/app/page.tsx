export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-3xl text-center">
        <span className="inline-block text-sm tracking-wide uppercase text-[color:var(--brand)] mb-3">Stanford AI Forum</span>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
          A community for AI talks, workshops, and collaboration
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8">
          We connect students, researchers, and industry to explore the frontiers of AI. Join us for weekly events, hands-on sessions, and mentorship.
        </p>
        <div className="flex gap-3 justify-center">
          <a className="btn-primary" href="/speakers">Speakers</a>
          <a className="inline-flex items-center justify-center rounded-md px-5 py-2.5 border border-gray-300 dark:border-gray-600" href="/agenda">Agenda</a>
        </div>
      </div>
    </main>
  );
}
