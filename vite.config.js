import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const path = require('path')

export default defineConfig({
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, './src/components/'),
      '@/containers': path.resolve(__dirname, './src/containers/'),
      '@/pages': path.resolve(__dirname, './src/pages/'),
      '@/styles': path.resolve(__dirname, './src/styles/'),
      '@/images': path.resolve(__dirname, './src/assets/images/'),
      '@/videos': path.resolve(__dirname, './src/assets/videos/'),
      '@/logos': path.resolve(__dirname, './src/assets/logos/'),
      '@/icons': path.resolve(__dirname, './src/assets/icons/'),
      '@/fonts': path.resolve(__dirname, './src/assets/fonts/'),
      '@/context': path.resolve(__dirname, './src/context/'),
      '@/routes': path.resolve(__dirname, './src/routes/'),
      '@/hooks': path.resolve(__dirname, './src/hooks/'),
      '@/services': path.resolve(__dirname, './src/services/'),
      '@/utils': path.resolve(__dirname, './src/utils/'),
      '@/atoms': path.resolve(__dirname, './src/atoms/'),
      '@/data': path.resolve(__dirname, './src/data/'),
      '@/dashboard': path.resolve(__dirname, './src/pages/Dashboard/')
    }
  },
  plugins: [react()],
  server: {
    host: true
  }
})
