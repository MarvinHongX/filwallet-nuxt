// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      address: process.env.ADDRESS,
      addressApiUrl: process.env.ADDRESS_API_URL,
      apiUrl: process.env.API_URL,
      apiPassword: process.env.API_PASSWORD,
    }
  },
  app: {
    head: {
        title: 'Fil Wallet',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'filwallet-nuxt' },
          ],
        link: [
          {
              id: 'theme-css',
              rel: 'stylesheet',
              type: 'text/css',
              href: '/themes/theme.css'
          }
        ]
    }
},
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui'],
  css: ['@/assets/styles.scss']
})