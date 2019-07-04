const path = require('path')

module.exports = {
  title: 'Minh Le',
  description: 'Wikipedia',
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/wiki/' }
    ],
    sidebar: [
      {
        title: "Website",
        children: [
          '/wiki/website/git/',
          '/wiki/website/css/',
          '/wiki/website/javascript/',
          '/wiki/website/ie11/',
          '/wiki/website/vue/',
          '/wiki/website/vuepress/',
          '/wiki/website/webpack/',
          '/wiki/website/eslint/',
          '/wiki/website/yeoman/',
          '/wiki/website/node-js-generator/',
        ]
      },
      {
        title: "Mac",
        children: [
          '/wiki/mac/valet-laravel/',
        ]
      }
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
