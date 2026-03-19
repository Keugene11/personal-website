import { Mail, Github, Linkedin, ExternalLink, Download } from "lucide-react";

const projects = [
  {
    name: "Daily",
    url: "https://getdaily.live",
    stack: ["React", "Vite", "Express", "TypeScript", "Claude API", "Supabase", "Stripe", "Google Places API"],
    description: `An AI-powered day planner that creates personalized city itineraries in real-time. Users enter a city and budget, and the app pulls live data from 15+ external APIs — Google Places for restaurants and attractions, weather forecasts, transit schedules, event listings, parking availability, and more — then streams it all to Claude, which synthesizes everything into a complete, contextualized day plan.

Plans include real venue names with prices, clickable Google Maps links, an interactive map plotting every location, weather-based outfit suggestions, and a nightlife mode for evening plans. The backend uses Server-Sent Events to stream each data source as it resolves, so users see the plan build in real-time. Monetized with Stripe subscriptions ($4.99/month or $39.99/year) for unlimited plans.`,
  },
  {
    name: "Wingmate",
    url: "https://wingmate.live",
    stack: ["Next.js 16", "React 19", "TypeScript", "Claude API", "Vercel AI SDK", "Supabase", "Stripe", "Tailwind CSS"],
    description: `A mobile-first AI coaching app designed to help people build confidence and overcome social anxiety around cold approaching. The AI coach uses Claude Sonnet via the Vercel AI SDK to deliver raw, friend-like motivation — not generic chatbot responses — with specific openers tailored to the situation, fear breakdowns, and real-time encouragement.

Beyond coaching, the app tracks daily check-ins (opportunities spotted, approaches made, conversations started), maintains approach streaks with streak freezes, and visualizes progress through stats dashboards and calendar heatmaps. A community feed lets users share wins, upvote posts, and browse others' stories. Available as a PWA and Android app via Trusted Web Activity, with a freemium model — free users get one session, Pro unlocks everything at $15/month or $120/year.`,
  },
  {
    name: "Benefits Finder",
    url: "https://keugene11.github.io/benefits-finder/",
    stack: ["React", "JavaScript", "GitHub Pages"],
    description: `An interactive tool that helps users discover government assistance programs they qualify for. Users answer a short questionnaire about household size, income, and employment status, and the app instantly matches them against 24 federal and state programs — SNAP, Medicaid, housing vouchers, and more — with estimated annual savings.`,
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
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-[20px] font-semibold tracking-tight">{project.name}</h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[13px] text-text-muted hover:text-text transition-colors"
                >
                  Visit <ExternalLink size={12} strokeWidth={2} />
                </a>
              </div>

              {project.description.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-[14px] text-text-muted leading-relaxed mb-3">
                  {paragraph}
                </p>
              ))}

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
