// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import tsconfigPaths from "vite-tsconfig-paths";

import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://institucioneducativa89007-4fzq.vercel.app",
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss(), tsconfigPaths()],
  },

  adapter: vercel(),
});
