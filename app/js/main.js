$(function () {
  $('.portfolio__slider').slick({
    slidesToShow: 2,
    infinite: false,
    arrows: true,
    variableWidth: true,
    nextArrow: '<div class="slick-arrow slick-next"><img src="img/portfolio/arrow.png"></div>',
    prevArrow: '<div class="slick-arrow slick-prev"><img src="img/portfolio/arrow.png"></div>',
  });
});