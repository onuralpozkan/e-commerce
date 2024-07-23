import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
      "~styles": path.resolve(__dirname, "src/assets/styles"),
      "~features": path.resolve(__dirname, "src/features"),
      "~components": path.resolve(__dirname, "src/common/components"),
      "~store": path.resolve(__dirname, "src/common/store"),
      "~pages": path.resolve(__dirname, "src/pages"),
    },
  },
});
