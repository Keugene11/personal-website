import { Mail, Github, Linkedin, ExternalLink, Download } from "lucide-react";

const projects = [
  {
    name: "Wingmate",
    url: "https://wingmate.live",
    urlLabel: "wingmate.live",
    stack: ["Next.js 16", "React 19", "TypeScript", "Claude API", "Vercel AI SDK", "Supabase", "Stripe", "Tailwind CSS"],
    bullets: [
      "Mobile-first AI coaching app that helps people build confidence through real-time Claude Sonnet coaching with personalized openers and fear breakdowns",
      "Tracks daily check-ins, approach streaks, and visualizes progress with stats dashboards and calendar heatmaps",
      "Community feed where users share wins and upvote posts",
      "Available as a PWA and Android app (Google Play Store) with Stripe-powered freemium subscriptions",
    ],
  },
  {
    name: "SoundSense",
    url: "https://soundsense.vercel.app",
    urlLabel: "soundsense.vercel.app",
    stack: ["Next.js 16", "TypeScript", "Claude API", "Supabase", "Tailwind CSS", "FastAPI", "YouTube Data API", "Last.fm API"],
    bullets: [
      "AI music discovery app — enter a song you like and get 10 verified recommendations with explanations of why you'll love each one",
      "Claude analyzes sonic qualities, production techniques, and genre genealogy to find songs that match the energy and mood, not just the genre",
      "Every recommendation is verified across YouTube, Last.fm, MusicBrainz, and ListenBrainz to ensure every song is real and playable",
      "Connects to YouTube Music via OAuth to analyze listening history and generate personalized discovery playlists",
    ],
  },
  {
    name: "Daily",
    url: "https://getdaily.live",
    urlLabel: "getdaily.live",
    stack: ["React", "Vite", "Express", "TypeScript", "Claude API", "Supabase", "Stripe", "Google Places API"],
    bullets: [
      "AI-powered day planner that generates personalized city itineraries from 15+ real-time APIs — Google Places, weather, transit, events, and more",
      "Claude synthesizes all data into a complete plan with real venues, prices, Google Maps links, and an interactive map",
      "Real-time streaming via Server-Sent Events so users watch the plan build live",
      "Monetized with Stripe subscriptions ($4.99/month or $39.99/year)",
    ],
  },
  {
    name: "Benefits Finder",
    url: "https://keugene11.github.io/benefits-finder/",
    urlLabel: "keugene11.github.io/benefits-finder",
    stack: ["React", "JavaScript", "GitHub Pages"],
    bullets: [
      "Interactive tool that helps users discover government assistance programs they qualify for",
      "Short questionnaire about household size, income, and employment status",
      "Instantly matches against 24 federal and state programs — SNAP, Medicaid, housing vouchers, and more",
      "Shows estimated annual savings for each matched program",
    ],
  },
];

const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Vite"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Firebase"] },
  { category: "APIs & AI", items: ["Claude API", "OpenAI API", "Vercel AI SDK", "Stripe API", "Google Places API"] },
  { category: "Tools", items: ["Git", "Vercel", "Supabase", "Claude Code"] },
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
          <a
            href="mailto:keugenelee11@gmail.com"
            className="text-text-muted hover:text-text transition-colors"
            title="Email"
          >
            <Mail size={18} strokeWidth={1.5} />
          </a>
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
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="text-[20px] font-semibold tracking-tight">{project.name}</h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[13px] text-text-muted hover:text-text transition-colors"
                >
                  {project.urlLabel} <ExternalLink size={12} strokeWidth={2} />
                </a>
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
