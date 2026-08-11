import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <head>
        {/* The Wingmate demo is the first embed on the page and the heaviest —
            a whole app behind an iframe. Getting DNS and TLS to its origin out
            of the way while the page itself is still rendering takes a couple
            of round trips off the time before it shows anything. */}
        <link rel="preconnect" href="https://wingmate-demo.vercel.app" />
        <link rel="dns-prefetch" href="https://wingmate-demo.vercel.app" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
