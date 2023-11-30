import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Set the server port to 3000
  },
  build: {
    outDir: "dist", // Specify the output directory for the build
  },
});
