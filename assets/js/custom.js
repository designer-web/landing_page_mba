$(document).ready(function() {
    
    $("#owl-demo").owlCarousel({
        autoPlay : 4000,
        stopOnHover : false,
        navigation:true,
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        pagination:false,
        paginationSpeed : 2000,
        goToFirstSpeed : 2000,
        singleItem : true,
        autoHeight : true,
    });     
  
    $("#owl-portfolio4").owlCarousel({
              
        autoPlay: true, 
        slideSpeed:2000,
        pagination:false,
        navigation:true,
        items : 4,
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsMobile : [479,2]
    });

    $("#owl-portfolio4b").owlCarousel({
              
        autoPlay: true, 
        slideSpeed:2000,
        pagination:false,
        navigation:true,
        items : 4,
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsMobile : [479,2]
    });
  
    $("#owl-portfolio5").owlCarousel({
              
        autoPlay: true, 
        slideSpeed:2000,
        pagination:false,
        navigation:true,	  
        items : 5,
        navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsMobile : [479,2]
    });

});
    
    
  /*============================================== /*
           Portfolio
  /*==============================================*/
  
  var worksgrid = $('#works-grid'),
  filters = $('#filters');
  
  
  $('a', filters).on('click', function() {
  var selector = $(this).attr('data-filter');
  
  $('.current', filters).removeClass('current');
  $(this).addClass('current');
  
  worksgrid.isotope({
      filter: selector
  });
  
  return false;
  });
  
  $(window).on('resize', function() {
  worksgrid.imagesLoaded(function() {
      worksgrid.isotope({
          layoutMode: 'masonry',
          itemSelector: '.work-item',
          transitionDuration: '0.3s',
      });
  });
  }).resize();
  
  $(window).on('load', function() {
  worksgrid.imagesLoaded(function() {
      worksgrid.isotope({
          layoutMode: 'masonry',
          itemSelector: '.work-item',
          transitionDuration: '0.3s',
      });
  });
  }).resize();
  
  
  /*==============================================/*
   Video popup, Gallery
  /*==============================================*/
  
  $('.image-popup').magnificPopup({
  type: 'image'
  });
  
  $('a.project-gallery').magnificPopup({
  type: 'image',
  gallery: {
      enabled: true
  }
  });
  
  $('.video-popup').magnificPopup({
  type: 'iframe',
  });
  
  //For video Section
  $('.video-pop-up').magnificPopup({
  type: 'iframe',
  });
  
  
  /**
   * Smooth scroll to anchor
   */
  
  $(function() {
      $('#menu a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                  $('html,body').animate({
                      scrollTop: (target.offset().top - 20) // 20px offset for navbar menu
                  }, 1000);
                  return false;
              }
          }
      });
  });
