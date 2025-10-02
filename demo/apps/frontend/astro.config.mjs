import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      allowedHosts: ['pipe.b28.dev']
    }
  },
  server: {
    port: 4321
  }
});
