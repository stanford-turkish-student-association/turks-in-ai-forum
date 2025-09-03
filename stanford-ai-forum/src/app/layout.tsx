import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stanford AI Forum",
  description: "Student-run forum for AI talks, workshops, and community at Stanford.",
  metadataBase: new URL("https://stanford-ai-forum.vercel.app"),
  openGraph: {
    title: "Stanford AI Forum",
    description:
      "Student-run forum for AI talks, workshops, and community at Stanford.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stanford AI Forum",
    description:
      "Student-run forum for AI talks, workshops, and community at Stanford.",
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
