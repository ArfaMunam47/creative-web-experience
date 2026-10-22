import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function usePortfolioMotion(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
        // Text first: masked greeting, highlight swipe, supporting line.
        timeline.fromTo("[data-greeting]", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, 0.2)
          .fromTo("[data-a]", { opacity: 0 }, { opacity: 1, duration: 0.35 }, 0.36)
          .fromTo("[data-title-highlight]", { "--hl-scale": 0 }, { "--hl-scale": 1, duration: 0.45 }, 0.45)
          .fromTo("[data-title]", { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, 0.55)
          .fromTo("[data-support]", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, 0.65)
          // Open box appears, then the three panels assemble out of it —
          // launching from the box, left panel leading, ~0.9s playful settle.
          .fromTo("[data-box]", { opacity: 0, y: 44, scale: 0.92 }, { opacity: 1, y: 0, scale: 1, duration: 0.5 }, 0.72)
          .fromTo("[data-scene]",
            { opacity: 0, y: 130, scale: 0.55, rotation: (i: number) => [-14, 10, -10][i], transformOrigin: "50% 130%" },
            { opacity: 1, y: 0, scale: 1, rotation: (i: number) => [-1, 0, 1][i], duration: 0.9, ease: "back.out(1.2)", stagger: 0.14 },
            0.95);
        element.querySelectorAll<SVGPathElement>("[data-draw]").forEach((line) => {
          const length = line.getTotalLength();
          timeline.fromTo(line, { strokeDasharray: length, strokeDashoffset: length }, { strokeDashoffset: 0, duration: 0.6 }, 0.8);
        });
        // Confetti pops in early, then drifts gently forever.
        gsap.utils.toArray<HTMLElement>("[data-particle]").forEach((item, i) => {
          gsap.fromTo(item, { opacity: 0, scale: 0.4 }, { opacity: 0.85, scale: 1, duration: 0.5, delay: 0.1 + i * 0.03, ease: "power3.out" });
          gsap.to(item, { x: i % 2 ? 10 : -12, y: i % 3 ? -14 : 12, duration: 5 + (i % 5) * 1.3, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.4 });
        });
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
          gsap.fromTo(item, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, scrollTrigger: { trigger: item, start: "top 94%", once: true } });
        });
        gsap.to("[data-scroll-drawing]", { x: 55, rotation: 12, ease: "none", scrollTrigger: { trigger: "#work", start: "top bottom", end: "top 35%", scrub: 1 } });
      }, element);
      return () => ctx.revert();
    });
    media.add("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)", () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-scene]").forEach((scene, i) => {
          gsap.to(scene, { x: i === 0 ? -20 : i === 2 ? 20 : 0, y: i === 1 ? -12 : 8, ease: "none", scrollTrigger: { trigger: ".hero-canvas", start: "top top", end: "bottom top", scrub: 1 } });
        });
      }, element);
      return () => ctx.revert();
    });
    return () => media.revert();
  }, [root]);
}
