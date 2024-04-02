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
$(".thinkAbout__category").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 1,
  prevArrow: false,
  nextArrow: false,
  zIndex: 1,
  // adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});
// $(".thinkAbout__category").on("swipe", function (event, slick, direction) {
//   console.log(slick);
// });
