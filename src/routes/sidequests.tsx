import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/sidequests")({
  head: () => ({
    meta: [
      { title: "Sidequests — Arfa Munam" },
      { name: "description", content: "Little experiments and side projects by frontend developer Arfa Munam." },
      { property: "og:title", content: "Sidequests — Arfa Munam" },
      { property: "og:description", content: "Little experiments and side projects by Arfa Munam." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ComingSoon title="Sidequests" note="tiny experiments are being sketched…" />,
});
