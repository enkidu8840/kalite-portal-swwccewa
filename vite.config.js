import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr"; // ✅ SVG'leri React bileşeni olarak kullanmak için eklendi

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ `@` alias'ını `src` dizinine yönlendiriyoruz
    },
  },
  plugins: [
    react(),
    svgr(), // ✅ SVG desteğini ekledik
  ],
});
