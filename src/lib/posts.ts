// src/lib/posts.ts
import { fetchJSON, imageURL } from "./strapi";
import type { Post } from "../types/content";

type StrapiList<T> = { data: { id: number; attributes: any }[] };

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

/**
 * Busca todos os posts do Strapi, ordenados por data decrescente.
 */
export async function getAllPosts(): Promise<Post[]> {
  const json = await fetchJSON<StrapiList<Post>>("posts", {
    query: { sort: "postDate:desc", populate: "cover" },
  });
  return (json.data ?? []).map((item) => mapPost(item));
}

/**
 * Busca um post específico pelo slug.
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const json = await fetchJSON<StrapiList<Post>>("posts", {
    query: { "filters[slug][$eq]": slug, populate: "cover" },
  });
  const first = json.data?.[0];
  return first ? mapPost(first) : null;
}

/**
 * Retorna a URL completa da capa do post (ou undefined se não houver).
 */
export function coverUrl(post?: Post) {
  const u = post?.cover?.data?.attributes?.url;
  return imageURL(u ?? undefined);
}
