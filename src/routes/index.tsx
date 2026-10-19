import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portrait from "@/assets/arfa-portrait.png.asset.json";
import { usePointerDepth } from "@/components/usePointer";
import {
  Arrow, Brackets, Browser, Cursor, Flower, Folder, Logo, Paperclip, Spark, Squiggle, Wire,
} from "@/components/Doodles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arfa Munam — Frontend Developer" },
      { name: "description", content: "Arfa Munam is a frontend developer building playful interfaces and exploring what happens when code meets AI." },
      { property: "og:title", content: "Arfa Munam — Frontend Developer" },
      { property: "og:description", content: "Playful interfaces, creative coding and AI-assisted experiments by Arfa Munam." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const blobs = [
  { c: "bg-lime", t: "14%", l: "6%", s: 18, d: 2, dur: "16s" },
  { c: "bg-sky", t: "28%", l: "44%", s: 12, d: 3, dur: "19s" },
  { c: "bg-pink", t: "9%", l: "62%", s: 14, d: 1.5, dur: "13s" },
  { c: "bg-coral", t: "62%", l: "3%", s: 10, d: 2.5, dur: "21s" },
  { c: "bg-sun", t: "74%", l: "40%", s: 16, d: 1, dur: "17s" },
  { c: "bg-sky", t: "80%", l: "92%", s: 12, d: 3, dur: "15s" },
  { c: "bg-lime", t: "46%", l: "96%", s: 9, d: 2, dur: "23s" },
  { c: "bg-coral", t: "20%", l: "88%", s: 8, d: 4, dur: "12s" },
];

const tech = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "GSAP", "Git", "GitHub"];
const tools = ["Claude", "Lovable", "Bolt", "Vercel", "Netlify"];

const projects = [
  { name: "Project One", cat: "Frontend / Creative Development", year: "2026", status: "In progress", art: "var(--art-1)", Doodle: Browser },
  { name: "Project Two", cat: "React / Motion", year: "2026", status: "Shipped", art: "var(--art-2)", Doodle: Wire },
  { name: "Project Three", cat: "AI-assisted Build", year: "2025", status: "Experiment", art: "var(--art-3)", Doodle: Spark },
  { name: "Project Four", cat: "Landing / GSAP", year: "2025", status: "Shipped", art: "var(--art-4)", Doodle: Flower },
];

