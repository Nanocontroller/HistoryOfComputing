import { defineConfig } from 'vite'

export default defineConfig({
  base: '/HistoryOfComputing/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['./src/utils/helpers.js']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
