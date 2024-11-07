import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export the Vite configuration with base set to your GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // This should match your GitHub repository name
});
