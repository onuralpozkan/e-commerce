import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      "~features": path.resolve(__dirname, "./src/features"),
      "~pages": path.resolve(__dirname, "./src/pages"),
      "~styles": path.resolve(__dirname, "./src/assets/styles"),
      "~common": path.resolve(__dirname, "./src/common"),
    },
  },
});

/*
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      // features folder
      '~features': path.resolve(__dirname, './src/features'),
      // global css
      '~styles': path.resolve(__dirname, './src/assets/styles'),
      // common folders
      '~common': path.resolve(__dirname, './src/common'),
      '~utils': path.resolve(__dirname, './src/common/utils'),
      '~hooks': path.resolve(__dirname, './src/common/hooks'),
      '~components': path.resolve(__dirname, './src/common/components'),
      // locale folders
      '~locales': path.resolve(__dirname, 'src/locales'),
    },
  },
*/
