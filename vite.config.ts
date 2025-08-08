import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(async ({ mode }) => {
  const plugins: any[] = [react()];

  if (mode === "development") {
    try {
      const { componentTagger } = await import("lovable-tagger");
      plugins.push(componentTagger());
    } catch (e) {
      console.warn("[vite] lovable-tagger indisponível, seguindo sem o plugin.");
    }
  }

  return {
    server: { host: "::", port: 8080 },
    plugins,
    resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  };
});