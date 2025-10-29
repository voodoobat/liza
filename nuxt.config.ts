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
  modules: ['@nuxt/eslint'],
  vite: {
    plugins: [tailwindcss()],
  },
})
