const express = require('express')
const serveStatic = require("serve-static")
const path = require('path')
const app = express()
app.use(serveStatic(path.join(__dirname, '/.vuepress/dist')))
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running at ${port}`)
})