export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Laramab',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'apple-touch-icon', sizes: '180x180', href: '/img/favicon_io/apple-touch-icon.png'},
      {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon_io/favicon-32x32.png'},
      {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon_io/favicon-16x16.png'},
      {rel: 'manifest', href: '/img/favicon_io/site.webmanifest'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Assistant|Lobster&display=swap'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#899cfc'},
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/app.css',
    '~/assets/css/pagination.css',
    {src: '~/node_modules/highlight.js/styles/hopscotch.css', lang: 'css'}
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-highlight',
    {src: '~/plugins/vuejs-paginate', ssr: false},
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/font-awesome',
    '@nuxtjs/markdownit'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

  transition: {
    name: 'page',
    mode: 'out-in'
  },

  markdownit: {
    injected: true,
    use: [
      'markdown-it-highlightjs'
    ]
  }
}
