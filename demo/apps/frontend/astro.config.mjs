import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    server: {
      allowedHosts: ['pipe.b28.dev']
    }
  },
  server: {
    port: 4321
  }
});
