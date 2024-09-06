$(document).ready(function(){

$('.owl-general .owl-carousel').owlCarousel({

    loop: true,
	dots:true,
	autoplay:true,
	center:true,
    margin: 10,
    nav: true,
	autoWidth:false,
	 items: 1,
    navText: [
        '<img src="img/CaretRight.svg">',
        '<img src="img/CaretRight.svg">'
    ],
    navContainer: '.owl-general .custom-nav',
    /*responsive:{
        0:{
            items: 1
        },
        600:{
            items: 1
        },
        1000:{
            items: 1,
			    stagePadding: 200
        }
    }*/
});


	
	

	

});

jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#special_contents').owlCarousel({
        loop: true,
        items: 3,
        margin: 0,
        autoplay: false,
        dots:true,
        nav:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
      navText: ['<i class="fa fa-angle-left fa-5x"></i>','<i class="fa fa-angle-right fa-5x"></i>'],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          1170: {
            items: 1
          }
        }
      });
    });