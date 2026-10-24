import { Link } from "@tanstack/react-router";
import { Logo } from "./Doodles";

// Irregular hand-drawn starburst behind nav links on hover (lavender outline).
function burstPoints(cx: number, cy: number, spikes: number, r1: number, r2: number, seed = 7) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const pts: string[] = [];
  for (let i = 0; i < spikes * 2; i++) {
    const angle = (Math.PI * i) / spikes - Math.PI / 2;
    const jitter = 0.82 + rand() * 0.36;
    const r = (i % 2 === 0 ? r1 : r2) * jitter;
    pts.push(`${(cx + Math.cos(angle) * r * 1.5).toFixed(1)},${(cy + Math.sin(angle) * r).toFixed(1)}`);
  }
  return pts.join(" ");
}
const BURST = burstPoints(50, 25, 14, 10, 21);

export function SiteNav() {
  return (
    <header className="site-header animate-in fade-in duration-500">
      <nav className="site-nav editorial-boundary" aria-label="Main">
        <Link to="/" className="site-identity group" aria-label="Arfa Munam, home">
          <Logo className="h-6 w-6 transition-transform duration-500 group-hover:-rotate-6" />
          <span>ARFA MUNAM</span>
        </Link>
        <svg className="nav-comet" viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M2 12h9M5 17h5m5-14 2 17 4-6 7 3-5-7Z" /></svg>
        <ul>
          {[
            { label: "Work", to: "/" as const, hash: "work" as const },
            { label: "Sidequests", to: "/sidequests" as const },
            { label: "About", to: "/about" as const },
          ].map((item) => (
            <li key={item.label}>
              <Link to={item.to} hash={"hash" in item ? item.hash : undefined} className="nav-link label-mono">
                <svg className="nav-burst" viewBox="0 0 100 50" aria-hidden="true">
                  <polygon points={BURST} fill="rgba(255,255,255,0.55)" stroke="var(--lavender)" strokeWidth="2.4" strokeLinejoin="round" />
                </svg>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
