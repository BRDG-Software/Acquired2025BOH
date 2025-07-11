// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  devServer: {
    port: 3232
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      kiosk: process.env.KIOSK || '0',
      polltime_stock: process.env.POLLTIME_STOCK || '10000',
      polltime_order: process.env.POLLTIME_ORDER || '10000'
    }
  }
})
