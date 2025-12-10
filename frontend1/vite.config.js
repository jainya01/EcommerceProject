import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { visualizer } from "rollup-plugin-visualizer";
import history from "connect-history-api-fallback";
import path from "path";

export default defineConfig({
  plugins: [react({ fastRefresh: true }), svgr(), visualizer({ open: false })],

  server: {
    port: 5173,
    open: true,
    setupMiddlewares(middlewares, { app }) {
      app.use(
        history({
          disableDotRule: true,
          rewrites: [{ from: /^(?!\/api)(?!\/themes).*$/, to: "/index.html" }],
        })
      );
      return middlewares;
    },

    proxy: {
      "/api": {
        target: "http://localhost:1600",
        changeOrigin: true,
        rewrite: (path) => path,
      },

      "/themes": {
        target: "http://localhost:1600",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/themes/, "/themes"),
      },

      "/upload": {
        target: "http://localhost:1600",
        changeOrigin: true,
      },
    },

    fs: { strict: false },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  optimizeDeps: {
    esbuildOptions: { target: "es2020" },
  },

  build: { target: "es2020", polyfillDynamicImport: false },
});
