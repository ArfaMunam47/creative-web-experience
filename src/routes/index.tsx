import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import portrait from "@/assets/arfa-me.jpeg.asset.json";
import { usePointerDepth } from "@/components/usePointer";
import { usePortfolioMotion } from "@/components/usePortfolioMotion";
import { DrawnUnderline, IllustratedScenes, ProjectArtwork } from "@/components/PortfolioArt";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Arfa Munam — Frontend Developer & Creative Coding" },
    { name: "description", content: "Arfa Munam builds playful digital experiences through frontend development, creative coding and AI curiosity." },
    { property: "og:title", content: "Arfa Munam — Frontend Developer & Creative Coding" },
    { property: "og:description", content: "An illustrated playground of interfaces, motion and AI experiments by Arfa Munam." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Home,
});

const projects = [
  { name: "Project One", category: "Frontend / Creative Development", year: "2026" },
  { name: "Project Two", category: "React / Motion", year: "2026" },
  { name: "Project Three", category: "AI-assisted Build", year: "2025" },
  { name: "Project Four", category: "Landing / GSAP", year: "2025" },
];
const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "GSAP", "Git", "GitHub"];

function Home() {
  const root = useRef<HTMLDivElement>(null);
  usePointerDepth(root);
  usePortfolioMotion(root);
  return (
    <div ref={root} className="portfolio-page">
      <section className="hero-canvas editorial-boundary" aria-labelledby="intro-heading">
        <div className="living-punctuation" aria-hidden="true">
          {Array.from({ length: 10 }, (_, i) => <span key={i} data-punctuation className={`punctuation punctuation-${i}`}><span data-depth="0.4">{i % 3 === 0 ? "✳" : i % 3 === 1 ? "+" : "〰"}</span></span>)}
        </div>
        <div className="hero-story">
          <p className="hero-eyebrow label-mono" data-support>Arfa Munam · A work in curiosity</p>
          <h1 id="intro-heading" className="hero-heading font-display">
            <span className="text-mask"><span data-greeting>Hi, I'm <em>Arfa</em></span></span>
            <span className="hero-role"><span data-a>a </span><span className="hl title-highlight" data-title-highlight><span data-title>Frontend Developer</span></span></span>
          </h1>
          <p className="hero-support font-display" data-support>
            building playful digital experiences<br />
            where code meets <span className="hl supporting-highlight">AI curiosity</span>.
          </p>
          <DrawnUnderline />
        </div>
        <IllustratedScenes />
        <div className="portrait-moment" data-portrait>
          <figure className="portrait-fragment" data-depth="0.4" data-rot="1">
            <img src={portrait.url} alt="Arfa Munam with her illustrated alter ego" width={768} height={1024} />
          </figure>
          <div className="portrait-note">
            <span className="font-hand">the human behind the code</span>
            <svg viewBox="0 0 130 44" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" aria-hidden="true"><path data-draw d="M122 8C62 2 90 37 8 27m9-7-9 7 11 7" /></svg>
          </div>
          <svg className="portrait-star" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="m15 3 3 10 10 2-10 3-3 10-3-10-10-3 10-2Z" /></svg>
        </div>
        <div className="hero-bottom label-mono"><span>Interfaces · Experiments · Motion</span><a href="#work" className="link-draw">Selected work <span aria-hidden="true">↓</span></a></div>
      </section>

      <section id="work" className="work-section editorial-boundary" aria-labelledby="work-heading">
        <header className="work-heading" data-reveal>
          <svg data-scroll-drawing viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="m21 6 4 13 15 5-15 4-4 14-5-14-13-4 13-5Z" /><path d="m36 6 3 3m-3 0 3-3" /></svg>
          <h2 id="work-heading" className="font-display">Selected <em>work</em></h2>
          <p className="label-mono text-muted-foreground">Archive in progress · 2025—26</p>
        </header>
        <div className="project-grid">
          {projects.map((project, i) => (
            <article key={project.name} className="project-entry" data-reveal>
              <div className="project-visual">
                <ProjectArtwork index={i} />
                <span className="project-status label-mono">Coming soon</span>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </div>
              <div className="project-meta">
                <h3 className="label-mono">{project.name}</h3>
                <p className="label-mono text-muted-foreground">{project.category}<span> · {project.year}</span></p>
              </div>
            </article>
          ))}
        </div>
        <p className="archive-note font-hand">A few things taking shape. Real projects landing here soon.</p>
      </section>

      <section className="practice-section editorial-boundary" aria-labelledby="practice-heading">
        <div className="practice-intro" data-reveal>
          <p className="label-mono text-muted-foreground">Always a work in progress</p>
          <h2 id="practice-heading" className="font-display">A little code.<br /><em>A lot of curiosity.</em></h2>
          <p className="practice-identity">Frontend Developer · Prompt Engineer · AI Enthusiast</p>
        </div>
        <div className="practice-details" data-reveal>
          <dl>{[["Studying", "BS Computer Science · 5th Semester"], ["Exploring", "Advanced Vibe Coding"], ["Heading toward", "Full Stack Development + AI Automation"]].map(([label, value]) => <div key={label}><dt className="label-mono text-muted-foreground">{label}</dt><dd>{value}</dd></div>)}</dl>
        </div>
        <div className="skills-strip" aria-label="Skills">{skills.map((skill) => <span key={skill} className="font-display">{skill}</span>)}</div>
        <p className="tools-line label-mono"><span className="text-muted-foreground">Also in my toolkit</span> Claude · Lovable · Bolt · Vercel · Netlify</p>
      </section>
      <footer className="portfolio-footer editorial-boundary">
        <p className="font-display">Let's make something <em>delightful.</em></p>
        <div className="label-mono text-muted-foreground"><span>Arfa Munam</span><span>Made with curiosity · 2026</span><a href="#intro-heading" className="link-draw" aria-label="Back to top">↑ Back to top</a></div>
      </footer>
    </div>
  );
}
