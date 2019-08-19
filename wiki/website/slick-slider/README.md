# Slick Slider

## Only use slider on mobile

``` js
function initSlider() {
  // function and variables, 'unslick' while window size reach maximum width
  var maxWidth = 768,
      slickVar = {
        dots: true,
        infinite: false,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: maxWidth,
            settings: 'unslick'
          },
          {
            breakpoint: 325,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
      runSlick = function() {
        $('.category-posts-slider').slick(slickVar);
      };

  // slick initialization while document ready
  runSlick();

  // listen to jQuery's window resize
  $(window).on('resize', function(){
    var width = $(window).width();
    if(width < maxWidth) {
      // reinit slick while window's width is less than maximum width 
      runSlick();
    }
  });
}
```