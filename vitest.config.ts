import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    environmentMatchGlobs: [["**/*.text.tsx", "jsdom"], ["**/*.component.text.tsx", 'jsdom']],
    globals: true,
    setupFiles: "src/tests/setup.js",
  },
});
