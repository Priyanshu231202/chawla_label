// vite.config.ts
import { defineConfig } from "file:///C:/Users/jhaab/OneDrive/Desktop/Templates/AS%20PRINTERS_1/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/jhaab/OneDrive/Desktop/Templates/AS%20PRINTERS_1/node_modules/@vitejs/plugin-react-swc/index.js";
import { imagetools } from "file:///C:/Users/jhaab/OneDrive/Desktop/Templates/AS%20PRINTERS_1/node_modules/vite-imagetools/dist/index.js";
import path from "path";
import { componentTagger } from "file:///C:/Users/jhaab/OneDrive/Desktop/Templates/AS%20PRINTERS_1/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\jhaab\\OneDrive\\Desktop\\Templates\\AS PRINTERS_1";
var vite_config_default = defineConfig(({ mode }) => ({
  base: "./",
  server: {
    host: true,
    port: 8080,
    strictPort: true,
    allowedHosts: true,
    hmr: {
      overlay: false
    }
  },
  plugins: [
    react(),
    imagetools(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    },
    dedupe: ["react", "react-dom"]
  },
  build: {
    target: "es2020",
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/") || id.includes("node_modules/react-router") || id.includes("node_modules/scheduler/")) {
            return "react-core";
          }
          if (id.includes("node_modules/framer-motion")) {
            return "framer-motion";
          }
          if (id.includes("node_modules/@radix-ui")) {
            return "radix-ui";
          }
          if (id.includes("node_modules/lucide-react")) {
            return "lucide";
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }
        }
      }
    },
    minify: "esbuild"
  },
  optimizeDeps: {
    include: ["three", "@react-three/fiber", "@react-three/drei", "framer-motion", "lucide-react"]
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqaGFhYlxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXFRlbXBsYXRlc1xcXFxBUyBQUklOVEVSU18xXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqaGFhYlxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXFRlbXBsYXRlc1xcXFxBUyBQUklOVEVSU18xXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9qaGFhYi9PbmVEcml2ZS9EZXNrdG9wL1RlbXBsYXRlcy9BUyUyMFBSSU5URVJTXzEvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCB7IGltYWdldG9vbHMgfSBmcm9tIFwidml0ZS1pbWFnZXRvb2xzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgY29tcG9uZW50VGFnZ2VyIH0gZnJvbSBcImxvdmFibGUtdGFnZ2VyXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xuICBiYXNlOiBcIi4vXCIsXG5cbiAgc2VydmVyOiB7XG4gICAgaG9zdDogdHJ1ZSwgICAgXG4gICAgcG9ydDogODA4MCxcbiAgICBzdHJpY3RQb3J0OiB0cnVlLFxuICAgIGFsbG93ZWRIb3N0czogdHJ1ZSwgICAgXG4gICAgaG1yOiB7XG4gICAgICBvdmVybGF5OiBmYWxzZSxcbiAgICB9LFxuICB9LFxuXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGltYWdldG9vbHMoKSxcbiAgICBtb2RlID09PSBcImRldmVsb3BtZW50XCIgJiYgY29tcG9uZW50VGFnZ2VyKCksXG4gIF0uZmlsdGVyKEJvb2xlYW4pLFxuXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgfSxcbiAgICBkZWR1cGU6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCJdLFxuICB9LFxuXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiBcImVzMjAyMFwiLFxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogNjAwLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3MoaWQ6IHN0cmluZykge1xuICAgICAgICAgIC8vIFJlYWN0IGNvcmVcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBpZC5pbmNsdWRlcyhcIm5vZGVfbW9kdWxlcy9yZWFjdC9cIikgfHxcbiAgICAgICAgICAgIGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9cIikgfHxcbiAgICAgICAgICAgIGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlclwiKSB8fFxuICAgICAgICAgICAgaWQuaW5jbHVkZXMoXCJub2RlX21vZHVsZXMvc2NoZWR1bGVyL1wiKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIFwicmVhY3QtY29yZVwiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEZyYW1lciBNb3Rpb25cbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvblwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiZnJhbWVyLW1vdGlvblwiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJhZGl4IFVJXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzL0ByYWRpeC11aVwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwicmFkaXgtdWlcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBMdWNpZGUgSWNvbnNcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0XCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJsdWNpZGVcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBWZW5kb3IgY2h1bmtcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJub2RlX21vZHVsZXNcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBcInZlbmRvclwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBtaW5pZnk6IFwiZXNidWlsZFwiLFxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbXCJ0aHJlZVwiLCBcIkByZWFjdC10aHJlZS9maWJlclwiLCBcIkByZWFjdC10aHJlZS9kcmVpXCIsIFwiZnJhbWVyLW1vdGlvblwiLCBcImx1Y2lkZS1yZWFjdFwiXSxcbiAgfSxcbn0pKTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQXVXLFNBQVMsb0JBQW9CO0FBQ3BZLE9BQU8sV0FBVztBQUNsQixTQUFTLGtCQUFrQjtBQUMzQixPQUFPLFVBQVU7QUFDakIsU0FBUyx1QkFBdUI7QUFKaEMsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE9BQU87QUFBQSxFQUN6QyxNQUFNO0FBQUEsRUFFTixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixjQUFjO0FBQUEsSUFDZCxLQUFLO0FBQUEsTUFDSCxTQUFTO0FBQUEsSUFDWDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxJQUNYLFNBQVMsaUJBQWlCLGdCQUFnQjtBQUFBLEVBQzVDLEVBQUUsT0FBTyxPQUFPO0FBQUEsRUFFaEIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsSUFDQSxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQUEsRUFDL0I7QUFBQSxFQUVBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLHVCQUF1QjtBQUFBLElBQ3ZCLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGFBQWEsSUFBWTtBQUV2QixjQUNFLEdBQUcsU0FBUyxxQkFBcUIsS0FDakMsR0FBRyxTQUFTLHlCQUF5QixLQUNyQyxHQUFHLFNBQVMsMkJBQTJCLEtBQ3ZDLEdBQUcsU0FBUyx5QkFBeUIsR0FDckM7QUFDQSxtQkFBTztBQUFBLFVBQ1Q7QUFHQSxjQUFJLEdBQUcsU0FBUyw0QkFBNEIsR0FBRztBQUM3QyxtQkFBTztBQUFBLFVBQ1Q7QUFHQSxjQUFJLEdBQUcsU0FBUyx3QkFBd0IsR0FBRztBQUN6QyxtQkFBTztBQUFBLFVBQ1Q7QUFHQSxjQUFJLEdBQUcsU0FBUywyQkFBMkIsR0FBRztBQUM1QyxtQkFBTztBQUFBLFVBQ1Q7QUFHQSxjQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDL0IsbUJBQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLFNBQVMsc0JBQXNCLHFCQUFxQixpQkFBaUIsY0FBYztBQUFBLEVBQy9GO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
