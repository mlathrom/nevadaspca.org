import {
  defineConfig
} from 'vite'
import legacy from '@vitejs/plugin-legacy'
import ViteRestart from 'vite-plugin-restart'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    outDir: './web/dist/',
    rollupOptions: {
      input: {
        app: './src/js/app.js',
        home: './src/js/pages/home.js',
      },
    },
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    ViteRestart({
      reload: ['./templates/**/*']
    }),
    vue(),
  ],
  server: {
    port: 8081,
    watch: {
      usePolling: true,
    },
  },
})
