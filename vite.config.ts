import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/korporatio_form/',
  build: {
    outDir: 'build', // Change this from 'dist' to 'build',
    emptyOutDir: true, // Add this to clear build directory
  }
})
