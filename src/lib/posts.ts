// src/lib/posts.ts
import { fetchJSON } from "./strapi";
import type { Post } from "../types/content";

type StrapiList<T> = { data: any[] };

function mapPost(a: any): Post {
  const attrs = a?.attributes ?? a;
  return {
    slug: attrs.slug,
    title: attrs.title,
    excerpt: attrs.excerpt ?? null,
    postDate: attrs.postDate ?? null,
    cover: attrs.cover,
    content: attrs.content ?? null,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const json = await fetchJSON<StrapiList<Post>>("posts", {
    query: { sort: "postDate:desc", populate: "cover" },
  });
  return (json.data ?? []).map(mapPost);
}

export async function getPostBySlug(slug?: string): Promise<Post | null> {
  if (!slug) return null;
  const json = await fetchJSON<StrapiList<Post>>("posts", {
    query: { "filters[slug][$eq]": slug, populate: "cover" },
  });
  const first = json.data?.[0];
  return first ? mapPost(first) : null;
}
