import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    sourcemap: mode === "development" ? true : false, // Enable sourcemaps in development, disable in production
  },
}));
