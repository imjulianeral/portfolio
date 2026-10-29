import { createFileRoute } from "@tanstack/react-router";
import { BLOG_ENABLED } from "@/lib/blog";
import { renderOgImage } from "@/lib/og.server";

export const Route = createFileRoute("/blog/opengraph-image")({
  server: {
    handlers: {
      GET: async () => {
        if (!BLOG_ENABLED) return new Response("Not Found", { status: 404 });
        return renderOgImage({
          title: "Blog",
          description: "Thoughts on software development, life, and more.",
        });
      },
    },
  },
});
