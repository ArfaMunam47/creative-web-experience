import { Link } from "@tanstack/react-router";
import { Logo } from "./Doodles";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-500">
      <nav className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-5 md:px-8" aria-label="Main">
        <Link to="/" className="group flex items-center gap-2.5" aria-label="Arfa Munam, home">
          <Logo className="h-7 w-7 transition-transform duration-500 group-hover:-rotate-12" />
          <span className="font-hand text-xl leading-none">arfa munam</span>
        </Link>
        <ul className="flex items-center gap-5 md:gap-9">
          <li><Link to="/" hash="work" className="link-draw label-mono">Work</Link></li>
          <li><Link to="/sidequests" className="link-draw label-mono">Sidequests</Link></li>
          <li><Link to="/about" className="link-draw label-mono">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}
