import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { imagetools } from "vite-imagetools";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/",

  server: {
    host: true,
    port: 8080,
    strictPort: true,
    allowedHosts: true,
    hmr: {
      overlay: false,
    },
  },

  plugins: [
    react(),
    imagetools(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },

  build: {
    target: "es2020",
    chunkSizeWarningLimit: 600,
    minify: "esbuild",
  },

  optimizeDeps: {
    include: [
      "three",
      "@react-three/fiber",
      "@react-three/drei",
      "framer-motion",
      "lucide-react",
    ],
  },
}));