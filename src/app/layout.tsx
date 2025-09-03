import type { Metadata } from "next";
import Link from "next/link";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stanford Turks in AI Forum",
  description: "Student-run forum spotlighting the Turkish AI ecosystem at Stanford.",
  metadataBase: new URL("https://stanford-ai-forum.vercel.app"),
  openGraph: {
    title: "Stanford Turks in AI Forum",
    description:
      "Student-run forum spotlighting the Turkish AI ecosystem at Stanford.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stanford Turks in AI Forum",
    description:
      "Student-run forum spotlighting the Turkish AI ecosystem at Stanford.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">
            {children}
          </div>
          <footer className="border-t border-gray-200 dark:border-gray-800">
            <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600 dark:text-gray-400 flex items-center justify-between">
              <div>© {new Date().getFullYear()} Stanford Turks in AI Forum</div>
              <div className="flex items-center gap-3">
                <a className="hover:underline underline-offset-4" href="https://x.com/stanfordtsa/" aria-label="Twitter">Twitter</a>
                <a className="hover:underline underline-offset-4" href="https://www.instagram.com/stanfordtsa/?hl=en" aria-label="Instagram">Instagram</a>
                <a className="hover:underline underline-offset-4" href="https://www.linkedin.com/company/stanford-turkish-student-association/about/" aria-label="LinkedIn">LinkedIn</a>
                <a className="hover:underline underline-offset-4" href="https://tsa.stanford.edu/communication" aria-label="Join mailing list">Mailing list</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