function Home() {
  const root = useRef<HTMLDivElement>(null);
  usePointerDepth(root);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hi] > span", { yPercent: 110, duration: 0.6, stagger: 0.06 }, "-=0.15")
        .fromTo("[data-hl]", { "--hl-scale": 0 }, { "--hl-scale": 1, duration: 0.5 }, "-=0.25")
        .from("[data-hl-text]", { opacity: 0, y: 12, duration: 0.4 }, "<")
        .from("[data-sub]", { opacity: 0, y: 14, duration: 0.45 }, "-=0.2")
        .from("[data-photo]", { opacity: 0, y: 30, rotation: 8, duration: 0.7 }, "-=0.5")
        .from("[data-card]", { opacity: 0, y: 50, rotation: (i: number) => [-6, 4, 7][i] ?? 0, duration: 0.6, stagger: 0.08 }, "-=0.45")
        .from("[data-deco]", { opacity: 0, scale: 0.4, duration: 0.5, stagger: 0.03 }, "-=0.4");

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 40, rotation: parseFloat(el.dataset["reveal"] || "0"), duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="overflow-x-clip">
      {/* HERO */}
      <section className="relative mx-auto max-w-[1400px] border-x border-border px-5 pb-20 pt-14 md:px-8 md:pt-20">
        {blobs.map((b, i) => (
          <span key={i} data-deco className="absolute hidden sm:block" style={{ top: b.t, left: b.l }}>
            <span data-depth={b.d} className="block">
              <span className={`blob animate-drift relative block ${b.c}`} style={{ width: b.s, height: b.s, ["--dur" as string]: b.dur }} />
            </span>
          </span>
        ))}

        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
          <div className="relative">
            <p className="label-mono mb-8 flex items-center gap-2 text-muted-foreground">
              <Spark className="h-4 w-4 animate-spin-slow text-coral" /> Portfolio · Vol. 01 · 2026
            </p>
            <h1 className="font-display text-[clamp(2.6rem,6.2vw,5.8rem)] font-normal leading-[0.98] tracking-[-0.03em]">
              <span data-hi className="block overflow-hidden pb-1">
                <span className="inline-block">Hi,</span> <span className="inline-block">I'm</span>{" "}
                <span className="inline-block italic">Arfa</span>
                <span className="inline-block">.</span>
              </span>
              <span className="mt-2 block">
                <span data-hl-text className="inline-block">a </span>{" "}
                <span data-hl className="hl group cursor-default whitespace-nowrap">
                  Frontend Developer
                  <Spark className="absolute -right-6 -top-5 h-7 w-7 scale-0 text-ink transition-transform duration-500 group-hover:rotate-45 group-hover:scale-100" />
                </span>
              </span>
            </h1>
            <Squiggle className="mt-6 h-4 w-56 text-ink/70" />
            <p data-sub className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              I build <span className="text-foreground">playful, carefully-moving interfaces</span> — and spend my
              spare hours poking at what happens when <span className="hl [--hl-color:var(--sky)]">code meets AI</span>.
            </p>
          </div>

          {/* Portrait as a physical print */}
          <div className="relative mx-auto w-full max-w-[380px]">
            <div data-photo>
              <div data-depth="1.2" data-rot="3" className="relative rotate-[2.5deg] bg-card p-3 pb-14 shadow-[var(--shadow-lift)]">
                <Paperclip className="absolute -top-8 left-10 h-16 w-6 -rotate-12 text-ink" />
                <div className="aspect-[4/5] overflow-hidden" style={{ background: "var(--art-coding)" }}>
                  <img src={portrait.url} alt="Portrait of Arfa Munam" className="h-full w-full object-cover object-top" width={760} height={950} />
                </div>
                <p className="absolute bottom-3 left-4 font-hand text-2xl">me, mid-idea ✶</p>
                <span className="absolute -right-3 top-6 rotate-6 rounded-sm bg-lime px-2 py-0.5 label-mono shadow-sm">open to work</span>
              </div>
            </div>
            <div data-deco className="absolute -left-24 bottom-16 hidden items-end gap-1 xl:flex">
              <span className="mb-6 font-hand text-xl leading-tight">yes, that's<br />the human</span>
              <Arrow className="h-12 w-20 text-ink" />
            </div>
            <span data-deco className="absolute -right-6 -bottom-6 hidden md:block"><Flower className="h-12 w-12 animate-spin-slow text-ink" /></span>
          </div>
        </div>

        {/* Identity cards */}
        <div className="relative mt-20 grid gap-6 md:mt-24 md:grid-cols-3 md:gap-0">
          <IdentityCard n="01" title="Building Interfaces" art="var(--art-interfaces)" tilt="-rotate-2" offset="md:mt-6" depth={1.5}>
            <Browser className="absolute left-5 top-6 w-28 text-ink" />
            <Cursor className="absolute left-32 top-16 w-7 text-ink hover-wiggle" />
            <div className="absolute bottom-5 right-5 grid grid-cols-3 gap-1">
              {Array.from({ length: 9 }).map((_, i) => <span key={i} className={`h-3 w-3 rounded-[3px] border border-ink ${i % 4 === 0 ? "bg-ink" : ""}`} />)}
            </div>
          </IdentityCard>
          <IdentityCard n="02" title="Exploring AI" art="var(--art-ai)" tilt="rotate-1" offset="md:-mx-2 md:mt-16 z-10" depth={2.5}>
            <svg viewBox="0 0 200 110" className="absolute inset-x-5 top-5 h-28 text-ink" aria-hidden>
              <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M30 70 L80 30 L130 60 L170 25 M80 30 L95 85 L130 60" strokeDasharray="4 5" />
              </g>
              {[[30, 70], [80, 30], [130, 60], [170, 25], [95, 85]].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="6" fill="var(--card)" stroke="currentColor" strokeWidth="1.6" />
              ))}
            </svg>
            <span className="absolute bottom-6 right-6 rounded-2xl rounded-br-sm border border-ink bg-card px-3 py-1 font-hand text-lg">make it feel alive…</span>
            <Spark className="absolute right-8 top-6 h-8 w-8 text-ink animate-spin-slow" />
          </IdentityCard>
          <IdentityCard n="03" title="Creative Coding" art="var(--art-coding)" tilt="rotate-3" offset="md:mt-2" depth={1.8}>
            <Brackets className="absolute left-6 top-7 w-20 text-ink" />
            <svg viewBox="0 0 160 80" className="absolute bottom-5 left-5 w-44 text-ink" aria-hidden>
              <path d="M5 70 C 50 70, 60 10, 155 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <circle cx="5" cy="70" r="4" fill="currentColor" /><circle cx="155" cy="10" r="4" fill="var(--card)" stroke="currentColor" strokeWidth="2" />
            </svg>
            <Folder className="absolute right-6 top-8 w-12 text-ink hover-wiggle" />
          </IdentityCard>
        </div>
      </section>

      {/* Context strip */}
      <section className="border-y border-border">
        <div className="mx-auto grid max-w-[1400px] border-x border-border md:grid-cols-3">
          {[
            ["Studying", "BS Computer Science · 5th Semester"],
            ["Currently", "Exploring advanced vibe coding"],
            ["Heading toward", "Full Stack Development + AI Automation"],
          ].map(([k, v], i) => (
            <div key={k} data-reveal="0" className={`flex items-baseline gap-4 px-5 py-6 md:px-8 ${i < 2 ? "border-b border-border md:border-b-0 md:border-r" : ""}`}>
              <span className="label-mono shrink-0 text-muted-foreground">{k}</span>
              <span className="text-sm">{v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tech marquee */}
      <section aria-label="Tools and technologies" className="overflow-hidden border-b border-border py-6">
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
          {[0, 1].map((k) => (
            <div key={k} className="flex items-center gap-10" aria-hidden={k === 1}>
              {tech.map((t) => (
                <span key={t} className="flex items-center gap-10 font-display text-3xl italic md:text-5xl">
                  {t} <Spark className="h-5 w-5 not-italic text-coral" />
                </span>
              ))}
              <span className="label-mono rounded-full border border-ink px-3 py-1">also with →</span>
              {tools.map((t) => (
                <span key={t} className="label-mono text-base text-muted-foreground md:text-lg">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-[1400px] scroll-mt-14 border-x border-border px-5 py-20 md:px-8 md:py-28">
        <div data-reveal="-1" className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.8rem)] leading-none tracking-[-0.03em]">
            Selected things <span className="italic">I've</span> <span className="hl [--hl-color:var(--pink)]">built</span>
          </h2>
          <p className="max-w-xs font-hand text-2xl leading-tight text-muted-foreground">real projects landing here very soon — pinky promise.</p>
        </div>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((p, i) => (
            <article key={p.name} data-reveal={i % 2 ? "1.5" : "-1.5"} className={`group ${i % 2 ? "md:mt-20" : ""}`}>
              <a href="#work" className="block" aria-label={`${p.name} (coming soon)`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border" style={{ background: p.art }}>
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:-rotate-1">
                    <p.Doodle className="w-2/5 text-ink" />
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-card px-3 py-1 label-mono">{p.status}</span>
                  <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-ink text-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">↗</span>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-border pb-4">
                  <h3 className="font-display text-2xl transition-transform duration-500 group-hover:translate-x-1.5 md:text-3xl">{p.name}</h3>
                  <span className="label-mono text-muted-foreground">{p.year}</span>
                </div>
                <p className="mt-2 label-mono text-muted-foreground">{p.cat}</p>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 border-x border-border px-5 py-10 md:flex-row md:items-center md:px-8">
          <p className="font-display text-3xl md:text-4xl">Let's make something <span className="italic">delightful</span>.</p>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Logo className="h-5 w-5 text-ink" /> Arfa Munam · hand-made with React & GSAP · 2026
          </div>
        </div>
      </footer>
    </div>
  );
}

function IdentityCard({ n, title, art, tilt, offset, depth, children }: {
  n: string; title: string; art: string; tilt: string; offset: string; depth: number; children: React.ReactNode;
}) {
  return (
    <div data-card className={offset}>
      <div data-depth={depth}>
        <div className={`group relative h-64 overflow-hidden rounded-2xl border border-ink/80 shadow-[var(--shadow-paper)] transition-all duration-500 hover:-translate-y-1.5 hover:rotate-0 hover:shadow-[var(--shadow-lift)] ${tilt}`} style={{ background: art }}>
          <div className="absolute inset-x-0 top-0 h-40">{children}</div>
          <div className="absolute inset-x-0 bottom-0 flex items-baseline gap-3 bg-card/80 px-5 py-4 backdrop-blur-[2px]">
            <span className="label-mono text-muted-foreground">{n}</span>
            <h3 className="font-display text-2xl">{title}</h3>
            <span className="ml-auto transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}
