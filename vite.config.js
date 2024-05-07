import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    base: "/personal-portfolio-v2/",
    include: /\.jsx$/,
    exclude: [],
    loader: "jsx",
  },
  plugins: [react()],
  define: {
    "process.env.VITE_EMAIL_JS_ID": JSON.stringify(
      process.env.VITE_EMAIL_JS_ID
    ),
  },
});
