import { Github, Linkedin, ExternalLink } from "lucide-react";
import EmailReveal from "@/components/EmailReveal";
import LiveDemo from "@/components/LiveDemo";

type Project = {
  name: string;
  url: string;
  urlLabel: string;
  github?: string;
  demoHeight?: number;
  demos?: { label: string; url: string }[];
  // For apps that can't be embedded (desktop apps): a real screenshot instead.
  image?: { src: string; alt: string; width: number; height: number };
  // A recorded walkthrough, for apps whose live version shows private data.
  video?: { src: string; poster: string; width: number; height: number };
  stack: string[];
  bullets: string[];
};

const projects: Project[] = [
  {
    name: "Understudy",
    url: "https://understudy.live",
    urlLabel: "understudy.live",
    demoHeight: 560,
    demos: [
      // The public site, signed out. understudy.live's frame-ancestors allows
      // keugenelee.com by name, so it renders in the embed.
      { label: "Try Understudy", url: "https://understudy.live" },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Neon Postgres", "OpenRouter", "Playwright", "Chrome Extension (MV3)", "Gmail API", "Stripe", "Tailwind CSS"],
    bullets: [
      "AI agent that runs your job search: finds roles, scores fit, answers every question, and submits from your browser",
      "140 users and 7,000+ applications sent; crawls 390,000+ roles across 20,000+ career pages on 7 ATSes",
      "Chrome extension sends from real background tabs, including a Workday driver that creates and verifies accounts",
      "Hard rules decide sponsorship and work-authorization answers, and a second model proofreads every application",
    ],
  },
  {
    name: "Deck",
    // A desktop app with no hosted version, so the name links to the repo.
    url: "https://github.com/Keugene11/deck",
    urlLabel: "github.com/Keugene11/deck",
    github: "https://github.com/Keugene11/deck",
    image: { src: "/deck.png", alt: "Deck with four Claude Code tabs open, one mid-task", width: 1800, height: 1126 },
    stack: ["Electron", "xterm.js", "node-pty", "JavaScript", "Claude Code"],
    bullets: [
      "Desktop app for running many Claude Code sessions at once: projects on the left, Claude tabs on top",
      "Sessions sharing a folder commit only their own files and deploy from a clean checkout",
      "Click file paths in output to jump to the line, Ctrl+P fuzzy open, live reload as Claude edits",
    ],
  },
  {
    name: "Watcher",
    // Runs on the owner's PC and its live dashboard shows real activity, so the
    // link is a recorded walkthrough on fake data, not the live site.
    url: "/watcher-demo.mp4",
    urlLabel: "demo video",
    video: { src: "/watcher-demo.mp4", poster: "/watcher-poster.jpg", width: 1280, height: 800 },
    stack: ["Python", "Win32 API", "SQLite", "Claude API", "Next.js 16", "Neon Postgres", "Playwright", "Vercel"],
    bullets: [
      "A focus coach that watches your screen all day and tells you where your time actually went",
      "Logs the active window every 3 seconds and screenshots once a minute; every 10 minutes Claude reviews it and gives specific tips",
      "Privacy first: skips any shot showing a bank, password manager, DM or incognito window, and screenshots never leave the PC",
      "Focus score, deep-work blocks, 7-day trend and a daily debrief, with a phone dashboard to check or pause it",
    ],
  },
  {
    name: "Tarrow",
    url: "https://tarrow.vercel.app",
    urlLabel: "tarrow.vercel.app",
    demoHeight: 560,
    demos: [
      // The real app, signed out: visitors land straight in the chat, and only
      // sending a message asks them to sign in. Checked it sets no
      // X-Frame-Options or frame-ancestors, so it renders in the embed.
      { label: "Try Tarrow", url: "https://tarrow.vercel.app" },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Neon", "OpenRouter", "Groq", "Capacitor", "Stripe", "StoreKit 2", "Whisper", "Tailwind CSS"],
    bullets: [
      "Claude Code for your life: a personal AI agent that researches, plans, drafts messages and runs routines",
      "Terminal-style UI with tool lines, slash commands and effort modes from Fast to Marathon",
      "Durable run engine on Postgres runs tasks up to 45 minutes on serverless functions, streamed over SSE",
      "iOS and Android via Capacitor, billed through Stripe, StoreKit 2 and Play Billing",
    ],
  },
  {
    name: "SoundSense",
    url: "https://soundsense.vercel.app",
    urlLabel: "soundsense.vercel.app",
    github: "https://github.com/Keugene11/SoundSense",
    demoHeight: 420,
    demos: [{ label: "Try Demo", url: "https://soundsense.vercel.app" }],
    stack: ["Next.js 16", "TypeScript", "OpenRouter", "Gemini Flash-Lite", "Supabase", "Tailwind CSS", "YouTube Data API", "Last.fm API"],
    bullets: [
      "Enter a song you love and an LLM builds a playlist, explaining each pick",
      "Matches mood and energy using Last.fm, TasteDive and ListenBrainz",
      "Every track is verified on YouTube so it's real and playable",
    ],
  },
  {
    name: "StonyLoop",
    url: "https://stonyloop.com",
    urlLabel: "stonyloop.com",
    github: "https://github.com/Keugene11/stonyloop",
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Tailwind CSS", "Google OAuth"],
    bullets: [
      "Facebook for Stony Brook students, gated to @stonybrook.edu, 50+ users",
      "Profiles, wall posts, friends, groups and direct messages",
      "Every privacy rule enforced in Postgres row-level security, plus rate limiting and bot detection",
    ],
  },
  {
    name: "Daily",
    url: "https://getdaily.live",
    urlLabel: "getdaily.live",
    github: "https://github.com/Keugene11/daily",
    demoHeight: 550,
    demos: [{ label: "Try Demo", url: "https://getdaily.live" }],
    stack: ["React", "Vite", "Express", "TypeScript", "OpenRouter", "Gemini Flash-Lite", "Supabase", "Google Places API"],
    bullets: [
      "Turns a city and a budget into a full day plan with real venues and prices",
      "Calls Google Places, weather, transit and events in parallel, then an LLM writes the plan",
      "Streams the plan as it builds over Server-Sent Events, with an interactive map",
    ],
  },
];

const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Vite"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Firebase"] },
  { category: "APIs & AI", items: ["Claude API", "OpenRouter", "OpenAI API", "Vercel AI SDK", "Stripe API", "Google Places API"] },
  { category: "Tools", items: ["Git", "Vercel", "Supabase", "Capacitor", "Claude Code"] },
];

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-24 pb-16">
      {/* Intro */}
      <section className="mb-16 animate-slide-up">
        <h1 className="text-[32px] font-bold tracking-tight mb-2">Keugene Lee</h1>
        <p className="text-[16px] text-text-muted mb-2">
          Software engineer building AI-powered products.
        </p>
        <p className="text-[13px] text-text-muted mb-6">
          Open for freelance &amp; contract work — reach out below.
        </p>
        <div className="flex items-center gap-4">
          {/* base64 so the address never ships in plaintext — see EmailReveal */}
          <EmailReveal encoded="a2V1Z2VuZWxlZTExQGdtYWlsLmNvbQ==" />
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
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-[13px] uppercase tracking-widest text-text-muted mb-8 font-medium">
          Projects
        </h2>
        <div className="space-y-14 stagger">
          {projects.map((project, i) => (
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
                  {/* Public repos only: a private one is a 404 to visitors. */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-text transition-colors"
                      title="View source on GitHub"
                    >
                      <Github size={15} strokeWidth={1.5} />
                    </a>
                  )}
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

              {/* Screenshot */}
              {project.image && (
                <a href={project.image.src} target="_blank" rel="noopener noreferrer" className="block mt-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image.src}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    loading="lazy"
                    className="w-full h-auto rounded-xl border border-border"
                  />
                </a>
              )}

              {/* Recorded demo */}
              {project.video && (
                <video
                  src={project.video.src}
                  poster={project.video.poster}
                  width={project.video.width}
                  height={project.video.height}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  className="block mt-5 w-full h-auto rounded-xl border border-border"
                />
              )}

              {/* Live demo embed */}
              {project.demos && (
                <LiveDemo
                  demos={project.demos}
                  height={project.demoHeight ?? 500}
                  // Only the first project's first demo starts on its own. It's
                  // the one above the fold, and waiting for hydration before
                  // even asking for it costs seconds on a slow machine. Every
                  // other demo waits to be scrolled to — see LiveDemo.
                  priority={i === 0}
                />
              )}
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
