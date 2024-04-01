$(".sliderShow-section").slick({
  dots: true,
  infinite: true,
  speed: 100,
  fade: true,
  cssEase: "ease",
  prevArrow: false,
  nextArrow: false,
  autoplay: true,
  draggable: true,
  customPaging: function (slider, i) {
    return '<div class="dot"></div>';
  },
});
