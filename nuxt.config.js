import charkaTheme from './charka.theme'

export default {
  head: {
    title: 'docu-proyect',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~assets/styles/main.scss'],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/style-resources'],

  modules: ['@chakra-ui/nuxt', '@nuxtjs/emotion', '@nuxt/content'],

  build: {},

  chakra: {
    ...charkaTheme,
  },

  styleResources: {
    scss: ['~assets/styles/mixins.scss', '~assets/styles/variables.scss'],
  },
}
