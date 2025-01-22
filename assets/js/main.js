(function($) {
  "use strict";
  
 
  document.addEventListener('DOMContentLoaded', function() {
    function MenuFuncs() { 
        var sidebarMenu = document.querySelector('.sidebar-menu');
        var siteBarBtn = document.querySelector('.siteBar-btn');
        var closeBtn = document.querySelector('.sidebar-menu .close-btn');
        var menuOverlay = document.querySelector('.menu-overlay');

        siteBarBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sidebarMenu.classList.toggle('active');
            menuOverlay.style.display = sidebarMenu.classList.contains('active') ? 'block' : 'none';
        });

        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sidebarMenu.classList.remove('active');
            menuOverlay.style.display = 'none';
        });

        menuOverlay.addEventListener('click', function() {
            sidebarMenu.classList.remove('active');
            menuOverlay.style.display = 'none';
        });
    }
    MenuFuncs() 
    
    function AlignMents() {
        
        const container = document.querySelector('.container')
        const dots = document.querySelector('.owl-dots')
        const essentialOverlay = document.querySelector('.overlay')
        // const allItems = document.querySelector('.all_essentials')
        const shouldMargin = container.offsetLeft + 15

        // margin left for owl dots
        dots.style.left = shouldMargin + "px"
        essentialOverlay.style.width = "calc(100% - "+(shouldMargin + shouldMargin - 100)+"px)"
        // allItems.style.maxWidth = "calc(100% - "+shouldMargin+"px)"



     
    }
    AlignMents()
    window.addEventListener('resize', () => {
        AlignMents() 
    })
})
    
  // Hero slider
  $(".hero-area").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    autoplay: true,
    smartSpeed: 500,
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
    autoplay: true,
    smartSpeed: 500,
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
    autoplay: true,
    smartSpeed: 500,
    items: 4,
    navText: [
      '<img src="assets/img/arrow-right.png" alt="">',
      '<img src="assets/img/arrow-right.png" alt="">'
    ],
    
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });

  
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function  
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down 
  
  });







 
})(jQuery);
