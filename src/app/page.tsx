import { Mail, Github, Linkedin, ExternalLink, Download } from "lucide-react";
import ScreenshotImage from "@/components/ScreenshotImage";

const projects = [
  {
    name: "Daily",
    description: "AI-powered day planner that generates personalized city itineraries from 15+ real-time APIs.",
    url: "https://getdaily.live",
    stack: ["React", "Express", "Claude API", "Supabase"],
    screenshots: [
      { src: "/screenshots/daily-1.png", alt: "Daily screenshot 1" },
      { src: "/screenshots/daily-2.png", alt: "Daily screenshot 2" },
      { src: "/screenshots/daily-3.png", alt: "Daily screenshot 3" },
    ],
  },
  {
    name: "Wingmate",
    description: "AI confidence coach that helps users overcome social anxiety with real-time coaching and streak tracking.",
    url: "https://wingmate.live",
    stack: ["Next.js", "Claude API", "Supabase", "Stripe"],
    screenshots: [
      { src: "/screenshots/wingmate-1.png", alt: "Wingmate screenshot 1" },
      { src: "/screenshots/wingmate-2.png", alt: "Wingmate screenshot 2" },
      { src: "/screenshots/wingmate-3.png", alt: "Wingmate screenshot 3" },
    ],
  },
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
        <div className="space-y-12 stagger">
          {projects.map((project) => (
            <div key={project.name}>
              <div className="flex items-baseline justify-between mb-2">
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
              <p className="text-[14px] text-text-muted leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Screenshots */}
              <div className="flex gap-3 overflow-x-auto mb-4 -mx-1 px-1 pb-2">
                {project.screenshots.map((shot, i) => (
                  <ScreenshotImage key={i} src={shot.src} alt={shot.alt} />
                ))}
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5">
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

      {/* Footer */}
      <footer className="border-t border-border pt-6">
        <p className="text-[12px] text-text-muted">
          &copy; {new Date().getFullYear()} Keugene Lee
        </p>
      </footer>
    </main>
  );
}
