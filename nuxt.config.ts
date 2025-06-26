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
  css: ['~/assets/css/main.css'],
  ui: {
    theme: {
      colors: [
        'primary',
        'neutral',
        'background',
        'secondary',
        'accent',
        'border',
        'tertiary',
        'info',
        'success',
        'warning',
        'error'
      ]
    }
  },
  content: {
    build: {
      markdown: {
        toc: {
          depth: 6,
        },
        highlight: {
          theme: 'github-dark',
          langs: [
              'c',
              'cpp',
              'java',
              'javascript',
              'cs',
              'css',
              'typescript',
              'html',
              'asm',
              'bash'
          ]
      }
    }
  }
}})