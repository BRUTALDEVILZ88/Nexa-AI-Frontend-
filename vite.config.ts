// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // or whatever your frontend uses
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Your Express backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
