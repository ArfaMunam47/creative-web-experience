import { Link } from "@tanstack/react-router";
import { Logo } from "./Doodles";

const links = [
  { to: "/", label: "Work", hash: "work" },
  { to: "/sidequests", label: "Sidequests" },
  { to: "/about", label: "About" },
] as const;

export function SiteNav() {
  return (
    <header data-nav className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-sm">
      <nav className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-5 md:px-8" aria-label="Main">
        <Link to="/" className="group flex items-center gap-2.5" aria-label="Arfa Munam, home">
          <Logo className="h-7 w-7 transition-transform duration-500 group-hover:-rotate-12" />
          <span className="font-hand text-xl leading-none">arfa munam</span>
        </Link>
        <ul className="flex items-center gap-5 md:gap-9">
          {links.map((l) => (
            <li key={l.label}>
              <Link to={l.to} hash={"hash" in l ? l.hash : undefined} className="link-draw label-mono" activeOptions={{ exact: true, includeHash: true }}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
