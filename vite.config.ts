import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild',
    // Разделение кода
    rollupOptions: {
      output: {
        manualChunks: {
          // Разделяем vendor библиотеки
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion-vendor': ['motion/react'],
        }
      }
    },
    // Увеличиваем лимит предупреждений
    chunkSizeWarningLimit: 1000,
    // Оптимизация
    cssCodeSplit: true,
    sourcemap: false,
  },
  // Оптимизация зависимостей
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'motion/react']
  }
})