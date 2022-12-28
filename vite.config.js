import { defineConfig } from 'vite'
import vue from 'vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      'assets' : path.resolve(__dirname, './public/assets')
    },
  },
  plugins: [vue()]
})