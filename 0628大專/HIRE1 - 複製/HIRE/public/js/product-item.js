$(document).ready(function () {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="bi bi-arrow-right"></i></button>',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });
});

