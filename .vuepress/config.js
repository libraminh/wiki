const path = require('path')

module.exports = {
  title: 'minhle',
  description: 'Wikipedia',
  base: '/',
  dest: 'docs',
  themeConfig: {
    smoothScroll: true,
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
          '/wiki/website/animation/',
          '/wiki/website/algorithm/',
          '/wiki/website/git/',
          '/wiki/website/css/',
          '/wiki/website/hubspot/',
          '/wiki/website/javascript/',
          '/wiki/website/ie11/',
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
        title: "Documentation",
        children: [
          '/documentation/javascript/',
          '/documentation/mac/',
          '/documentation/windows/',
          '/documentation/plugins/',
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
