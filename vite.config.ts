import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  ssr: {
    noExternal: ["lucide-react"],
  },
  optimizeDeps: {
    include: ["lucide-react"],
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [reactRouter(), tsconfigPaths()],
});
