// src/lib/env.ts
export const ENV = {
  // Base do Strapi (sem /api). Ex.: http://localhost:1337
  STRAPI_URL: import.meta.env.VITE_STRAPI_URL ?? "http://localhost:1337",
  // Token de API (opcional). Use apenas se o conteúdo não for público.
  STRAPI_TOKEN: import.meta.env.VITE_STRAPI_TOKEN ?? undefined,
};

export function assertEnv() {
  if (!ENV.STRAPI_URL) {
    // eslint-disable-next-line no-console
    console.warn("VITE_STRAPI_URL não definido. Usando http://localhost:1337");
  }
}

