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
        timeline.fromTo("[data-greeting]", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, 0.2)
          .fromTo("[data-a]", { opacity: 0 }, { opacity: 1, duration: 0.35 }, 0.36)
          .fromTo("[data-title-highlight]", { "--hl-scale": 0 }, { "--hl-scale": 1, duration: 0.45 }, 0.45)
          .fromTo("[data-title]", { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, 0.55)
          .fromTo("[data-support]", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, 0.65)
          .fromTo("[data-scene]", { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.07 }, 0.85)
          .fromTo("[data-portrait]", { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 }, 1.02)
          .fromTo("[data-punctuation]", { opacity: 0, scale: 0.5 }, { opacity: 0.75, scale: 1, duration: 0.6, stagger: 0.03 }, 0.12);
        element.querySelectorAll<SVGPathElement>("[data-draw]").forEach((line) => {
          const length = line.getTotalLength();
          timeline.fromTo(line, { strokeDasharray: length, strokeDashoffset: length }, { strokeDashoffset: 0, duration: 0.6 }, 0.8);
        });
        gsap.utils.toArray<HTMLElement>("[data-punctuation]").forEach((item, i) => {
          gsap.to(item, { x: i % 2 ? 7 : -9, y: i % 3 ? -8 : 11, rotation: i % 2 ? 8 : -6, duration: 4 + i * 0.7, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.5 });
        });
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
          gsap.fromTo(item, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, scrollTrigger: { trigger: item, start: "top 94%", once: true } });
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