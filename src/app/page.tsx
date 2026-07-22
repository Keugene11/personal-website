import { Github, Linkedin, ExternalLink, Download } from "lucide-react";
import EmailReveal from "@/components/EmailReveal";

const projects = [
  {
    name: "Wingmate",
    url: "https://wingmate.live",
    urlLabel: "wingmate.live",
    github: "https://github.com/Keugene11/Wingmate",
    stack: ["Next.js 16", "React 19", "TypeScript", "Claude API", "Neon", "Stripe", "RevenueCat", "Capacitor", "Tailwind CSS"],
    bullets: [
      "Mobile-first app that helps guys build the confidence to approach and talk to new people — live on the Apple App Store and Google Play with $200+ in subscription revenue",
      "Claude-powered AI coach gives a tailored game plan — opener, reading interest, graceful exit — matched to the goal you pick (relationship, social skills, casual dating)",
      "Roster logs every approach with outcome, contact, and flake/ghost status, then surfaces insights: conversion funnels, flake-rate by attractiveness, streaks, and a world map of where people are from",
      "Community feed of anonymized field reports with upvotes and comments, plus a Reddit-style board to vote on what gets built next",
      "One TypeScript codebase (Next.js 16, React 19) wrapped with Capacitor to ship native iOS and Android apps alongside the web version, with Stripe and RevenueCat subscriptions",
    ],
  },
  {
    name: "SoundSense",
    url: "https://soundsense.vercel.app",
    urlLabel: "soundsense.vercel.app",
    github: "https://github.com/Keugene11/SoundSense",
    stack: ["Next.js 16", "TypeScript", "Claude API", "Supabase", "Tailwind CSS", "YouTube Data API", "Last.fm API"],
    bullets: [
      "AI music discovery app — enter a song you love and Claude builds a playlist of tracks you'll actually want to hear, each with an explanation of why",
      "Claude analyzes genre, vibe, and sonic qualities using Last.fm, TasteDive, and ListenBrainz to match energy and mood, not just genre",
      "Every recommendation is cross-verified on YouTube and Last.fm so every song is real and playable",
      "Spotify-style playlist player with a now-playing bar, autoplay, and like/dislike feedback that shapes future recommendations",
    ],
  },
  {
    name: "StonyLoop",
    url: "https://stonyloop.com",
    urlLabel: "stonyloop.com",
    github: "https://github.com/Keugene11/stonyloop",
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Tailwind CSS", "Google OAuth"],
    bullets: [
      "The Facebook for Stony Brook University — a social network where verified @stonybrook.edu students find classmates, connect by dorm, and stay in the loop, with 50+ registered users",
      "Full profile system with major, dorm, courses, Greek life, clubs, privacy controls, and profile-view tracking",
      "Wall posts with photo/video uploads, likes, threaded comments, friend requests, pokes, groups, and direct messaging",
      "Defense-in-depth security enforced in Postgres row-level security: email-gated signup, per-IP rate limiting, bot-pattern detection, and owner-protection policies — every privacy rule lives in the database, not the app",
    ],
  },
  {
    name: "Daily",
    url: "https://getdaily.live",
    urlLabel: "getdaily.live",
    github: "https://github.com/Keugene11/daily",
    stack: ["React", "Vite", "Express", "TypeScript", "Claude API", "Supabase", "Stripe", "Google Places API"],
    bullets: [
      "AI-powered day planner that turns a city and budget into a complete itinerary, pulling live data from Google Places, weather, transit, events, and more",
      "Backend calls every relevant tool in parallel, then Claude Haiku synthesizes the results into real venues with prices, clickable Google Maps links, and an interactive map",
      "Watch the plan build live via Server-Sent Events, with a nightlife mode for evening plans and weather-based outfit suggestions",
      "Monetized with Stripe subscriptions ($4.99/month or $39.99/year) and Supabase auth with cloud-synced plan history",
    ],
  },
  {
    name: "Benefits Finder",
    url: "https://keugene11.github.io/benefits-finder/",
    urlLabel: "keugene11.github.io/benefits-finder",
    github: "https://github.com/Keugene11/benefits-finder",
    stack: ["React", "JavaScript", "GitHub Pages"],
    bullets: [
      "Interactive tool that helps users discover government assistance programs they qualify for",
      "Short questionnaire about household size, income, and employment status",
      "Instantly matches against 24 federal and state programs — SNAP, Medicaid, housing vouchers, and more",
      "Shows estimated annual savings for each matched program",
    ],
  },
  {
    name: "SBUdate",
    url: "https://sbudate.vercel.app",
    urlLabel: "sbudate.vercel.app",
    github: "https://github.com/Keugene11/sbudate",
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Tailwind CSS", "Capacitor", "Google OAuth"],
    bullets: [
      "Dating app built exclusively for Stony Brook University students — Hinge-style profile discovery with photos, prompts, and a mutual-like matching system",
      "11-step onboarding captures major, grad year, residence hall, and lifestyle preferences for smarter matching",
      "Real-time messaging with read receipts, turn indicators, and unread badges",
      "Available on iOS and Android via Capacitor with automated builds through GitHub Actions",
    ],
  },
  {
    name: "Ardsleypost",
    url: "https://ardsleypost.vercel.app",
    urlLabel: "ardsleypost.vercel.app",
    github: "https://github.com/Keugene11/ardsleypost",
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Stripe", "Tailwind CSS", "Capacitor", "Nodemailer"],
    bullets: [
      "Community social network for Ardsley students, parents, and alumni — combining a news feed with a local services marketplace",
      "Categorized posts (tutoring, babysitting, events, for-sale, jobs, lost-found) with admin moderation and email approval workflows",
      "Built-in payments via Stripe Connect so community members can buy and sell services directly",
      "Available on iOS (App Store) and Android (Google Play) via Capacitor with public browsing for non-authenticated visitors",
    ],
  },
];

