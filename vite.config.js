import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入windi css
import WindiCSS from 'vite-plugin-windicss'
// 引入path
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src")
    }
  },
  plugins: [vue(), WindiCSS()],
})
