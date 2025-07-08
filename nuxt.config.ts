// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography';


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
      plugins: [tailwindTypography],
    }
  },
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
        remarkPlugins: {
          'remark-breaks': { }
        },
        toc: {
          depth: 5,
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