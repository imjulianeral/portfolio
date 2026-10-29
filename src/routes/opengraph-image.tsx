import { createFileRoute } from "@tanstack/react-router";
import { DATA } from "@/data/resume";
import { renderOgImage } from "@/lib/og.server";

export const Route = createFileRoute("/opengraph-image")({
  server: {
    handlers: {
      GET: async () =>
        renderOgImage({
          title: DATA.name,
          description: DATA.description,
        }),
    },
  },
});
