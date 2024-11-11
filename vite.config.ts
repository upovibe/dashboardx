import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'  // Use node:path for ES modules

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
