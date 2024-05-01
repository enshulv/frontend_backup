import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import * as commonExternals from 'vite-plugin-commonjs-externals'

// const comjs = commonExternals.default.default
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// comjs({
//   externals: ['path', /^electron(\/.+)?$/],
// })