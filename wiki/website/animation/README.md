# Animation

## Reverse the animation when scrolling back up the page (WOW js)

__Using `scrollspy.js` to trigger animation when inside viewport__

``` html
<!-- scrollSpy plugin see https://github.com/thesmart/jquery-scrollspy -->
<script src="https://gitcdn.xyz/repo/thesmart/jquery-scrollspy/0.1.3/scrollspy.js"></script>
```

``` js
// Helper function for add element box list in WOW
WOW.prototype.addBox = function(element) {
  this.boxes.push(element);
};

// Init WOW.js and get instance
var wow = new WOW();
wow.init();

// Attach scrollSpy to .wow elements for detect view exit events,
// then reset elements and add again for animation
$('.wow').on('scrollSpy:exit', function() {
  $(this).css({
    'visibility': 'hidden',
    'animation-name': 'none'
  }).removeClass('animated');
  wow.addBox(this);
}).scrollSpy();
```

[__Demo__](https://jsfiddle.net/ugurerkan/53641ovn/)

## Animate elements when scrolling

### Simple Animation

__Using `jquery.parallax-scroll`__

[Reference](https://github.com/alumbo/jquery.parallax-scroll)

<a href="/demo/animation/index.html" target="_blank">Demo</a>

