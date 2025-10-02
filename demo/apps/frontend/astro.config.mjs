import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    server: {
      allowedHosts: ['pipe.b28.dev'],
      proxy: {
        '/api': {
          target: 'http://localhost:3002',
          changeOrigin: true,
          rewrite: (path) => path
        }
      }
    }
  },
  server: {
    port: 4321
  }
});
