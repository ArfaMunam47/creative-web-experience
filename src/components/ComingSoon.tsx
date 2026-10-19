import { Link } from "@tanstack/react-router";
import { Spark } from "./Doodles";

export function ComingSoon({ title, note }: { title: string; note: string }) {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-[1400px] flex-col items-center justify-center border-x border-border px-6 text-center">
      <Spark className="mb-6 h-10 w-10 animate-spin-slow text-coral" />
      <h1 className="font-display text-6xl tracking-tight md:text-8xl"><span className="italic">{title}</span></h1>
      <p className="mt-6 font-hand text-2xl text-muted-foreground">{note}</p>
      <Link to="/" className="link-draw label-mono mt-10">← back home</Link>
    </main>
  );
}
