import Image from "next/image";
import Link from "next/link";

export type Speaker = {
  name: string;
  title: string;
  affiliation: string;
  bio?: string;
  image?: string;
  linkedin?: string;
};

const speakers: Speaker[] = [
  { name: "Ilge Akkaya", title: "Speaker", affiliation: "", image: "ilge-akkaya.jpeg", linkedin: "https://www.linkedin.com/in/ilge-akkaya-311b4631/" },
  { name: "Eylul Kayin", title: "Speaker", affiliation: "", image: "eylul-kayin.jpeg", linkedin: "https://www.linkedin.com/in/eylulk" },
  { 
    name: "Sercan Arık", 
    title: "AI Research Scientist", 
    affiliation: "Google", 
    bio: "Pioneer in driving LLM R&D and adoption across enterprise sectors",
    image: "sercan-arik.jpeg", 
    linkedin: "https://www.linkedin.com/in/sercanarik/" 
  },
  { 
    name: "Beliz Gunel", 
    title: "AI Research Scientist", 
    affiliation: "Google DeepMind", 
    bio: "Expert in frontier model post-training",
    image: "beliz-gunel.jpeg", 
    linkedin: "https://www.linkedin.com/in/beliz-gunel-7252bb78/" 
  },
  { 
    name: "Çağla Kaymaz", 
    title: "Partner", 
    affiliation: "Category Ventures", 
    bio: "Investing in enterprise AI",
    image: "cagla-kaymaz.jpeg", 
    linkedin: "https://www.linkedin.com/in/caglakaymaz/" 
  },
  { 
    name: "Alper Tekin", 
    title: "Chief Business Officer", 
    affiliation: "You.com", 
    bio: "Leading business strategy and growth initiatives",
    image: "alper-tekin.jpeg", 
    linkedin: "https://www.linkedin.com/in/alp/" 
  },
  { 
    name: "Gülin Yilmaz", 
    title: "Co-founder and CEO", 
    affiliation: "Rosette Health", 
    bio: "Building innovative healthcare solutions",
    image: "gulin-yilmaz.jpeg", 
    linkedin: "https://www.linkedin.com/in/isilgulinyilmaz/" 
  },
  { 
    name: "Yusuf Ozuysal", 
    title: "Founder", 
    affiliation: "Gr33n.ai", 
    bio: "Pioneering sustainable AI solutions",
    image: "yusuf-ozuysal.jpeg", 
    linkedin: "https://www.linkedin.com/in/yusufo/" 
  },
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
          <li key={s.name}>
            {s.linkedin ? (
              <a 
                href={s.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block rounded-lg border border-gray-200 dark:border-gray-800 p-5 text-center hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-pointer"
              >
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
                <div className="text-sm text-white">{s.title}</div>
                <div className="text-sm text-white">{s.affiliation}</div>
                {s.bio ? (
                  <p className="text-sm text-white mt-2">{s.bio}</p>
                ) : null}
              </a>
            ) : (
              <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-5 text-center">
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
                <div className="text-sm text-white">{s.title}</div>
                <div className="text-sm text-white">{s.affiliation}</div>
                {s.bio ? (
                  <p className="text-sm text-white mt-2">{s.bio}</p>
                ) : null}
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
