// Plugins
import Components from "unplugin-vue-components/vite";
import Vue from "@vitejs/plugin-vue";
import Vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import ViteFonts from "unplugin-fonts/vite";
import VueRouter from "unplugin-vue-router/vite";

// Utilities
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  // For github pages to work, the base path must be set
  // to the root (name) of the repo.
  // https://vitejs.dev/guide/static-deploy.html#github-pages
  // base: "/vuetify-theme-builder/",
  // For netlify this needs to be the root of the repo.
  // base: "/",
  base: process.env.VITE_BASE_URL || "/",
  plugins: [
    VueRouter(),
    Vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: "src/styles/settings.scss"
      }
    }),
    Components(),
    ViteFonts({
      google: {
        families: [
          // { name: "Roboto", styles: "wght@100;300;400;500;700;900" },
          // { name: "Inter", styles: "wght@100;300;400;500;700;900" },
          { name: "Work Sans", styles: "wght@100;300;400;500;700;900" },
          // { name: "Raleway", styles: "wght@100;300;400;500;700;900" },
          // { name: "Noto Sans Mono", styles: "wght@100;300;400;500;700;900" },
          { name: "IBM Plex Mono", styles: "wght@100;300;400;500;700;900" }
        ]
      }
    })
  ],
  define: { "process.env": {} },
  css: {
    preprocessorOptions: {
      scss: {
        /**
         * scss preprocessor.
         * - legacy (default)
         * - modern
         * - modern-compiler
         * @see https://vitejs.dev/config/shared-options#css-preprocessoroptions
         */
        api: "modern-compiler"
      },
      sass: {
        /**
         * sass preprocessor.
         * - legacy (default)
         * - modern
         * - modern-compiler
         * @see https://vitejs.dev/config/shared-options#css-preprocessoroptions
         */
        api: "modern-compiler"
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"]
  },
  server: {
    port: 3000
  }
});
