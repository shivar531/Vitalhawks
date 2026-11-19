import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Only affects the build-time SSR bundle (src/entry-server.jsx): bundle these
  // packages into it rather than loading them from node_modules at prerender time.
  ssr: {
    noExternal: ['framer-motion', 'gsap', 'lucide-react', 'react-icons', '@emailjs/browser'],
  },
})
