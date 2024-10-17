// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: [
    "vue-clerk/nuxt",
    "@nuxt/ui",
    "vue3-carousel-nuxt",
    "@productdevbook/chatwoot",
  ],

  appConfig: {
    title: "CarTiger",
    description: "Your car. Your way.",
  },

  chatwoot: {
    init: {
      websiteToken: "Nr9hTKzMWEsd2CdBnMEZizxX",
    },
    settings: {
      locale: "en",
      position: "left",
      launcherTitle: "Hello Chat",
      // ... and more settings
    },
    // If this is loaded you can make it true, https://github.com/nuxt-modules/partytown
    partytown: false,
  },
});
