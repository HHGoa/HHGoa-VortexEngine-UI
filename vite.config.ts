import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "build",
    rollupOptions: {
      external: ["aptos"],
    },
  },
  server: {
    open: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./frontend"),
    },
  },
});
