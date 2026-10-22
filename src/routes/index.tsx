import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { usePointerDepth } from "@/components/usePointer";
import { usePortfolioMotion } from "@/components/usePortfolioMotion";
import { DrawnUnderline, IllustratedScenes, OpenBox, PinkRibbon, ProjectArtwork } from "@/components/PortfolioArt";
import { Folder } from "@/components/Doodles";

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

// Soft glowing confetti: electric blue, lime, coral — blurred spots that drift gently.
const particles = [
  { c: "electric", t: "12%", l: "9%", s: 22 }, { c: "lime", t: "9%", l: "26%", s: 14 },
  { c: "coral", t: "20%", l: "16%", s: 16 }, { c: "electric", t: "34%", l: "6%", s: 18 },
  { c: "lime", t: "52%", l: "10%", s: 24 }, { c: "coral", t: "70%", l: "7%", s: 15 },
  { c: "electric", t: "84%", l: "15%", s: 20 }, { c: "lime", t: "16%", l: "84%", s: 18 },
  { c: "coral", t: "9%", l: "70%", s: 15 }, { c: "electric", t: "28%", l: "92%", s: 22 },
  { c: "lime", t: "46%", l: "89%", s: 14 }, { c: "coral", t: "62%", l: "93%", s: 19 },
  { c: "electric", t: "78%", l: "88%", s: 24 }, { c: "lime", t: "90%", l: "76%", s: 15 },
  { c: "coral", t: "88%", l: "42%", s: 17 }, { c: "electric", t: "40%", l: "30%", s: 12 },
  { c: "lime", t: "26%", l: "44%", s: 13 }, { c: "coral", t: "58%", l: "62%", s: 12 },
  { c: "electric", t: "66%", l: "36%", s: 14 }, { c: "lime", t: "74%", l: "58%", s: 13 },
];

function Home() {
  const root = useRef<HTMLDivElement>(null);
  usePointerDepth(root);
  usePortfolioMotion(root);
  return (
    <div ref={root} className="portfolio-page">
      <section className="hero-canvas editorial-boundary" aria-labelledby="intro-heading">
        <PinkRibbon className="hero-ribbon" />
        <div className="hero-particles" aria-hidden="true">
          {particles.map((p, i) => (
            <span key={i} data-particle className={`hero-particle hp-${p.c}`} style={{ top: p.t, left: p.l, width: p.s, height: p.s }} />
          ))}
        </div>
        <div className="hero-story">
          <p className="hero-eyebrow label-mono" data-support>Arfa Munam · A work in curiosity</p>
          <h1 id="intro-heading" className="hero-heading font-display">
            <span className="text-mask"><span data-greeting>Hi, I'm <em>Arfa</em></span></span>
            <span className="hero-role"><span data-a>a </span><span className="hl title-highlight" data-title-highlight><span data-title>Frontend Developer</span></span></span>
          </h1>
          <p className="hero-support font-display" data-support>
            and here's everything i know about<br />
            building playful things where <span className="hl supporting-highlight">code meets AI</span>.
          </p>
          <DrawnUnderline />
        </div>
        <IllustratedScenes />
        <div className="hero-box" data-box>
          <OpenBox className="hero-box-art" />
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
        <PinkRibbon className="footer-ribbon" flip />
        <Folder className="footer-folder" />
        <p className="font-display">Let's make something <em>delightful.</em></p>
        <div className="label-mono text-muted-foreground"><span>Arfa Munam</span><span>Made with curiosity · 2026</span><a href="#intro-heading" className="link-draw" aria-label="Back to top">↑ Back to top</a></div>
      </footer>
    </div>
  );
}
