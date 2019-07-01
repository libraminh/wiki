const path = require('path')

module.exports = {
  title: 'Minh Le',
  description: 'Wikipedia',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/alerts/' }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve()
      }
    }
  }
}
