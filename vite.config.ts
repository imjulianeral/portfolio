import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import contentCollections from "@content-collections/vite";

// Deployed to Cloudflare Workers via Alchemy (see alchemy.run.ts), which
// appends its own Cloudflare Vite plugin at build/dev time. Do not add
// nitro or @cloudflare/vite-plugin here.
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    contentCollections(),
    tailwindcss(),
    tanstackStart({
      srcDirectory: "src",
    }),
    viteReact(),
  ],
});
