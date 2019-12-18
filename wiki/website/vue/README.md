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

## Use svg file

``` html
<svg id="BE_OPEN" data-name="BE OPEN" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1019 685">
  <defs>
    <svg:style type="text/css">
      @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800');
    </svg:style>
  </defs>
  <defs>
    <svg:style type="text/css">
      .cls-1 {
        font-size: 380.661px;
      }

      .cls-1, .cls-2, .cls-3 {
        fill: #bdd340;
        text-anchor: middle;
        font-family: 'Open Sans', sans-serif;
      }

      .cls-1, .cls-2 {
        font-weight: 800;
      }

      .cls-2 {
        font-size: 326.281px;
      }

      .cls-3 {
        font-size: 188px;
        font-weight: 700;
      }
    </svg:style>
  </defs>
  <text id="O" class="cls-1" transform="translate(145.936 510.424) scale(1.103)">O</text>
  <text id="P" class="cls-2" transform="translate(422.935 622.424) scale(1.103)">P</text>
  <text id="E" class="cls-2" transform="translate(642.936 485.424) scale(1.103)">E</text>
  <text id="N" class="cls-2" transform="translate(895.936 685.425) scale(1.103)">N</text>
  <text id="BE" class="cls-3" x="159.986" y="134.015">BE</text>
</svg>
```

## Check is has slot

``` js
export default {
  computed: {
    hasDefaultSlot () {
      return !!this.$slots.default
    },
    hasFooterSlot () {
      return !!this.$slots['footer']
    }
  }
}
```