# Webpack

## Resolve

``` js
resolve: {
  extensions: ['*', '.js', '.jsx', '.json'],
  modules: [path.resolve(__dirname, 'src'), 'node_modules']
}
```

## Alias

``` js
alias: {
  '@': path.resolve(__dirname, 'src')
}
```

