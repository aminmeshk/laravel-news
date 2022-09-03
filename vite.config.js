import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

const domain = 'laravel-news.test';
const homeDir = require('os').homedir();

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.jsx',
      refresh: true,
    }),
    react(),
  ],
  server: {
    https: {
      key: homeDir + '/.config/valet/Certificates/' + domain + '.key',
      cert: homeDir + '/.config/valet/Certificates/' + domain + '.crt',
    },
    host: domain,
  },
});
