import { useEffect, useRef, useState } from "react";

/**
 * Reference-style cursor: a solid raspberry dot that tracks the pointer
 * immediately, plus a short-lived soft pink brush tail that follows the
 * recent motion path and fades fast (canvas, transform-only redraw).
 * Touch devices and prefers-reduced-motion keep the native cursor.
 */

const DOT = 18;
const TAIL_COLOR = "243,67,105"; // raspberry, rgb
const TAIL_MS = 110; // how long the tail lives
const MAX_POINTS = 40;

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (fine && !reduced) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const dot = dotRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    document.documentElement.classList.add("has-custom-cursor");

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    resize();

    let pos = { x: -100, y: -100 };
    let history: { x: number; y: number; t: number }[] = [];
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      dot.style.transform = `translate3d(${pos.x - DOT / 2}px, ${pos.y - DOT / 2}px, 0)`;
      history.push({ x: pos.x, y: pos.y, t: performance.now() });
      if (history.length > MAX_POINTS) history.shift();
    };

    const tick = () => {
      const now = performance.now();
      history = history.filter((p) => now - p.t < TAIL_MS);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Brush tail: overlapping soft circles along the recent path, fading fast.
      for (let i = 1; i < history.length; i++) {
        const a = history[i - 1];
        const b = history[i];
        const age = 1 - (now - b.t) / TAIL_MS; // 1 fresh -> 0 old
        for (let s = 0; s <= 3; s++) {
          const x = a.x + (b.x - a.x) * (s / 3);
          const y = a.y + (b.y - a.y) * (s / 3);
          const local = age * (s / 3 + (i / history.length) * 0.3);
          if (local <= 0.02) continue;
          ctx.beginPath();
          ctx.fillStyle = `rgba(${TAIL_COLOR},${(0.28 * local).toFixed(3)})`;
          ctx.arc(x * dpr, y * dpr, (2 + 7 * local) * dpr, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div className="custom-cursor" aria-hidden="true">
      <canvas ref={canvasRef} className="cursor-canvas" />
      <div ref={dotRef} className="cursor-dot" style={{ width: DOT, height: DOT }} />
    </div>
  );
}
