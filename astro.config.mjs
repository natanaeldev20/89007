// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import tsconfigPaths from "vite-tsconfig-paths";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss(), tsconfigPaths()],
  },

  adapter: vercel(),
});
