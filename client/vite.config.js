import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import * as path from "path";

export default defineConfig({
  server: {
    port: 4000,
    host: "127.0.0.1",
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  plugins: [vue()],
});
