import { allPosts } from "content-collections";

export type Post = (typeof allPosts)[number];

export function getSlug(post: Post) {
  return post._meta.path.replace(/\.mdx$/, "");
}

export function getSortedPosts() {
  return [...allPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });
}

export function getPostBySlug(slug: string) {
  return getSortedPosts().find((post) => getSlug(post) === slug);
}
