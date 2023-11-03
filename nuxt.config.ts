// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        { src: 'https://api-maps.yandex.ru/v3/?apikey=3ffacca3-3f56-451c-8053-bba1dd639e7e&lang=ru_RU' }
      ]
    },
  },
  routeRules: {
    '/api/v1/**' : {
      proxy: { to: 'https://cleaner.dadata.ru/api/v1/**' },
    },
  },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiKeyDaData: 'fff7eef0f1705df937a773ef18c51ad4d27a0caf',
      baseUrlDaData: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
    },
  },
  modules: ['@element-plus/nuxt'],
});
