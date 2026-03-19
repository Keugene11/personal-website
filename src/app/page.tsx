import { Mail, Github, Linkedin, ArrowUpRight, Download } from "lucide-react";

const projects = [
  {
    name: "Daily",
    tagline: "AI-powered day planner",
    url: "https://getdaily.live",
    gradient: "from-blue-500 to-purple-600",
    description:
      "Enter a city and budget. Daily pulls from 15+ APIs — restaurants, weather, transit, events — and streams a complete itinerary with maps, real venues, and prices. Built with React, Express, and Claude.",
    highlights: ["15+ live APIs", "Real-time streaming", "Interactive maps", "Stripe subscriptions"],
  },
  {
    name: "Wingmate",
    tagline: "AI confidence coach",
    url: "https://wingmate.live",
    gradient: "from-purple-500 to-pink-500",
    description:
      "Mobile app with an AI coach that delivers real-time motivation, personalized openers, and fear breakdowns. Tracks approach streaks, daily check-ins, and has a community feed. On the Play Store as a TWA.",
    highlights: ["Claude Sonnet coaching", "Streak tracking", "Community feed", "PWA + Android"],
  },
  {
    name: "Benefits Finder",
    tagline: "Government assistance matcher",
    url: "https://keugene11.github.io/benefits-finder/",
    gradient: "from-emerald-500 to-teal-500",
    description:
      "Answer a short questionnaire and instantly match against 24 federal and state programs — SNAP, Medicaid, housing vouchers, and more — with estimated annual savings.",
    highlights: ["24 programs", "Instant matching", "Savings estimates"],
  },
];

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Express",
  "PostgreSQL", "Supabase", "Firebase", "Tailwind CSS",
  "Claude API", "OpenAI API", "Stripe API", "Vercel",
  "Git", "Vite", "Claude Code",
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient absolute inset-0 opacity-[0.07]" />
        <div className="dot-pattern absolute inset-0 opacity-30" />
        <div className="relative max-w-4xl mx-auto px-6 pt-28 pb-20">
          <div className="animate-slide-up">
            <p className="text-[13px] font-semibold tracking-widest uppercase text-purple-600 mb-4">
              Software Engineer
            </p>
            <h1 className="text-[48px] sm:text-[64px] font-extrabold tracking-tight leading-[1.05] mb-5">
              Hey, I&apos;m{" "}
              <span className="gradient-text">Keugene</span>.
            </h1>
            <p className="text-[18px] text-text-muted max-w-lg leading-relaxed mb-8">
              I build AI-powered products — from idea to deployed, monetized apps.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:keugenelee11@gmail.com"
                className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-semibold text-[14px] press hover:opacity-90 transition-opacity"
              >
                <Mail size={16} strokeWidth={1.5} />
                Get in touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center gap-2 border border-border bg-white px-5 py-3 rounded-xl font-semibold text-[14px] press hover:bg-gray-50 transition-colors"
              >
                <Download size={16} strokeWidth={1.5} />
                Resume
              </a>
              <div className="flex items-center gap-2 ml-2">
                <a
                  href="https://github.com/Keugene11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-white text-text-muted hover:text-text press transition-colors"
                >
                  <Github size={18} strokeWidth={1.5} />
                </a>
                <a
                  href="https://www.linkedin.com/in/keugene-lee-286246268/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-white text-text-muted hover:text-text press transition-colors"
                >
                  <Linkedin size={18} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-[13px] font-semibold tracking-widest uppercase text-purple-600 mb-8 animate-slide-up delay-1">
          Projects
        </h2>
        <div className="grid gap-5">
          {projects.map((project, i) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white rounded-2xl border border-border overflow-hidden card-hover animate-slide-up delay-${i + 1}`}
            >
              {/* Color bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-[22px] font-bold tracking-tight mb-0.5">
                      {project.name}
                    </h3>
                    <p className="text-[14px] text-text-muted">{project.tagline}</p>
                  </div>
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </div>
                </div>

                <p className="text-[15px] text-text-muted leading-relaxed mb-5 max-w-2xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className={`text-[12px] font-medium px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white`}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto px-6 pb-20 animate-slide-up delay-4">
        <h2 className="text-[13px] font-semibold tracking-widest uppercase text-purple-600 mb-6">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-[13px] font-medium bg-white border border-border px-4 py-2 rounded-xl hover:border-purple-300 hover:shadow-sm transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <p className="text-[13px] text-text-muted">
            &copy; {new Date().getFullYear()} Keugene Lee
          </p>
          <div className="flex items-center gap-3">
            <a href="https://github.com/Keugene11" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text transition-colors">
              <Github size={16} strokeWidth={1.5} />
            </a>
            <a href="https://www.linkedin.com/in/keugene-lee-286246268/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text transition-colors">
              <Linkedin size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
