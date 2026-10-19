import { useEffect, type RefObject } from "react";
import gsap from "gsap";

/** Soft, eased pointer-follow for elements marked [data-depth]. Desktop + motion-OK only. */
export function usePointerDepth(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>("[data-depth]")).map((node) => {
      const d = parseFloat(node.dataset.depth || "1");
      const r = parseFloat(node.dataset.rot || "0");
      return {
        d, r,
        x: gsap.quickTo(node, "x", { duration: 1.2, ease: "power3.out" }),
        y: gsap.quickTo(node, "y", { duration: 1.2, ease: "power3.out" }),
        rot: gsap.quickTo(node, "rotation", { duration: 1.4, ease: "power3.out" }),
      };
    });
    const onMove = (e: PointerEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      for (const it of items) {
        it.x(nx * it.d * 10);
        it.y(ny * it.d * 10);
        if (it.r) it.rot(nx * it.r);
      }
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [root]);
}
