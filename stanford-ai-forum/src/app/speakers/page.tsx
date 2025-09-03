import Image from "next/image";

export type Speaker = {
  name: string;
  title: string;
  affiliation: string;
  bio?: string;
  image?: string;
};

const speakers: Speaker[] = [
  { name: "TBD", title: "Professor", affiliation: "Stanford University", image: "placeholder.jpg" },
  { name: "TBD", title: "Research Scientist", affiliation: "OpenAI", image: "placeholder.jpg" },
  { name: "TBD", title: "Founder", affiliation: "AI Startup", image: "placeholder.jpg" },
];

export default function SpeakersPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Speakers</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Our invited speakers and panelists.
      </p>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {speakers.map((s) => (
          <li key={s.name} className="rounded-lg border border-gray-200 dark:border-gray-800 p-5">
            {s.image ? (
              <Image
                className="rounded-full mb-4 object-cover"
                src={`/speakers/${s.image}`}
                alt={`${s.name} headshot`}
                width={64}
                height={64}
              />
            ) : (
              <div className="h-16 w-16 rounded-full bg-gray-200 dark:bg-gray-700 mb-4" />
            )}
            <div className="font-medium">{s.name}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">{s.title}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">{s.affiliation}</div>
            {s.bio ? (
              <p className="text-sm text-gray-700 dark:text-gray-200 mt-2">{s.bio}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </main>
  );
}
