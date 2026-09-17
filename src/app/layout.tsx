import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// Self-hosted rather than fetched from Google at runtime: next/font inlines the
// @font-face, serves the woff2 from our own origin with a preload, and derives a
// metric-matched fallback, so the first paint is already DM Sans instead of a
// heavier system face that swaps a moment later. DM Sans is a variable font, so
// the whole 400-800 range the site uses comes from one file.
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Keugene Lee",
  description: "Software engineer building AI-powered products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${dmSans.variable}`}>
      <head>
        {/* The first embed on the page is a whole app behind an iframe. Getting
            DNS and TLS to its origin out of the way while the page itself is
            still rendering takes a couple of round trips off the time before it
            shows anything. */}
        <link rel="preconnect" href="https://getunderstudy.vercel.app" />
        <link rel="dns-prefetch" href="https://getunderstudy.vercel.app" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
