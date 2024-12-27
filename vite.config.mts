import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "mjs" : "js"}`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@fluentui/react-components",
        "@fluentui/react-icons",
        "@griffel/react",
      ],
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      exclude: [
        "**/stories.ts",
        "**/stories.tsx",
        "**/tests.ts",
        "**/tests.tsx",
      ],
    }),
  ],
});
