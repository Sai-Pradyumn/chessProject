import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Ensure source maps are generated
  },
  server: {
    rewrite: {
      // Rewrite rule to handle client-side routing
      '^/.*': '/index.html',
    },
  },
})
