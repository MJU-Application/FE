import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@mocks": path.resolve(__dirname, "./src/mocks"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
