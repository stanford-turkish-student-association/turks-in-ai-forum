type Member = {
  name: string;
  role: string;
  image?: string;
};

const team: Member[] = [
  { name: "TBD", role: "Lead" },
  { name: "TBD", role: "Events" },
  { name: "TBD", role: "Operations" },
];

export default function TeamPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Team</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Student organizers and volunteers.
      </p>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {team.map((m) => (
          <li key={m.name} className="rounded-lg border border-gray-200 dark:border-gray-800 p-5">
            <div className="h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700 mb-4" />
            <div className="font-medium">{m.name}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">{m.role}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}


