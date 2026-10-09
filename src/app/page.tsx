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
      "An AI agent that runs your job search end to end: it finds openings across 20,000+ company career pages, scores how well you fit, answers every application question, and submits from your own browser.",
      "Crawls Greenhouse, Lever, Ashby, Workday, SmartRecruiters, Workable and Recruitee through their public job APIs, 390,000+ open US and remote roles across 20,000+ boards, closing roles by id diff rather than timestamps and skipping the write entirely when a board's listing fingerprint hasn't changed",
      "Two-stage matching: a SQL prefilter and a batched LLM rank on title and location, then a deep score against the full description with reasons, gaps, and hard caps when you miss a real requirement. Your resume goes out exactly as you uploaded it",
      "A Chrome extension sends approved applications hands-off from pinned background tabs in a real browser, since Greenhouse, Lever and Ashby bot-score every submit, with exclusive server-side claims so nothing sends twice. A Workday driver keyed on data-automation-id creates per-employer accounts with AES-256-GCM-encrypted credentials, verifies them through Gmail and walks the multi-step wizard.",
      "Answers you can trust: deterministic rules decide sponsorship, work authorization, self-ID and conflict-of-interest questions before any model sees them, and a second model proofreads every application against your profile before it leaves, flipping anything that contradicts it. Every question and answer is logged and searchable",
      "When a send fails it is triaged, not blindly retried: the fields the form rejected are re-answered and resent, and repeated failures with one signature pause that job site until a fixed extension version checks in. Employer receipts are matched from Gmail every five minutes, so you can see which applications a company has confirmed",
      "A fast lane re-crawls the 1,800 boards that actually produce roles worth applying to every five minutes and applies on arrival, which cut the median age of a job at application time from 13 days to under an hour. Autopilot still owns the limits: one application per employer a month, plan and daily caps, under a cent of model cost per application",    ],
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
      "A desktop app for running many Claude Code sessions at once: every project down the left, its Claude tabs across the top, like an editor where each tab is an agent working in that folder",
      "Real terminals, not a chat wrapper: xterm.js on node-pty with truecolor, copy/paste and font sizing, each tab spawning Claude Code in its project's folder, with PowerShell tabs beside them",
      "Projects come straight from the folders on disk, most recently used first; typing a name that doesn't exist creates the folder and runs git init, and folders opened from anywhere else stay on the list",
      "Keyboard-first, with editor shortcuts for new tab, close, cycle, jump to tab and search, plus a sidebar badge showing how many sessions are open in each project",
      "Plain HTML, CSS and JS with no framework or bundler, packed with electron-packager and installed by a script that writes its own Desktop and Start menu shortcuts",
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
      "A personal AI agent — Claude Code for your life. Your first chat is an interview that builds a long-term memory of you; from then on the agent goes and does things: researches the web, finds places on Google Maps, checks weather and events, drafts messages, manages goals and tasks, and runs recurring routines you approve first",
      "Looks and works like Claude Code in a terminal: a monospace transcript of ● Tool(args) and └ result lines, a thinking spinner with live “Thought for Ns” timing, slash commands, light and dark themes, and effort modes from Fast to Standard, Deep and Marathon. No landing page — visitors land straight in the chat, and signing in runs the message they already typed",
      "A durable run engine so a task can run for up to 45 minutes on 300-second serverless functions: every run is a Postgres row, advanced by chained, lease-based worker invocations with crash recovery and streamed to the client over SSE. Parallel sub-agents run as child runs that wake the parent when they finish",
      "Inference routed across open-weight models — GLM-5.3-Flash via OpenRouter, then DeepSeek, then Groq — with rate-limit-aware retries and per-call cost tracking, so one provider hitting its limit doesn't stop a run",
      "iOS and Android apps through a Capacitor shell with native Sign in with Apple, Google sign-in, APNs push, haptics and Whisper voice input — built and signed in GitHub Actions, with TestFlight and Play internal testing builds uploaded",
      "Free and Pro plans ($20/month or $100/year) billed through Stripe on the web, StoreKit 2 on iOS and Play Billing on Android, with every purchase verified server-side instead of through RevenueCat — plus App Store privacy compliance, including explicit AI data-sharing consent enforced on the server",
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
      "AI music discovery app — enter a song you love and an LLM builds a playlist of tracks you'll actually want to hear, each with an explanation of why",
      "The model weighs genre, vibe, and sonic qualities using Last.fm, TasteDive, and ListenBrainz to match energy and mood, not just genre",
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
    demoHeight: 550,
    demos: [{ label: "Try Demo", url: "https://getdaily.live" }],
    stack: ["React", "Vite", "Express", "TypeScript", "OpenRouter", "Gemini Flash-Lite", "Supabase", "Google Places API"],
    bullets: [
      "AI-powered day planner that turns a city and budget into a complete itinerary, pulling live data from Google Places, weather, transit, events, and more",
      "Backend calls every relevant tool in parallel, then Gemini Flash-Lite (via OpenRouter) synthesizes the results into real venues with prices, clickable Google Maps links, and an interactive map",
      "Watch the plan build live via Server-Sent Events, with a nightlife mode for evening plans and weather-based outfit suggestions",
      "Supabase auth with cloud-synced plan history",
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
