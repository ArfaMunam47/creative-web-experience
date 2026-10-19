// Hand-drawn style SVG doodles. Stroke uses currentColor so tokens control color.
type P = { className?: string };
const s = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const Logo = ({ className }: P) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden>
    <rect x="1.5" y="1.5" width="29" height="29" rx="9" className="fill-lime" stroke="currentColor" strokeWidth="2.5" transform="rotate(-4 16 16)" />
    <path d="M8.5 24 L15.6 7.5 L23.5 24 M11.4 18 H20.6" {...s} strokeWidth={3.4} />
    <circle cx="25.5" cy="7" r="3" className="fill-pink" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
export const Spark = ({ className }: P) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden><path d="M20 3c1 9 4 13 15 17-11 3-14 7-15 17-1-10-5-14-16-17 11-3 15-8 16-17z" {...s} /></svg>
);
export const Arrow = ({ className }: P) => (
  <svg viewBox="0 0 90 60" className={className} aria-hidden><path d="M4 8c18 2 46 6 58 30M54 34l9 6 3-11" {...s} /></svg>
);
export const Squiggle = ({ className }: P) => (
  <svg viewBox="0 0 220 20" className={className} aria-hidden><path d="M3 12c14-9 22 8 36 0s22-8 36 0 22 8 36 0 22-8 36 0 22 8 36 0 18-6 34-2" {...s} /></svg>
);
export const Brackets = ({ className }: P) => (
  <svg viewBox="0 0 60 40" className={className} aria-hidden><path d="M16 5 5 20l11 15M44 5l11 15-11 15M34 4 26 36" {...s} /></svg>
);
export const Cursor = ({ className }: P) => (
  <svg viewBox="0 0 30 34" className={className} aria-hidden><path d="M4 3l20 14-9 2 5 10-4 2-5-10-7 6z" {...s} className="fill-card" /></svg>
);
export const Flower = ({ className }: P) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden>
    {[0, 72, 144, 216, 288].map((r) => <ellipse key={r} cx="20" cy="10" rx="6" ry="9" transform={`rotate(${r} 20 20)`} {...s} className="fill-pink" />)}
    <circle cx="20" cy="20" r="5" {...s} className="fill-sun" />
  </svg>
);
export const Browser = ({ className }: P) => (
  <svg viewBox="0 0 90 64" className={className} aria-hidden>
    <rect x="3" y="3" width="84" height="58" rx="7" {...s} className="fill-card" />
    <path d="M3 16h84" {...s} /><circle cx="11" cy="10" r="1.6" fill="currentColor" /><circle cx="17" cy="10" r="1.6" fill="currentColor" /><circle cx="23" cy="10" r="1.6" fill="currentColor" />
    <rect x="11" y="24" width="30" height="20" rx="3" {...s} className="fill-lime" /><path d="M49 26h28M49 33h20M49 40h24" {...s} />
  </svg>
);
export const Paperclip = ({ className }: P) => (
  <svg viewBox="0 0 24 60" className={className} aria-hidden><path d="M17 18v26a6 6 0 0 1-12 0V12a4.5 4.5 0 0 1 9 0v30a2 2 0 0 1-4 0V18" {...s} /></svg>
);
export const Wire = ({ className }: P) => (
  <svg viewBox="0 0 120 60" className={className} aria-hidden><path d="M4 50c20 0 18-40 38-40s8 34 26 34 6-26 22-26 16 18 26 12" {...s} /></svg>
);
export const Folder = ({ className }: P) => (
  <svg viewBox="0 0 50 40" className={className} aria-hidden><path d="M4 8h14l4 5h24v22H4z" {...s} className="fill-sun" /></svg>
);
