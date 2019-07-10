# Eslint

## Vue

Reference: [Vue Eslint](https://eslint.vuejs.org/rules/)

`
yarn add -D eslint eslint-loader eslint-plugin-vue babel-eslint
`

**eslintrc.js**

``` js
module.exports = {
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  extends: [
      // These four options are more or less levels of strictness, give the above URL a read through and decide how strict you want your linting to be
      // Also note we're not setting this up with general JS linting here, just .vue linting
      
      // 'plugin:vue/base',
      'plugin:vue/essential',
      'plugin:vue/strongly-recommended'
      // 'plugin:vue/recommended',
  ]
}
```

**webpack.config.js**
``` js
{
  enforce: 'pre',
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  exclude: /node_modules/
}
```

## Disable

```
/* eslint-disable */
```