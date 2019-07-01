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
