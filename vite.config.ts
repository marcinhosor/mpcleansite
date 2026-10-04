// @lovable.dev/vite-tanstack-config already includes the core plugin stack.
// Inside a Lovable build the Nitro preset is forced to Cloudflare; the
// `preset` override below only applies outside Lovable (e.g. Netlify CI),
// so local Lovable previews keep working unchanged.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
  },
});
