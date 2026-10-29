import { createFileRoute } from "@tanstack/react-router";
import { BLOG_ENABLED } from "@/lib/blog";
import { renderOgImage } from "@/lib/og.server";
import { getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export const Route = createFileRoute("/blog/$slug/opengraph-image")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        if (!BLOG_ENABLED) return new Response("Not Found", { status: 404 });
        const post = getPostBySlug(params.slug);
        if (!post) {
          return renderOgImage({
            title: "Post Not Found",
          });
        }
        return renderOgImage({
          title: post.title,
          description: post.summary,
          date: post.publishedAt ? formatDate(post.publishedAt) : undefined,
        });
      },
    },
  },
});
