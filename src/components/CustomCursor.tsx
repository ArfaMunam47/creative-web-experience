import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/**
 * Reference-style two-part cursor: a precise dot that tracks instantly and a
 * soft trailing shape that lags behind. Grows over anything marked
 * [data-cursor]; a big filled circle with a label over media/panels marked
 * data-cursor="view" (+ optional data-cursor-label).
 * Touch devices and prefers-reduced-motion keep the native cursor.
 */

const DOT_SIZE = 8;
const TRAIL_SIZE = 38;
const TRAIL_LERP = 0.16; // lower = floatier trailing
const VIEW_SIZE = 88;

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current!;
    const trail = trailRef.current!;
    const label = labelRef.current!;

    document.documentElement.classList.add("has-custom-cursor");

    const pos = { x: -100, y: -100 };
    const trailPos = { x: -100, y: -100 };
    let state: "default" | "link" | "view" = "default";
    let raf = 0;

    const setState = (next: typeof state) => {
      if (next === state) return;
      state = next;
      const big = next === "view";
      const mid = next === "link";
      const size = big ? VIEW_SIZE : mid ? 58 : TRAIL_SIZE;
      const color = big ? getComputedStyle(document.documentElement).getPropertyValue("--coral").trim() || "#e85d3a" : "";
      gsap.to(trail, { width: size, height: size, duration: 0.35, ease: "power3.out" });
      gsap.to(trail, {
        backgroundColor: big ? color : "transparent",
        borderColor: big ? "transparent" : "",
        opacity: big ? 0.92 : next === "link" ? 0.9 : 0.55,
        duration: 0.3,
        ease: "power3.out",
      });
      gsap.to(dot, { scale: big || mid ? 0 : 1, duration: 0.25, ease: "power3.out" });
      gsap.to(label, { opacity: 1, duration: 0.3 });
      if (!big) label.textContent = "";
    };

    const onMove = (e: PointerEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
      if (target) setState(target.dataset["cursor"] === "view" ? "view" : "link");
      else setState("default");
    };

    const tick = () => {
      trailPos.x += (pos.x - trailPos.x) * TRAIL_LERP;
      trailPos.y += (pos.y - trailPos.y) * TRAIL_LERP;
      dot.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
      trail.style.transform = `translate(${trailPos.x}px, ${trailPos.y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    const onLeave = () => {
      gsap.to([dot, trail], { opacity: 0, duration: 0.2 });
    };
    const onEnter = () => {
      gsap.to([dot, trail], { opacity: 1, duration: 0.2 });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.documentElement.addEventListener("pointerenter", onEnter);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.removeEventListener("pointerenter", onEnter);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div className="custom-cursor" aria-hidden="true">
      <div ref={dotRef} className="cursor-dot" style={{ width: DOT_SIZE, height: DOT_SIZE }} />
      <div ref={trailRef} className="cursor-trail" style={{ width: TRAIL_SIZE, height: TRAIL_SIZE }}>
        <span ref={labelRef} className="cursor-label label-mono" />
      </div>
    </div>
  );
}
