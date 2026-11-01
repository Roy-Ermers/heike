import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      features: {
        customElement: new RegExp('/src/.+\.vue'),
      },
      template: {
        compilerOptions: { isCustomElement: (tag) => tag.startsWith('ha-') },
      },
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  build: {
    outDir: 'dist',

    lib: {
      entry: fileURLToPath(new URL('./src/main.ts', import.meta.url)),
      name: 'heike',
      fileName: 'heike',
      formats: ['es'],
    },
  },
});
