import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootAttrs: {
      id: 'root',
    },
  },
  css: ['~/assets/css/index.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon'],
  runtimeConfig: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
  icon: {
    mode: 'svg',
    provider: 'none',
    customCollections: [
      {
        prefix: 'icon',
        dir: './app/assets/icons',
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