const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Vite"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Firebase"] },
  { category: "APIs & AI", items: ["Claude API", "OpenAI API", "Vercel AI SDK", "Stripe API", "Google Places API"] },
  { category: "Tools", items: ["Git", "Vercel", "Supabase", "Capacitor", "Claude Code"] },
];

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-24 pb-16">
      {/* Intro */}
      <section className="mb-16 animate-slide-up">
        <h1 className="text-[32px] font-bold tracking-tight mb-2">Keugene Lee</h1>
        <p className="text-[16px] text-text-muted mb-6">
          Software engineer building AI-powered products.
        </p>
        <div className="flex items-center gap-4">
          <EmailReveal email="keugenelee11@gmail.com" />
          <a
            href="https://github.com/Keugene11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text transition-colors"
            title="GitHub"
          >
            <Github size={18} strokeWidth={1.5} />
          </a>
          <a
            href="https://www.linkedin.com/in/keugene-lee-286246268/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-1.5 text-[13px] text-text-muted hover:text-text transition-colors"
          >
            <Download size={15} strokeWidth={1.5} />
            Resume
          </a>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-[13px] uppercase tracking-widest text-text-muted mb-8 font-medium">
          Projects
        </h2>
        <div className="space-y-14 stagger">
          {projects.map((project) => (
            <div key={project.name}>
              <div className="flex items-baseline justify-between mb-1 gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <h3 className="text-[20px] font-semibold tracking-tight group-hover:underline underline-offset-4 decoration-1">
                    {project.name}
                  </h3>
                </a>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-text transition-colors"
                    title="View source on GitHub"
                  >
                    <Github size={15} strokeWidth={1.5} />
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[13px] text-text-muted hover:text-text transition-colors"
                  >
                    {project.urlLabel} <ExternalLink size={12} strokeWidth={2} />
                  </a>
                </div>
              </div>

              <p className="mt-2 text-[15px] text-text leading-relaxed">
                {project.bullets[0]}
              </p>

              <ul className="mt-2.5 space-y-1.5">
                {project.bullets.slice(1).map((bullet, i) => (
                  <li key={i} className="text-[13px] text-text-muted leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:font-bold">
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] text-text-muted bg-bg-input px-2.5 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16 animate-slide-up">
        <h2 className="text-[13px] uppercase tracking-widest text-text-muted mb-8 font-medium">
          Skills
        </h2>
        <div className="space-y-4">
          {skills.map((group) => (
            <div key={group.category} className="flex items-baseline gap-3">
              <span className="text-[13px] font-medium text-text w-20 flex-shrink-0">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-[12px] text-text-muted bg-bg-input px-2.5 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border pt-6">
        <p className="text-[12px] text-text-muted">
          &copy; {new Date().getFullYear()} Keugene Lee
        </p>
      </footer>
    </main>
  );
}
