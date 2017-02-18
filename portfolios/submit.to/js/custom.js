(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	// fixlayout scrooling
		var cbpFixedScrollLayout = (function() {

			// cache and initialize some values
			var config = {
				// the cbp-fbscroller´s sections
				$sections : $( '#cbp-fbscroller > section' ),
				// the navigation links
				$navlinks : $( '#cbp-fbscroller > nav:first > a' ),
				// index of current link / section
				currentLink : 0,
				// the body element
				$body : $( 'html, body' ),
				// the body animation speed
				animspeed : 650,
				// the body animation easing (jquery easing)
				animeasing : 'easeInOutExpo'
			};

			function init() {

				// click on a navigation link: the body is scrolled to the position of the respective section
				config.$navlinks.on( 'click', function() {
					scrollAnim( config.$sections.eq( $( this ).index() ).offset().top );
					return false;
				} );

				// 2 waypoints defined:
				// First one when we scroll down: the current navigation link gets updated. 
				// A `new section´ is reached when it occupies more than 70% of the viewport
				// Second one when we scroll up: the current navigation link gets updated. 
				// A `new section´ is reached when it occupies more than 70% of the viewport
				config.$sections.waypoint( function( direction ) {
					if( direction === 'down' ) { changeNav( $( this ) ); }
				}, { offset: '30%' } ).waypoint( function( direction ) {
					if( direction === 'up' ) { changeNav( $( this ) ); }
				}, { offset: '-30%' } );

				// on window resize: the body is scrolled to the position of the current section
				$( window ).on( 'debouncedresize', function() {
					scrollAnim( config.$sections.eq( config.currentLink ).offset().top );
				} );
				
			}

			// update the current navigation link
			function changeNav( $section ) {
				config.$navlinks.eq( config.currentLink ).removeClass( 'cbp-fbcurrent' );
				config.currentLink = $section.index( 'section' );
				config.$navlinks.eq( config.currentLink ).addClass( 'cbp-fbcurrent' );
			}

			// function to scroll / animate the body
			function scrollAnim( top ) {
				config.$body.stop().animate( { scrollTop : top }, config.animspeed, config.animeasing );
			}

			return { init : init };

		})();

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

})(jQuery);
