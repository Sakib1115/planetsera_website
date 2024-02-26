import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "node:path"

export default defineConfig({
  plugins: react({
    include: "**/**/*.jsx",
  }),
  resolve: {
    extensions: [".jsx", ".tsx", ".json", ".js", ".ts"],
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@Components": path.resolve(__dirname, "./src/Components"),
    },
  },
})
