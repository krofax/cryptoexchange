(function($){
	"use strict";
	jQuery(document).on('ready', function () {
		
		// Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.navbar-area').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
            }
        });

		// Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "991"
		});
		
		// Nice Select JS
		$('select').niceSelect();
		
		// Odometer JS
		$('.odometer').appear(function(e) {
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
		});

		// Video Popup JS
		$('.popup-youtube').magnificPopup({
            disableOn: 320,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

		// Feedback Carousel
		var $imagesSlider = $(".feedback-slides .client-feedback>div"),
		$thumbnailsSlider = $(".client-thumbnails>div");
		// images options
		$imagesSlider.slick({
			speed:300,
			slidesToShow:1,
			slidesToScroll:1,
			cssEase:'linear',
			fade:true,
			autoplay: true,
			draggable:true,
			asNavFor:".client-thumbnails>div",
			prevArrow:'.client-feedback .prev-arrow',
			nextArrow:'.client-feedback .next-arrow'
		});
		// Thumbnails options
		$thumbnailsSlider.slick({
			speed:300,
			slidesToShow:5,
			slidesToScroll:1,
			cssEase:'linear',
			autoplay: true,
			centerMode:true,
			draggable:false,
			focusOnSelect:true,
			asNavFor:".feedback-slides .client-feedback>div",
			prevArrow:'.client-thumbnails .prev-arrow',
			nextArrow:'.client-thumbnails .next-arrow',
		});
		var $caption = $('.feedback-slides .caption');
		var captionText = $('.client-feedback .slick-current img').attr('alt');
		updateCaption(captionText);
		$imagesSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$caption.addClass('hide');
		});
		$imagesSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
			captionText = $('.client-feedback .slick-current img').attr('alt');
			updateCaption(captionText);
		});
		function updateCaption(text) {
			// if empty, add a no breaking space
			if (text === '') {
				text = '&nbsp;';
			}
			$caption.html(text);
			$caption.removeClass('hide');
		}

		// FAQ Accordion
        $(function() {
            $('.accordion').find('.accordion-title').on('click', function(){
                // Adds Active Class
                $(this).toggleClass('active');
                // Expand or Collapse This Panel
                $(this).next().slideToggle('fast');
                // Hide The Other Panels
                $('.accordion-content').not($(this).next()).slideUp('fast');
                // Removes Active Class From Other Titles
                $('.accordion-title').not($(this)).removeClass('active');		
            });
        });

		// Go to Top
        $(function(){
            // Scroll Event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 600) $('.go-top').addClass('active');
                if (scrolled < 600) $('.go-top').removeClass('active');
            });  
            // Click Event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
        });
		
	});
	
	// WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW({
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       20,          // distance to the element when triggering the animation (default is 0)
            mobile:       true, // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
          });
          wow.init();
        }
	});
	
	// Preloader
	jQuery(window).on('load', function() {
		$('.preloader').fadeOut();
	});


}(jQuery));