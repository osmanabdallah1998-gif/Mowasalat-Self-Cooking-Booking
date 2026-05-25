import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.svg', 'icon-192.svg', 'icon-512.svg'],
      manifest: {
        name: 'Karwa Accommodation Portal',
        short_name: 'Karwa Portal',
        description: 'Mowasalat Karwa – Staff Accommodation Management System',
        theme_color: '#0F172A',
        background_color: '#F1F5F9',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '/Mowasalat-Self-Cooking-Booking/',
        start_url: '/Mowasalat-Self-Cooking-Booking/',
        lang: 'ar',
        dir: 'ltr',
        categories: ['business', 'productivity'],
        icons: [
          {
            src: 'icon-192.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any',
          },
          {
            src: 'icon-512.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
        screenshots: [
          {
            src: 'icon-512.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            form_factor: 'narrow',
            label: 'Karwa Accommodation Dashboard',
          },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,ico,svg,png,webp,woff,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
  base: '/Mowasalat-Self-Cooking-Booking/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          charts: ['recharts'],
          data: ['./src/data/maintenanceData.js', './src/data/initialData.js'],
        },
      },
    },
    chunkSizeWarningLimit: 3000,
  },
})
