import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host:true
  },
  resolve: {
    alias: {
       '@': path.resolve(__dirname, 'src')
     }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/styles/abstracts/_mixins.scss";
        @import "./src/styles/abstracts/_variables.scss";
        `
      }
    }
  }
})
