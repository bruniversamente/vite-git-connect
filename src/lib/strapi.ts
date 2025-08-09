// src/lib/strapi.ts
import { ENV } from "./env";

type Query = Record<string, string | number | boolean | undefined>;
type FetchOptions = RequestInit & { query?: Query };

function buildApiURL(path: string, query?: Query) {
  if (!ENV.STRAPI_URL) throw new Error("STRAPI_URL não configurado");
  // base para API
  const base = `${ENV.STRAPI_URL}/api`;
  const cleanPath = path.replace(/^\/+/, ""); // remove "/" inicial
  const url = new URL(`${base}/${cleanPath}`);
  if (query) {
    Object.entries(query).forEach(([k, v]) => {
      if (v !== undefined) url.searchParams.set(k, String(v));
    });
  }
  return url.toString();
}

/** Fetch JSON na API do Strapi com token opcional */
export async function fetchJSON<T = any>(path: string, options: FetchOptions = {}): Promise<T> {
  const { query, headers, ...rest } = options;
  const url = buildApiURL(path, query);

  const baseHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Normalize RequestInit.headers (HeadersInit) to a plain object
  const normalizedHeaders: Record<string, string> = (() => {
    if (!headers) return {};
    if (headers instanceof Headers) {
      const obj: Record<string, string> = {};
      headers.forEach((v, k) => {
        obj[k] = v;
      });
      return obj;
    }
    if (Array.isArray(headers)) {
      return Object.fromEntries(headers as [string, string][]);
    }
    return headers as Record<string, string>;
  })();

  const finalHeaders: Record<string, string> = {
    ...baseHeaders,
    ...normalizedHeaders,
  };
  if (ENV.STRAPI_TOKEN) {
    finalHeaders.Authorization = `Bearer ${ENV.STRAPI_TOKEN}`;
  }

  console.log("Strapi fetch:", url);
  const res = await fetch(url, { headers: finalHeaders, ...rest });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Strapi ${res.status}: ${text || res.statusText}`);
  }
  return res.json();
}

/** Para imagens/arquivos vindos do Strapi (NÃO usa /api) */
export function imageURL(strapiFileUrl?: string | null) {
  if (!strapiFileUrl) return undefined;
  if (strapiFileUrl.startsWith("http")) return strapiFileUrl;
  if (!ENV.STRAPI_URL) throw new Error("STRAPI_URL não configurado");
  return `${ENV.STRAPI_URL}${strapiFileUrl}`;
}
