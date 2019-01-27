$(document).ready(function() {
  "use strict"

  
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 80) {
      $(".navbar").attr('style', 'background-color: rgba(80,50,120,0.9) !important');
      $('.back-to-top').attr('style', 'background-color: rgba(0,0,0,0.7) !important');
      $(".back-to-top").css("color", "#fff");
    } else {
      $(".navbar").attr('style', 'background-color: transparent');
      $('.back-to-top').attr('style', 'display: none');
    }
  });

  $(function() {
    $('.work-img').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  })


  $(function() {
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      smartSpeed: 700,
      autoplayHoverPause: true,
    });
  });


  $(function() {
    $('.nav-link').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000, 'easeInOutExpo');
          return false;
        }
      }
    });
  });



  // Closes responsive menu when a scroll trigger link is clicked
  $('.nav-link').click(function() {
    $('.navbar-collapse').collapse('hide');
  });



  //Activate scrollspy to add active class to navbar items on scroll

  // $('body').scrollspy({
  //   target: '#mainNav',
  //   offset: 57
  // });



  //Collapse Navbar
  // var navbarCollapse = function() {
  //   if ($("#mainNav").offset().top > 100) {
  //     $("#mainNav").addClass("navbar-shrink");
  //   } else {
  //     $("#mainNav").removeClass("navbar-shrink");
  //   }
  // };


  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
});