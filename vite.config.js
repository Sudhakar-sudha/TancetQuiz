import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    
    tailwindcss(),
  ],
  esbuild: {
    loader: "jsx", // Tell esbuild to parse JSX in .js files
  },
})
