const path = require('path')

module.exports = {
  title: 'minhle',
  description: 'Wikipedia',
  base: '/',
  dest: 'docs',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/wiki/' },
      { text: 'EDMs', link: '/edms/' },
      { text: 'Documentation', link: '/documentation/javascript/' }
    ],
    sidebar: [
      {
        title: "Website",
        children: [
          '/wiki/website/git/',
          '/wiki/website/css/',
          '/wiki/website/javascript/',
          '/wiki/website/ie11/',
          '/wiki/website/indexedDB/',
          '/wiki/website/vue/',
          '/wiki/website/vuepress/',
          '/wiki/website/webpack/',
          '/wiki/website/eslint/',
          '/wiki/website/github/',
          '/wiki/website/yeoman/',
          '/wiki/website/regex/',
          '/wiki/website/node-js-generator/',
          '/wiki/website/slick-slider/'
        ]
      },
      {
        title: "Mac",
        children: [
          '/wiki/mac/valet-laravel/',
          '/wiki/mac/custom-keyboard/'
        ]
      },
      {
        title: "Documentation",
        children: [
          '/documentation/javascript/'
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
