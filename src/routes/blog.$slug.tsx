import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/mdx-components";
import { formatDate } from "@/lib/utils";
import { DATA } from "@/data/resume";
import { BLOG_ENABLED } from "@/lib/blog";
import { getSlug, getSortedPosts } from "@/lib/posts";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  beforeLoad: () => {
    if (!BLOG_ENABLED) throw notFound();
  },
  loader: ({ params }) => {
    const sortedPosts = getSortedPosts();
    const currentIndex = sortedPosts.findIndex(
      (post) => getSlug(post) === params.slug,
    );
    const post = sortedPosts[currentIndex];
    if (!post) {
      throw notFound();
    }
    return {
      post,
      previousPost: currentIndex > 0 ? sortedPosts[currentIndex - 1] : null,
      nextPost:
        currentIndex < sortedPosts.length - 1
          ? sortedPosts[currentIndex + 1]
          : null,
    };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {};
    }
    const { post } = loaderData;
    const url = `${DATA.url}/blog/${params.slug}`;
    const ogImage = post.image
      ? `${DATA.url}${post.image}`
      : `${url}/opengraph-image`;
    return {
      meta: [
        { title: `${post.title} | ${DATA.name}` },
        { name: "description", content: post.summary },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.summary },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post.publishedAt },
        { property: "og:url", content: url },
        { property: "og:image", content: ogImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.summary },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();
  const { post, previousPost, nextPost } = Route.useLoaderData();
  const jsonLdContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    description: post.summary,
    image: post.image
      ? `${DATA.url}${post.image}`
      : `${DATA.url}/blog/${slug}/opengraph-image`,
    url: `${DATA.url}/blog/${slug}`,
    author: {
      "@type": "Person",
      name: DATA.name,
    },
  }).replace(/</g, "\\u003c");

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: jsonLdContent,
        }}
      />
      <div className="flex justify-start gap-4 items-center">
        <Link
          to="/blog"
          search={{ page: undefined }}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 mb-6 group"
          aria-label="Back to Blog"
        >
          <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
          Back to Blog
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="title font-semibold text-3xl md:text-4xl tracking-tighter leading-tight">
          {post.title}
        </h1>
        <p className="text-sm text-muted-foreground">
          {formatDate(post.publishedAt)}
        </p>
      </div>
      <div className="my-6 flex w-full items-center">
        <div
          className="flex-1 h-px bg-border"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        />
      </div>
      <article className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
        <MDXContent code={post.mdx} components={mdxComponents} />
      </article>

      <nav className="mt-12 pt-8 max-w-2xl">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {previousPost ? (
            <Link
              to="/blog/$slug"
              params={{ slug: getSlug(previousPost) }}
              className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
            >
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <ChevronLeft className="size-3" />
                Previous
              </span>
              <span className="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal wrap-break-word">
                {previousPost.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block flex-1" />
          )}

          {nextPost ? (
            <Link
              to="/blog/$slug"
              params={{ slug: getSlug(nextPost) }}
              className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors text-right"
            >
              <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                Next
                <ChevronRight className="size-3" />
              </span>
              <span className="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal wrap-break-word">
                {nextPost.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block flex-1" />
          )}
        </div>
      </nav>
    </section>
  );
}
