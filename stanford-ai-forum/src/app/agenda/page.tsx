type AgendaItem = {
  time: string;
  title: string;
  speaker?: string;
  location?: string;
};

const agenda: AgendaItem[] = [
  { time: "10:00", title: "Check-in & Coffee", location: "Lobby" },
  { time: "10:30", title: "Opening Remarks", speaker: "Organizers" },
  { time: "11:00", title: "Keynote: Frontiers in AI", speaker: "TBD" },
  { time: "12:00", title: "Lunch Break" },
  { time: "13:00", title: "Panel: Agents in the Wild", speaker: "TBD" },
  { time: "14:15", title: "Workshops" },
  { time: "16:00", title: "Networking" },
];

export default function AgendaPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Agenda</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Schedule for the event.
      </p>
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
