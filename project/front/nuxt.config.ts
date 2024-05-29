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
    css: [
        '@/assets/bootstrap/main.scss',
    ],
    runtimeConfig: {
        apiSecret: '123',
        public: {
            apiPre: process.env.PRE_URL,
            apiBase: process.env.API_URL,
        },
    },
    modules: ['@pinia/nuxt', 'nuxt-primevue', "nuxt-tiptap-editor"],
});