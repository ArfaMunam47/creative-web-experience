import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/ComingSoon";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Arfa Munam" },
      { name: "description", content: "About Arfa Munam, frontend developer and CS student." },
      { property: "og:title", content: "About — Arfa Munam" },
      { property: "og:description", content: "About Arfa Munam, frontend developer and CS student." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ComingSoon title="About" note="the long story is still being written…" />,
});
