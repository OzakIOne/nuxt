import vsharp from 'vite-plugin-vsharp';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    stripeSecret: '',
    stripeWebhookSecret: '',
    public: {
      stripeKey: '',
    },
  },
  nitro: {
    prerender: {
      routes: ['/landing'],
    },
  },
  vite: {
    plugins: [vsharp()],
  },
  modules: [
    '@vueuse/nuxt',
    // '@invictus.codes/nuxt-vuetify',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    [
      '@storyblok/nuxt',
      {
        accessToken: '<your-access-token>',
      },
    ],
  ],
  // vuetify: {
  //   /* vuetify options */
  //   vuetifyOptions: {
  //     // @TODO: list all vuetify options
  //   },

  //   moduleOptions: {
  //     /* nuxt-vuetify module options */
  //     treeshaking: true,
  //     useIconCDN: false,

  //     /* vite-plugin-vuetify options */
  //     styles: true,
  //     autoImport: true,
  //     importLabComponents: true,
  //   },
  // },
});
