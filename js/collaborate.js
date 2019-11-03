$( document ).ready(function() {
  $("div.slick-2").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    speed: 300,
    responsive: [
      {
        breakpoint: 891,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  });
});

