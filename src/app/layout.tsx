import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Background } from "@/components/ui/Background";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://atulmishra.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Atul Mishra — Full-Stack Engineer",
  description:
    "Full-stack engineer building scalable React.js, Next.js & TypeScript applications with Node.js, Express and MongoDB backends.",
  keywords: [
    "Atul Mishra",
    "Full-Stack Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Atul Mishra" }],
  openGraph: {
    title: "Atul Mishra — Full-Stack Engineer",
    description:
      "Full-stack engineer building scalable React.js, Next.js & TypeScript applications.",
    url: siteUrl,
    siteName: "Atul Mishra",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atul Mishra — Full-Stack Engineer",
    description:
      "Full-stack engineer building scalable React.js, Next.js & TypeScript applications.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <Background />
        {children}
      </body>
    </html>
  );
}
