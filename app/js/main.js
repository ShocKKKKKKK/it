$(function () {
  $('.portfolio__slider').slick({
    slidesToShow: 2,
    infinite: false,
    arrows: true,
    variableWidth: true,
    nextArrow: '<div class="slick-arrow slick-next"><img src="img/portfolio/arrow.png"></div>',
    prevArrow: '<div class="slick-arrow slick-prev"><img src="img/portfolio/arrow.png"></div>',
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
      }
    }]
  });
  $('.licenses__box').slick({
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    variableWidth: true,
    nextArrow: '<div class="slick-arrow slick-next"><img src="img/licenses/arrow-sertificate-right.png"></div>',
    prevArrow: '<div class="slick-arrow slick-prev"><img src="img/licenses/arrow-sertificate-left.png"></div>',
    mobileFirst: true,
    responsive: [{
      breakpoint: 769,
      settings: 'unslick'
    }]
  });
  $('.certificate__small').slick({
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    variableWidth: true,
    nextArrow: '<div class="slick-arrow slick-next"><img src="img/licenses/arrow-sertificate-right.png"></div>',
    prevArrow: '<div class="slick-arrow slick-prev"><img src="img/licenses/arrow-sertificate-left.png"></div>',
    mobileFirst: true,
    responsive: [{
      breakpoint: 769,
      settings: 'unslick'
    }]
  });
});