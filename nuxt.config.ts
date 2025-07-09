// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  devServer: {
    port: 3232
  },
  css: ['~/assets/css/main.css']
})
