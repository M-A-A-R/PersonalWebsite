// Vite configuration — enables React JSX transform and sets the dev server port
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],  // Enables fast-refresh and JSX compilation for React
  server: {
    port: 3000,         // Run dev server on localhost:3000
  },
})
