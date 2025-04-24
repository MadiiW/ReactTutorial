import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Proxying the Deezer API through the Vite dev‑server avoids browser CORS issues
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.deezer.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});