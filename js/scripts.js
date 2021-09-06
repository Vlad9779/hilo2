$(document).ready(function(){

    $('#owl-offers').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],


        responsive:{
            0:{
                items:1.5
            },

            1000:{
                items:1.5
            }
        }
    });

    $("#owl-zone").owlCarousel({
        nav:false,
        navText: [ '', '' ],
        navigation: false,
        pagination: false,
        dots: false,
        responsive:{
            0:{
                items:3.5
            },

            1000:{
                items:3.5
            }
        }
    });
	
	
	$('.slider__photos__apps').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
	
});


