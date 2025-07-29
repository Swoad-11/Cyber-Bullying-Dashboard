import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: true,
    proxy: {
      "/api/reports": {
        target: "https://script.google.com",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            /^\/api\/reports/,
            "/macros/s/AKfycbzM3-p1bDUnH4DEuHes-zOW8mG2uaxKHkxTjxeIKmU_SoOu247rpDH9iM4Wi5MKjxSp/exec"
          ),
      },
    },
  },
  appType: "spa",
});
