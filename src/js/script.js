$(document).ready(function(){
    $('.carousel__inner').slick({
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: true,
                arrows: false,
              }
            },
          ]
    });
});