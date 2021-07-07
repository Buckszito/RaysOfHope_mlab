"use strict";

$(document).ready(function(){
    //Various Sliders options and configurations
    //More Options -> https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
    // Slider Section BX Slider Settings
    $("ul.owl-carousel.top_slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        autoplay:true,
        autoplayTimeout:9000,
        smartSpeed:1000,
        onChange: function(){
            beforeslide();
        },
        onChanged: function(){
            setTimeout(function(){
                afterslide();
            }, 500);
        }
    });

   

    // Causes Section BX Slider Settings
    $("ul.owl-carousel.causes_slider").owlCarousel({
        margin: 70,
        nav: true,
        dots: false,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
    });

    // Projects Section BX Slider Settings
    $("ul.owl-carousel.projects_slider").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay:true,
        autoplayTimeout: 9000
    });
    
    // Sponsors Section BX Slider Settings
    $('ul.sponsor_slider').bxSlider({
        minSlides: 2,
        maxSlides: 5,
        slideWidth: 170,
        slideMargin: 40,
        ticker: true,
        speed: 30000
    });

    //Hide mobile menu when you click link 
    $("ul.mobile-nav li a").on('click', function() {
        $('#mobilemenu').collapse('hide');
    });

  

 



    //Top header with menu changes on scroll
    $(document).on('scroll', function() {
        var x = $(document).scrollTop();
        if(x > 200){
            $('section#header').css({"padding-bottom":"8px","padding-top":"8px","border-top":"4px solid #000000"});
            $('.scrollToTop').fadeIn();
        };
        if(x < 200){
            $('section#header').css({"padding-bottom":"20px","padding-top":"20px","border-top":"15px solid #000000"});
            $('section#header img').css({"height":"","width":""});
            $('.scrollToTop').fadeOut();
        };
    });

  

    jQuery.fn.visible = function() {
        return this.css('visibility', 'visible');
    };

    jQuery.fn.invisible = function() {
        return this.css('visibility', 'hidden');
    };

    //Function immediately before the slider slides - for top_slider
    function beforeslide(){
        $('.slider-tag').css('visibility', 'hidden').toggleClass('fadeIn');
        $('ul.top_slider .btn1').css('visibility', 'hidden').toggleClass('fadeInLeft');
        $('ul.top_slider .btn2').css('visibility', 'hidden').toggleClass('fadeInRight');
    }

    //Function immediately after the slider slides - for top_slider
    function afterslide(){
        $('.slider-tag').css('visibility', 'visible').addClass('animated fadeIn');
        $('ul.top_slider .btn1').css('visibility', 'visible').addClass('animated fadeInLeft');
        $('ul.top_slider .btn2').css('visibility', 'visible').addClass('animated fadeInRight');
    }

})
// Scroll to section
$(function() {
    $('a[href*="#"]:not([href="#"])').on('click', function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	        if (target.length) {
		        $('html,body').animate({
		            scrollTop: target.offset().top
		        }, 1000);
		        return false;
	        }
	    }
    });
});



//Google Map
function initMap() {
    var uluru = {lat: -28.715806, lng: 24.7346489}; 
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru,
        scrollwheel: false
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}





