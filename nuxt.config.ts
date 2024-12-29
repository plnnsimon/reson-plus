import path from 'path'
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  runtimeConfig: {
    mongoUri: process.env.NUXT_MONGO_URI,
    public: {
      emailJsInitKey: process.env.EMAIL_JS_INIT_KEY,
      serviceId: process.env.SERVICE_ID,
      templateId: process.env.TEMPLATE_ID,
      emailjsPublicKey: process.env.EMAILJS_PUBLIC_KEY,
      tgBotToken: process.env.TG_BOT_TOKEN,
      tgChatId: process.env.TG_CHAT_ID,
    },
  },

  css: ['~/assets/scss/main.scss'],

  devServer: {
    host: '0.0.0.0',
    port: 3025,
  },

  app: {
    baseURL: '/',
    head: {
      title: 'Резон плюс',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicons/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicons/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicons/favicon-16x16.png',
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        // {
        //   href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Slab:wght@100..900&display=swap',
        //   rel: 'stylesheet',
        // },
        {
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Slab:wght@100..900&display=swap',
          rel: 'stylesheet',
        },
        // { rel: 'manifest', href: '/favicons/site.webmanifest' },
      ],
      meta: [
        { name: 'theme-color', content: '#ffffff' }, // Android Chrome
      ],
    },
  },

  modules: ['@pinia/nuxt', 'nuxt-swiper', '@vee-validate/nuxt'],

  veeValidate: {
    autoImports: true,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "sass:color";',
          sassOptions: {
            silenceDeprecations: ['color-functions', 'import', 'legacy-js-api'],
          },
        },
      },
    },
  },

  build: {
    transpile: ['vue-toastification'],
  },

  routeRules: {
    '/': { redirect: '/landing' },
  },
})
