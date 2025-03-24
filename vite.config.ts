import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: '9090',
    allowedHosts : true
  },
  
  plugins: [react(),
    tailwindcss()
  ],
})
