import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensures files go into the 'dist' directory
    emptyOutDir: true, // Cleans 'dist' before each build
  },
});
