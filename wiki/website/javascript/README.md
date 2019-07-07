# JS

## Set active page dựa theo url

``` js
var loc = window.location.pathname;
$('.dlc-lists').find('a').each(function() {
  var _this = $(this)
  var linkHref = _this.attr('href')
  
  if(linkHref.includes(loc)) {
  _this.toggleClass('dlc-link-active')
  }
});
```

## Same height

``` js
$(function(){
  var wrap = $('[same-height-wrap]')
  if (wrap.length <= 0) {
    return
  }
  $('[same-height-wrap]').each(function () {
    // Get height of all of name
    var headerHeights = $(this).find('[same-height-header]').map(function () {
      return $(this).height()
    }).get()
    var headerHeight = Math.max.apply(null, headerHeights)
    if (parseInt(headerHeight, 10)) {
      $(this).find('[same-height-header]').height(headerHeight)
    }

    var bodyHeights = $(this).find('[same-height-body]').map(function () {
      return $(this).height()
    }).get()
    var bodyHeight = Math.max.apply(null, bodyHeights)
    if (parseInt(bodyHeight, 10)) {
      $(this).find('[same-height-body]').height(bodyHeight)
    }

    var footerHeights = $(this).find('[same-height-footer]').map(function () {
      return $(this).height()
    }).get()
    var footerHeight = Math.max.apply(null, footerHeights)
    if (parseInt(footerHeight, 10)) {
      $(this).find('[same-height-footer]').height(footerHeight)
    }
  })
})
```