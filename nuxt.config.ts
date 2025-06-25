// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            background: '#1a1b26',
            surface: '#24283b',
            primary: '#c0caf5',
            secondary: '#a9b1d6',
            success: '#9ece6a',
            warning: '#ff9e64',
            error: '#f7768e',
            accent: '#7dcfff',
            border: '#414868'
          }
        }
      }
    }
  }
})