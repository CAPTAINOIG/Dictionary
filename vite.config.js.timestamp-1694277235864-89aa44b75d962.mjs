// vite.config.js
import { defineConfig } from "file:///C:/Users/OIG/Desktop/React%20Project/TailDictionary/Dico/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/OIG/Desktop/React%20Project/TailDictionary/Dico/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        }
      }
    }
  },
  publicDir: "public",
  manifest: {
    srcPath: "./public/manifest.json"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxPSUdcXFxcRGVza3RvcFxcXFxSZWFjdCBQcm9qZWN0XFxcXFRhaWxEaWN0aW9uYXJ5XFxcXERpY29cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXE9JR1xcXFxEZXNrdG9wXFxcXFJlYWN0IFByb2plY3RcXFxcVGFpbERpY3Rpb25hcnlcXFxcRGljb1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvT0lHL0Rlc2t0b3AvUmVhY3QlMjBQcm9qZWN0L1RhaWxEaWN0aW9uYXJ5L0RpY28vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuXG5idWlsZDoge1xuICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV0uW2V4dF0nLFxuICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS5baGFzaF0uanMnLFxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS5baGFzaF0uanMnLFxuICAgICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xuICAgICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gJ3ZlbmRvcic7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgfSxcbiAgfSxcbn0sXG5wdWJsaWNEaXI6ICdwdWJsaWMnLFxubWFuaWZlc3Q6IHtcbiAgc3JjUGF0aDogJy4vcHVibGljL21hbmlmZXN0Lmpzb24nXG59XG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1csU0FBUyxvQkFBb0I7QUFDalksT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUVuQixPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDWCxRQUFRO0FBQUEsUUFDSixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixhQUFhLElBQUk7QUFDYixjQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDN0IsbUJBQU87QUFBQSxVQUNYO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVztBQUFBLEVBQ1gsVUFBVTtBQUFBLElBQ1IsU0FBUztBQUFBLEVBQ1g7QUFDQSxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
