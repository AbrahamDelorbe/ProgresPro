import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 5173,
    watch: {
      // Restart any time a new module is installed. 
      ignored: /node_modules/,
    },
  },

  plugins: [react()],
});