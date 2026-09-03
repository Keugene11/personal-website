import { Github, Linkedin, ExternalLink, Download } from "lucide-react";
import EmailReveal from "@/components/EmailReveal";
import LiveDemo from "@/components/LiveDemo";

const projects = [
  {
    name: "Wingmate",
    url: "https://wingmate.live",
    urlLabel: "wingmate.live",
    github: "https://github.com/Keugene11/Wingmate",
    // No demoHeight: mobile demos are a fixed 390x844 phone (see LiveDemo).
    mobile: true,
    storeLinks: [
      { label: "App Store", url: "https://apps.apple.com/app/id6761027246" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.approachai.twa" },
    ],
    demos: [
      // The real shipped app, signed in as a demo account — not a mockup. This
      // alias resolves the session from the Host header instead of a cookie,
      // which is what makes it work inside a cross-origin iframe.
      { label: "Main App", url: "https://wingmate-demo.vercel.app" },
      // Same alias, for the same reason. Pointed at wingmate.live it was a dead
      // end: no Host-header session, cookies dropped in a cross-origin iframe,
      // so it rendered signed-out and sent visitors to "Create an account" —
      // where Google and Apple both refuse to render sign-in inside a frame.
      { label: "Onboarding", url: "https://wingmate-demo.vercel.app/onboarding" },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Claude API", "Neon", "Stripe", "RevenueCat", "Capacitor", "Firebase", "PostHog", "Tailwind CSS"],
    bullets: [
      "A community of cold approachers — the guys actually going out and talking to strangers, in one room together comparing what worked last night. Live on the Apple App Store and Google Play, completely free with no paywall, with 200+ users and $250+ in revenue earned before it went free",
      "The room itself is a Discord-style chat channel on the home tab — not a feed you scroll past: replies, emoji reactions, edit and delete, @mentions, moderation, and a members directory, with 200+ messages in the main room. Around it, a board to vote on what gets built next and long-form articles on the fundamentals",
      "Find a Wingman is how the community turns into people you actually meet: a live map of who is out tonight, filterable by city, with city group chats and 500+ DMs behind it. Every pin is dropped by hand on the map rather than read off GPS, and expires after seven days — so it shows who is around now instead of a graveyard of people who were around in March",
      "Roster logs every approach — outcome, contact, flake/ghost status — and, unusually, the ones you didn't make, with prompts on what stopped you. 125+ logged so far, feeding insights on conversion, flake-rate by attractiveness, streaks, and a world map of where people are from",
      "Native depth past the webview: a Capacitor shell shipping to both stores, push through FCM on Android and APNs on iOS with an in-app inbox, plus native photo handling and swipe navigation",
      "Built the full billing stack during the app's paid run — RevenueCat for iOS IAP, Stripe for web and Android, webhook-driven entitlement sync, conversion tracking, past-due recovery and win-back offers — now switched off entirely, with every feature unlocked for everyone. Release pipeline automated end to end: Fastlane + GitHub Actions to Play, one-click App Store Connect submission, PostHog funnels",
    ],
  },
  {
    name: "Otto",
    url: "https://cluely-delta.vercel.app",
    urlLabel: "cluely-delta.vercel.app",
    github: "https://github.com/Keugene11/cluely",
    demoHeight: 560,
    demos: [
      // The real assistant, unauthenticated: type a question and Claude answers
      // in the same panel the desktop app renders. "Share a window" hands it a
      // screenshot, which is as close to the real screen-reading as a browser
      // tab is allowed to get — the iframe carries display-capture for it.
      { label: "Try Otto", url: "https://cluely-delta.vercel.app/demo" },
      { label: "Landing", url: "https://cluely-delta.vercel.app" },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Electron", "Claude API", "Neon", "Whisper (transformers.js)", "Tailwind CSS", "electron-builder"],
    bullets: [
      "Always-on-top desktop assistant for Windows that can see your screen and use your computer — one hotkey reads whatever is in front of you and either answers it, walks you through it, or does it for you",
      "No mode switch: Claude decides per message whether the reply is an answer, a step-by-step walkthrough, or launching an app, and all three land in the same thread — the user never picks a tool",
      "Drives real input through a PowerShell host process — click, double-click, drag, scroll, typing, key combos, and restoring a minimized window — with a guiding cursor drawn on a full-screen click-through overlay so you can see what it is about to press. Every step declares what should be true on screen afterwards, gets re-checked against a fresh screenshot before the next one starts, and retries up to three times rather than claiming it worked",
      "Push-to-talk transcription runs entirely on-device — Whisper through transformers.js, imported from a CDN at runtime so it needs no extra API key and adds nothing to the installer — and answers are spoken back through the Web Speech API",
      "Desktop shell built on Electron with global hotkeys, a bar that resizes to hug its content and can be hidden from screen recording, and auto-updates via electron-updater. The UI is served from Vercel rather than bundled, so shipping a change never means shipping a new binary. Sessions end with a generated summary, key points, action items and a follow-up draft, stored in Neon behind JWT auth",
    ],
  },
  {
    name: "Manual Support Agent",
    url: "https://prox-challenge-sooty.vercel.app",
    urlLabel: "prox-challenge-sooty.vercel.app",
    github: "https://github.com/Keugene11/manual-support-agent",
    demos: [{ label: "Try Demo", url: "https://prox-challenge-sooty.vercel.app" }],
    stack: ["Next.js 16", "TypeScript", "Claude API", "Tailwind CSS", "pdfjs-dist", "Vercel"],
    bullets: [
      "AI support agent for the Vulcan OmniPro 220 industrial welding machine — turns a 48-page manual into an expert you can ask anything",
      "Indexes the manual offline with Claude Sonnet vision: each page is rendered, captioned, and stored as a pre-built knowledge base — 90 seconds from clone to first answer",
      "Surfaces relevant manual diagrams and schematics alongside answers — duty cycles, polarity setups, wire feed troubleshooting, and weld diagnosis",
      "Hand-rolled tool loop on Next.js App Router to stay within Vercel's 250MB serverless limit while maintaining full streaming",
    ],
  },
  {
    name: "SoundSense",
    url: "https://soundsense.vercel.app",
    urlLabel: "soundsense.vercel.app",
    github: "https://github.com/Keugene11/SoundSense",
    demoHeight: 420,
    demos: [{ label: "Try Demo", url: "https://soundsense.vercel.app" }],
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
    demoHeight: 550,
    demos: [{ label: "Try Demo", url: "https://getdaily.live" }],
    stack: ["React", "Vite", "Express", "TypeScript", "Claude API", "Supabase", "Google Places API"],
    bullets: [
      "AI-powered day planner that turns a city and budget into a complete itinerary, pulling live data from Google Places, weather, transit, events, and more",
      "Backend calls every relevant tool in parallel, then Claude Haiku synthesizes the results into real venues with prices, clickable Google Maps links, and an interactive map",
      "Watch the plan build live via Server-Sent Events, with a nightlife mode for evening plans and weather-based outfit suggestions",
      "Supabase auth with cloud-synced plan history",
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

              {/* Store links */}
              {"storeLinks" in project && project.storeLinks && (
                <div className="flex gap-2 mt-3">
                  {project.storeLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="press flex items-center gap-1.5 text-[12px] text-text-muted bg-bg-input border border-border px-3 py-1.5 rounded-full hover:text-text transition-colors"
                    >
                      <ExternalLink size={11} strokeWidth={2} />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              {/* Live demo embed */}
              {project.demos && (
                <LiveDemo
                  demos={project.demos}
                  mobile={"mobile" in project ? project.mobile : false}
                  height={"demoHeight" in project ? project.demoHeight : 500}
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
