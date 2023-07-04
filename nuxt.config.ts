// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@invictus.codes/nuxt-vuetify',
    // '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    [
      '@storyblok/nuxt',
      {
        accessToken: '<your-access-token>',
      },
    ],
  ],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: false,

      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true,
      importLabComponents: true,
    },
  },
});
