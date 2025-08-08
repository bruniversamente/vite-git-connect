// src/lib/strapi.ts
import { ENV } from "./env";

type FetchOptions = RequestInit & { query?: Record<string, string | number | boolean> };

export function buildURL(path: string, query?: Record<string, any>) {
  const clean = path.replace(/^\/+/, "");
  // Prefixa sempre /api para endpoints REST do Strapi
  const url = new URL(`api/${clean}`, ENV.STRAPI_URL + "/");
  if (query) {
    Object.entries(query).forEach(([k, v]) => {
      if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
    });
  }
  return url.toString();
}

export async function fetchJSON<T = any>(path: string, options: FetchOptions = {}): Promise<T> {
  const { query, headers, ...rest } = options;
  const url = buildURL(path, query);
  const baseHeaders: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  if (ENV.STRAPI_TOKEN) baseHeaders["Authorization"] = `Bearer ${ENV.STRAPI_TOKEN}`;
  const finalHeaders: HeadersInit = { ...baseHeaders, ...(headers as any) };
  const res = await fetch(url, {
    headers: finalHeaders,
    ...rest,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Strapi ${res.status}: ${text || res.statusText}`);
  }
  return res.json();
}

export function imageURL(strapiFileUrl?: string | null) {
  if (!strapiFileUrl) return undefined;
  // Se vier só o caminho (/uploads/...), prefixa STRAPI base (sem /api)
  if (strapiFileUrl.startsWith("http")) return strapiFileUrl;
  return `${ENV.STRAPI_URL}${strapiFileUrl}`;
}

