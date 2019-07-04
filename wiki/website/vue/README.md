# Vue

## Deploy Vue app on Heroku

Install:

`yarn add serve-static express path`

Create a `server.js` at root project

Copy text below and paste into `server.js`

``` js
const express = require('express')
const serveStatic = require("serve-static")
const path = require('path')
const app = express()
app.use(serveStatic(path.join(__dirname, '/.vuepress/dist')))
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running at ${port}`)
})
```

