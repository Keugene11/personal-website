import { Mail, ExternalLink, Download, Github, Linkedin, MapPin, Sparkles, MessageCircle, BarChart3, Users, Calendar, Map } from "lucide-react";
import ScreenshotImage from "@/components/ScreenshotImage";

const projects = [
  {
    name: "Daily",
    tagline: "AI-Powered Day Planner",
    description:
      "Generate personalized city itineraries in real-time. Enter a city and budget, and AI synthesizes data from 15+ APIs — Google Places, weather, transit, events, and more — into a complete day plan with interactive maps and clickable venue links.",
    url: "https://getdaily.live",
    stack: ["React", "Express", "TypeScript", "Claude API", "Supabase", "Stripe", "Google Places"],
    features: [
      { icon: MapPin, label: "Real venue data from 15+ APIs" },
      { icon: Map, label: "Interactive map with all locations" },
      { icon: Calendar, label: "Weather-aware outfit suggestions" },
      { icon: Sparkles, label: "AI-generated personalized plans" },
    ],
    screenshots: [
      { src: "/screenshots/daily-1.png", alt: "Daily — plan generation" },
      { src: "/screenshots/daily-2.png", alt: "Daily — itinerary view" },
      { src: "/screenshots/daily-3.png", alt: "Daily — interactive map" },
    ],
  },
  {
    name: "Wingmate",
    tagline: "AI Confidence Coach",
    description:
      "A mobile app that helps users overcome social anxiety through AI coaching and community accountability. Features a raw, unfiltered AI coach that provides personalized openers, breaks down fears, and tracks approach streaks with gamification.",
    url: "https://wingmate.live",
    stack: ["Next.js", "TypeScript", "React 19", "Claude API", "Supabase", "Stripe", "Tailwind CSS"],
    features: [
      { icon: MessageCircle, label: "Real-time AI coaching sessions" },
      { icon: BarChart3, label: "Streak tracking & analytics" },
      { icon: Users, label: "Community feed of shared wins" },
      { icon: Sparkles, label: "Personalized openers & strategies" },
    ],
    screenshots: [
      { src: "/screenshots/wingmate-1.png", alt: "Wingmate — coach view" },
      { src: "/screenshots/wingmate-2.png", alt: "Wingmate — stats dashboard" },
      { src: "/screenshots/wingmate-3.png", alt: "Wingmate — community feed" },
    ],
  },
];

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="text-[15px] font-bold tracking-tight">
          Keugene Lee
        </a>
        <div className="flex items-center gap-6">
          <a href="#projects" className="text-[13px] text-text-muted hover:text-text transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-[13px] text-text-muted hover:text-text transition-colors">
            Contact
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-1.5 text-[13px] bg-primary text-white px-3.5 py-1.5 rounded-full font-medium press hover:bg-primary-dark transition-colors"
          >
            <Download size={13} strokeWidth={2} />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-16 px-6 animate-slide-up">
      <div className="max-w-5xl mx-auto">
        <p className="text-[12px] uppercase tracking-widest text-text-muted mb-4 font-medium">
          Software Engineer
        </p>
        <h1 className="text-[42px] sm:text-[56px] font-extrabold tracking-tight leading-[1.05] mb-6">
          Hi, I&apos;m Keugene.
          <br />
          <span className="text-text-muted">I build AI-powered</span>
          <br />
          <span className="text-text-muted">products.</span>
        </h1>
        <p className="text-[16px] text-text-muted max-w-lg leading-relaxed mb-8">
          Full-stack engineer focused on building real products with AI.
          Currently shipping apps that use Claude, real-time data, and modern web stacks.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="mailto:keugenelee11@gmail.com"
            className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-2xl font-semibold text-[14px] press hover:bg-primary-dark transition-colors"
          >
            <Mail size={16} strokeWidth={1.5} />
            Get in touch
          </a>
          <a
            href="https://github.com/keugene11"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 border border-border rounded-full press hover:bg-bg-card-hover transition-colors"
          >
            <Github size={18} strokeWidth={1.5} />
          </a>
          <a
            href="https://www.linkedin.com/in/keugene-lee-286246268/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 border border-border rounded-full press hover:bg-bg-card-hover transition-colors"
          >
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <div
      className="bg-bg-card border border-border rounded-2xl overflow-hidden animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Screenshots */}
      <div className="flex gap-3 p-5 pb-0 overflow-x-auto">
        {project.screenshots.map((shot, i) => (
          <ScreenshotImage key={i} src={shot.src} alt={shot.alt} />
        ))}
      </div>

      {/* Content */}
      <div className="p-6 pt-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-[22px] font-bold tracking-tight">{project.name}</h3>
            <p className="text-[13px] text-text-muted font-medium">{project.tagline}</p>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[13px] font-semibold border border-border rounded-full px-4 py-2 press hover:bg-bg-card-hover transition-colors"
          >
            Visit
            <ExternalLink size={13} strokeWidth={2} />
          </a>
        </div>

        <p className="text-[14px] text-text-muted leading-relaxed mb-5">{project.description}</p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-2.5 mb-5">
          {project.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-[13px]">
              <feature.icon size={15} strokeWidth={1.5} className="text-text-muted flex-shrink-0" />
              <span>{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="text-[11px] font-medium bg-bg-input text-text-muted px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-[12px] uppercase tracking-widest text-text-muted mb-3 font-medium">Projects</p>
        <h2 className="text-[32px] font-bold tracking-tight mb-8">What I&apos;ve built</h2>
        <div className="grid gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <div className="bg-primary text-white rounded-2xl px-8 py-10 animate-slide-up">
          <p className="text-[12px] uppercase tracking-widest text-white/50 mb-3 font-medium">Contact</p>
          <h2 className="text-[28px] font-bold tracking-tight mb-3">Let&apos;s connect</h2>
          <p className="text-[15px] text-white/70 mb-6 max-w-md leading-relaxed">
            Interested in working together or just want to chat? Reach out anytime.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:keugenelee11@gmail.com"
              className="flex items-center gap-2 bg-white text-primary px-5 py-3 rounded-2xl font-semibold text-[14px] press hover:bg-white/90 transition-colors"
            >
              <Mail size={16} strokeWidth={1.5} />
              keugenelee11@gmail.com
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 border border-white/20 text-white px-5 py-3 rounded-2xl font-semibold text-[14px] press hover:bg-white/10 transition-colors"
            >
              <Download size={16} strokeWidth={1.5} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <p className="text-[12px] text-text-muted">&copy; {new Date().getFullYear()} Keugene Lee</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/keugene11" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text transition-colors">
            <Github size={16} strokeWidth={1.5} />
          </a>
          <a href="https://www.linkedin.com/in/keugene-lee-286246268/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text transition-colors">
            <Linkedin size={16} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
