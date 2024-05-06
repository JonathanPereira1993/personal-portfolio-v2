import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    include: /\.jsx$/,
    exclude: [],
    loader: "jsx",
  },
  plugins: [react()],
});
