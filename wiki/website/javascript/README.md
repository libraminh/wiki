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

## Wait till everythingLoaded

``` js 
var everythingLoaded = setInterval(function() {
  if (/loaded|complete/.test(document.readyState)) {
    clearInterval(everythingLoaded);
    appendButton(); // this is the function that gets called when everything is loaded
  }
}, 10);
```

## Tab Nav

``` html
<ul class="tab-lists">
  <li class="active" tab-control tab-data="tab1">
    <span>{{ item.tab_item_heading }}</span>
    <span>{{ item.tab_item_content }}</span>
  </li>
  <li tab-control tab-data="tab2">
    <span>{{ item.tab_item_heading }}</span>
    <span>{{ item.tab_item_content }}</span>
  </li>
</ul>

<div class="tab-content-wrapper">
  <div tab-content="tab1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolores!
  </div>
  <div tab-content="tab2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolores!
  </div>
</div>
```

``` js
function tabFeature() {
  var tabControl = $('[tab-control]');
  var tabContent = $('[tab-content]');

  tabControl.on('click', function() {
    var $this = $(this);
    var tabData = $this.attr('tab-data');

    // show tab content based on tab data
    $this.addClass('active')
      .siblings().removeClass('active');

    $("[tab-content=" + tabData + "]")
      .show().addClass('active')
      .siblings().hide().removeClass('active');
  })
}
```

## Set `!important` css by using jquery

Solution 1:

__Use Attr__

``` js
$(document).ready(function(){
    $('#txt').attr('style', 'width: 150px !important');
});
```

Solution 2:

__Use Class__

``` html
<style type='text/css'>
.textbox{
  width: 150px !important;
}
</style>
<script>
$(document).ready(function(){

    // Add .textbox class
    $("#txt").addClass('textbox');
});
</script>
```

## Loadmore feature

``` js
function loadmoreFunction() {
  var categoryBox = $(".latest-listing .item");
  var hiddenCategoryBox = $(".latest-listing .item:hidden");
  var loadMore = $("#loadMore");
  var showItemLength = 3;

  // Slice out 3 items
  categoryBox.slice(0, showItemLength).show();
  if ($(".latest-listing .item:hidden").length != 0) {
    loadMore.show();
    setTimeout(function() {
      loadMore.css({
        display: 'block'
      });
    }, 1000)
  }		

  // Trigger loadmore event
  loadMore.on('click', function (e) {
    e.preventDefault();
    $(".latest-listing .item:hidden").slice(0, 3).slideDown();
    if ($(".latest-listing .item:hidden").length == 0) {
      loadMore.fadeOut('slow');
    }
    $('html,body').animate({
      scrollTop: $(this).offset().top
    }, 1500);
  });
}

// Animate Scroll when click loadmore
$('a[href=#top]').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 600);
  return false;
});

$(window).scroll(function () {
  var toTop = $('.totop').find('a');

  if ($(this).scrollTop() > 50) {
    toTop.fadeIn();
  } else {
    toTop.fadeOut();
  }
});
```

## Auto resize height

``` js
function autoResizeHeight(elm, width, height, heightDefault, condition) {
  heightDefault = typeof heightDefault !== 'undefined' ? heightDefault : null;
  condition = typeof condition !== 'undefined' ? condition : null;

  var screenWidth = $(window).width();
  var currentElmWidth = $(elm).width();
  var ratio = height / width;
  var currentElmHeight = currentElmWidth * ratio;

  if (heightDefault !== null && condition !== null) {
    if (condition) {
      $(elm).css({
        height: currentElmHeight
      })
    } else {
      $(elm).css({
        height: heightDefault
      })
    }
  } else {
    $(elm).css({
      height: currentElmHeight
    })
  }
}

// Example
var condition = $(window).width() < 768;

autoResizeHeight('.feature-image', 720, 400, 400, condition);
```

## Set default value for function parameter

__ES5 method__

``` js
function foo(a, b) {
  a = typeof a !== 'undefined' ? a : 42;
  b = typeof b !== 'undefined' ? b : 'default_b';
  ...
}
```

__ES6 Method__

``` js
function foo(a = 42, b = 'default_b') {
  ...
}
```

## debounce & throttle
[Demo](http://demo.nimius.net/debounce_throttle/)

### debounce

Use when apply for `resize window`

``` js
function _debounce (func, wait, immediate) {
  var timeout, args, context, timestamp, result;

  var later = function() {
      var last = new Date().getTime() - timestamp;

      if (last < wait && last >= 0) {
          timeout = setTimeout(later, wait - last);
      } else {
          timeout = null;
          if (!immediate) {
              result = func.apply(context, args);
              if (!timeout) context = args = null;
          }
      }
  };

  return function() {
      context = this;
      args = arguments;
      timestamp = new Date().getTime();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
          result = func.apply(context, args);
          context = args = null;
      }

      return result;
  };
}
```

### throttle

Use when apply for `scroll` or `input typing`

``` js
function _throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function () {
      previous = options.leading === false ? 0 : new Date().getTime();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
  };
  return function() {
      var now = new Date().getTime();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
          if (timeout) {
              clearTimeout(timeout);
              timeout = null;
          }
          previous = now;
          result = func.apply(context, args);
          if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
      }
      return result;
  };
}
```

## Sticky Sidebar

[Sticky Sidebar](https://abouolia.github.io/sticky-sidebar/)

Example:

``` html
<div id="main-content" class="main">
  <div id="sidebar" class="sidebar">
    <div class="sidebar__inner">
      <!-- Content goes here -->
    </div>
  </div>
  <div id="content" class="content">
    <!-- Content goes here -->
  </div>
</div>
```

``` js
var sidebar = new StickySidebar('#sidebar', {
  containerSelector: '#main-content',
  innerWrapperSelector: '.sidebar__inner',
  topSpacing: 20,
  bottomSpacing: 20
});
```