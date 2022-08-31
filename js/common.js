// Модальное окно

jQuery(document).ready(function($) {
  $('.popup-content').magnificPopup({
      type: 'inline',
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
  });
});

// Плавная прокрутка к якорю

$(document).ready(function(){
  $('a[href^="#form"]').bind('click.smoothscroll',function (e) {
  e.preventDefault();
  
  var target = this.hash,
  $target = $(target);
  
  $('html, body').stop().animate({
  'scrollTop': $target.offset().top
  }, 600, 'swing', function () {
  window.location.hash = target;
  });
  });
  
  });

  // Слайдер Reason Mob

  $('.responsive').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.single-item').slick({
    
  });