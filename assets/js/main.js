(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');
    $('.menu_overlay').toggleClass('show');
  }); 

    
  // Hero slider
  $(".hero-area").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      992: {
        items: 1
      }
    }
  });
  // testimonial slider
  $(".all-testimonials").owlCarousel({
    loop: true,
    margin: 0,
    autoplay:true,
    items: 1,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false, 
  });
    
  // essential product slider
  $(".all_essentials").owlCarousel({
    loop: true,
    margin: 25,
    items: 6,
    navText: [
      '<img src="assets/img/arrow-right.png" alt="">',
      '<img src="assets/img/arrow-right.png" alt="">'
    ],
    
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 4
      },
      992: {
        items: 6
      }
    }
  });

 
  
 
})(jQuery);
