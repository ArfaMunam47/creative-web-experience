import { Link } from "@tanstack/react-router";
import { Logo } from "./Doodles";

export function SiteNav() {
  return (
    <header className="site-header animate-in fade-in duration-500">
      <nav className="site-nav editorial-boundary" aria-label="Main">
        <Link to="/" className="site-identity group" aria-label="Arfa Munam, home">
          <Logo className="h-6 w-6 transition-transform duration-500 group-hover:-rotate-6" />
          <span>arfa munam</span>
        </Link>
        <svg className="nav-comet" viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M2 12h9M5 17h5m5-14 2 17 4-6 7 3-5-7Z" /></svg>
        <ul>
          <li><Link to="/" hash="work" className="link-draw label-mono">Work</Link></li>
          <li><Link to="/sidequests" className="link-draw label-mono">Sidequests</Link></li>
          <li><Link to="/about" className="link-draw label-mono">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}
