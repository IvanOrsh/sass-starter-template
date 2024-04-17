import { resolve } from "path";
import { defineConfig } from "vite";

import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";

export default defineConfig({
  root: resolve(__dirname, "src/"),
  plugins: [pluginPurgeCss()],
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, "src", "index.html"),
        about: resolve(__dirname, "src", "about", "index.html"),
      },
    },
  },
});
