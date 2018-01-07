(function ($) {
 "use strict";

  
/*- Stick header
------------------------------ */  

$(window).on('scroll',function() {    
   var scroll = $(window).scrollTop();
   if (scroll < 50) {
    $(".stick-header").removeClass("stick");
   }else{
    $(".stick-header").addClass("stick");
   }
});

/*- smoth-scroll js
-------------------------*/ 
    $('.smooth-scroll a').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 59
        }, 1000);
        e.preventDefault();
    });  
/*- Extra js 
---------------------*/	    
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });  
    
      
    
   
/*- Isotope active JS
-----------------------------*/
$('.grid').imagesLoaded( function() {
	
    // filter items on button click
    $('.portfolio-menu').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });	

    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-item',
      }
    });

});
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});
   
// Portfolio hover effect init
    $(' #portfolio_grid figure ').each( function() { $(this).hoverdir(); } );  
     
    
    

      
    
  
/*----------------------------
 owl active
------------------------------ */    
$('.slider-active').owlCarousel({
    loop:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    dots:true,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    }
});
        
/*- owl active
------------------------------ */    
$('.testimonel-carousel').owlCarousel({
    loop:true,
    items:1,
    dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    nav:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    }
})   
    
/*- Magnific Popup
------------------------*/
$('.img-poppu').magnificPopup({
    type: 'image',
    gallery:{
        enabled:true
    }
}); 
$('.video-play').magnificPopup({
    disableOn: 0,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: true,
    fixedContentPos: false
});    

    
    
    

    
    
    
    
 
})(jQuery); 