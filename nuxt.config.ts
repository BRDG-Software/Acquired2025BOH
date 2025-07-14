// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      kiosk1: process.env.KIOSK1 || '0',
      kiosk2: process.env.KIOSK2 || '1',
      polltime_stock: process.env.POLLTIME_STOCK || '10000',
      polltime_order: process.env.POLLTIME_ORDER || '10000'
    }
  }
})
