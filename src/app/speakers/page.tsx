import Image from "next/image";
import Link from "next/link";

export type Speaker = {
  name: string;
  title: string;
  affiliation: string;
  bio?: string;
  image?: string;
};

const speakers: Speaker[] = [
  { name: "Eylul Kayin", title: "Speaker", affiliation: "", image: "eylul-kayin.jpeg" },
  { name: "Ilge Akkaya", title: "Speaker", affiliation: "", image: "ilge-akkaya.jpeg" },
  { name: "Murat Yesildal", title: "Speaker", affiliation: "", image: "murat-yesildal.jpeg" },
];

export default function SpeakersPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-6">
        <Link className="inline-flex items-center gap-2 text-sm hover:underline underline-offset-4" href="/">
          ← Home
        </Link>
      </div>
      <h1 className="text-3xl sm:text-4xl font-semibold mb-6">Speakers</h1>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {speakers.map((s) => (
          <li key={s.name} className="rounded-lg border border-gray-200 dark:border-gray-800 p-5 text-center">
            {s.image ? (
              <Image
                className="mb-4 object-cover mx-auto"
                src={`${basePath}/speakers/${s.image}`}
                alt={`${s.name} headshot`}
                width={192}
                height={192}
              />
            ) : (
              <div className="h-48 w-48 bg-gray-200 dark:bg-gray-700 mb-4 mx-auto" />
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
