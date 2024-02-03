// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: '/css/global.css',
        },
      ],
    },
  },
  css:['@/assets/bootstrap/main.scss'],
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: '123',

    // Public keys that are exposed to the client
    public: {
      apiPre: process.env.PRE_URL,
      apiBase: process.env.API_URL,
    },
  },
});
