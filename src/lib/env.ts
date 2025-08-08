// src/lib/env.ts
function stripTrailingSlash(u?: string) {
  return u ? u.replace(/\/+$/, "") : u;
}

export const ENV = {
  STRAPI_URL: stripTrailingSlash(import.meta.env.VITE_STRAPI_URL), // sem /api
  STRAPI_TOKEN: import.meta.env.VITE_STRAPI_TOKEN || "",
};

export function assertEnv() {
  if (!ENV.STRAPI_URL) {
    console.warn("VITE_STRAPI_URL não definido. Ex: http://localhost:1337");
  }
}
