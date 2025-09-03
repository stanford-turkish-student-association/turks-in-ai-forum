import Link from "next/link";

type AgendaItem = {
  time: string;
  title: string;
  speaker?: string;
  location?: string;
};

const agenda: AgendaItem[] = [
  { time: "Panel I", title: "AI Success Stories — Celebrating researchers, engineers, founders, and investors" },
  { time: "Panel II", title: "AI Manifesto & Opportunities — A shared vision and roadmap for the global Turkish AI ecosystem" },
  { time: "Panel III", title: "Global Bridges & Celebration — Building enduring networks and collaborations across borders" },
];

export default function AgendaPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-6">
        <Link className="inline-flex items-center gap-2 text-sm hover:underline underline-offset-4" href="/">
          ← Home
        </Link>
      </div>
      <h1 className="text-3xl sm:text-4xl font-semibold mb-6">Agenda</h1>
      <ol className="space-y-3">
        {agenda.map((item, idx) => (
          <li key={idx} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm text-[color:var(--brand)] font-medium">{item.time}</div>
                <div className="font-medium">{item.title}</div>
                {item.speaker ? (
                  <div className="text-sm text-gray-600 dark:text-gray-300">{item.speaker}</div>
                ) : null}
              </div>
              {item.location ? (
                <div className="text-sm text-gray-600 dark:text-gray-300">{item.location}</div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
