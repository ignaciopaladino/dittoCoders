﻿jQuery(document).ready(function(){
	// RADIANTTHEMES ACCORDION.
	jQuery(".radiantthemes-accordion-item").each(function(){
		jQuery(this).find(".radiantthemes-accordion-item-body").hide();
		jQuery(this).find(".radiantthemes-accordion-item-title").click(function(){
			jQuery(this).parent().children(".radiantthemes-accordion-item-body").slideToggle("500");
			jQuery(this).parent().toggleClass("radiantthemes-active");
		});
	});
	// RADIANTTHEMES BEFOREAFTER.
	jQuery(".rt-beforeafter").each(function(){
		jQuery(this).beforeAfter();
	});
	// RADIANTTHEMES COUNTDOWN.
	jQuery(".rt-countdown").each(function(){
		jQuery(this).countdown( jQuery(this).data("countdown") , function(event){
			jQuery(this).html(
			  event.strftime("<div class='time'><strong>%D</strong> Days</div> <div class='time'><strong>%H</strong> Hours</div> <div class='time'><strong>%M</strong> Min</div> <div class='time'><strong>%S</strong> Sec</div>")
			);
		});
	});
	// RADIANTTHEMES COUNTERUP.
	jQuery(".rt-counterup").each(function(){
		jQuery(this).counterUp({
			delay: jQuery(this).data("counterup-delay"),
			time: jQuery(this).data("counterup-time"),
		});
	});
	// RADIANTTHEMES POPUP VIDEO.
	jQuery(".rt-popup-video").each(function(){
        jQuery(this).find(".video-link").fancybox({
            defaults:{
                speed: 1000,
            },
        });
    });
	// RADIANTTHEMES PROGRESS BAR.
	jQuery(".rt-progress-bar").each(function(){
		jQuery(this).find(".progress-width").text( jQuery(this).data("progress-bar-width") );
		jQuery(this).find(".progress").css({
			"height": jQuery(this).data("progress-bar-height")
		});
		jQuery(this).find(".progress-bar").css({
			"width": jQuery(this).data("progress-bar-width")
		});
	});
	// RADIANTTHEMES TAB ELEMENT.
	jQuery(".rt-tab").each(function(){
		jQuery(this).find("ul.nav-tabs a:first").tab("show");
	});
	// RADIANTTHEMES TYPEWRITER.
	jQuery(".radiantthemes-typewriter-text").each(function(){
        jQuery(this).children(".typed-writer").typed({
            stringsElement: jQuery(this).children(".typed-strings") ,
            typeSpeed: jQuery(this).data("typewriter-typespeed") ,
            startDelay: jQuery(this).data("typewriter-startdelay") ,
            backSpeed: jQuery(this).data("typewriter-backspeed") ,
            backDelay: jQuery(this).data("typewriter-backdelay") ,
            shuffle: jQuery(this).data("typewriter-shuffle") ,
            loop: jQuery(this).data("typewriter-loop") ,
            loopCount: false, // false = infinite
            showCursor: false,
            cursorChar: "|",
        });
    });
    // RADIANTTHEMES CIRCULAR PROGRESS BAR.
    jQuery(".radiantthemes-circular-progress-bar-main").circlos();
    // RADIANTTHEMES TWITTER WIDGET.
    jQuery(".radiantthemes-twitter-widget-holder").each(function(){
		twitterFetcher.fetch({
			"profile": {
				"screenName": jQuery(this).data("twitter-box-username")
			},
			"domId": jQuery(this).attr("id"),
			"maxTweets": jQuery(this).data("twitter-box-maxtweets"),
			"enableLinks": jQuery(this).data("twitter-box-enablelinks"),
			"showUser": jQuery(this).data("twitter-box-showuser"),
			"showTime": jQuery(this).data("twitter-box-showtime"),
			"showImages": jQuery(this).data("twitter-box-showimages"),
			"lang": 'en',
		});
	});
});
jQuery(window).load(function(){
	setTimeout(function(){
		// MATCHHEIGHT
		jQuery(".matchHeight").matchHeight();
	}, 500);
	// RADIANTTHEMES BLOG ELEMENT.
	jQuery(".blog.owl-carousel").each(function(){
		jQuery(this).owlCarousel({
			nav: jQuery(this).data("owl-nav") ,
			dots: jQuery(this).data("owl-dots") ,
			loop: jQuery(this).data("owl-loop") ,
			autoplay: jQuery(this).data("owl-autoplay") ,
			autoplayTimeout: jQuery(this).data("owl-autoplay-timeout") ,
			responsive:{
		        0:{ items: jQuery(this).data("owl-mobile-items") },
		        321:{ items: jQuery(this).data("owl-mobile-items") },
		        480:{ items: jQuery(this).data("owl-tab-items") },
		        768:{ items: jQuery(this).data("owl-tab-items") },
		        992:{ items: jQuery(this).data("owl-desktop-items") },
		        1200:{ items: jQuery(this).data("owl-desktop-items") }
		    }
		});
	});
	jQuery(".blog:not(.owl-carousel)").each(function(){
		jQuery(this).children().css({
			"width" : "calc(100% / " + jQuery(this).data("row-items") + ")",
		});
	});
	// RADIANTTHEMES TEAM ELEMENT.
	jQuery(".team.owl-carousel").each(function(){
		jQuery(this).owlCarousel({
			nav: jQuery(this).data("owl-nav") ,
			dots: jQuery(this).data("owl-dots") ,
			loop: jQuery(this).data("owl-loop") ,
			autoplay: jQuery(this).data("owl-autoplay") ,
			autoplayTimeout: jQuery(this).data("owl-autoplay-timeout") ,
			responsive:{
		        0:{ items: jQuery(this).data("owl-mobile-items") },
		        321:{ items: jQuery(this).data("owl-mobile-items") },
		        480:{ items: jQuery(this).data("owl-tab-items") },
		        768:{ items: jQuery(this).data("owl-tab-items") },
		        992:{ items: jQuery(this).data("owl-desktop-items") },
		        1200:{ items: jQuery(this).data("owl-desktop-items") }
		    }
		});
	});
	jQuery(".team:not(.owl-carousel)").each(function(){
		jQuery(this).children().css({
			"width" : "calc(100% / " + jQuery(this).data("row-items") + ")",
		});
	});
	// RADIANTTHEMES TESTIMONIAL ELEMENT.
	jQuery(".testimonial.owl-carousel").each(function(){
		jQuery(this).owlCarousel({
			thumbs: true,
			thumbImage: false,
			nav: jQuery(this).data("owl-nav") ,
			dots: jQuery(this).data("owl-dots") ,
			loop: jQuery(this).data("owl-loop") ,
			center: true,
			autoplay: jQuery(this).data("owl-autoplay") ,
			autoplayTimeout: jQuery(this).data("owl-autoplay-timeout") ,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			responsive:{
		        0:{ items: jQuery(this).data("owl-mobile-items") },
		        321:{ items: jQuery(this).data("owl-mobile-items") },
		        480:{ items: jQuery(this).data("owl-tab-items") },
		        768:{ items: jQuery(this).data("owl-tab-items") },
		        992:{ items: jQuery(this).data("owl-desktop-items") },
		        1200:{ items: jQuery(this).data("owl-desktop-items") }
		    }
		});
	});
	jQuery(".testimonial:not(.owl-carousel)").each(function(){
		jQuery(this).children().css({
			"width" : "calc(100% / " + jQuery(this).data("row-items") + ")",
		});
	});
	// RADIANTTHEMES CLIENTS ELEMENT.
	jQuery(".clients.owl-carousel").each(function(){
		jQuery(this).owlCarousel({
			nav: jQuery(this).data("owl-nav") ,
			dots: jQuery(this).data("owl-dots") ,
			loop: jQuery(this).data("owl-loop") ,
			autoplay: jQuery(this).data("owl-autoplay") ,
			autoplayTimeout: jQuery(this).data("owl-autoplay-timeout") ,
			responsive:{
		        0:{ items: jQuery(this).data("owl-mobile-items") },
		        321:{ items: jQuery(this).data("owl-mobile-items") },
		        480:{ items: jQuery(this).data("owl-tab-items") },
		        768:{ items: jQuery(this).data("owl-tab-items") },
		        992:{ items: jQuery(this).data("owl-desktop-items") },
		        1200:{ items: jQuery(this).data("owl-desktop-items") }
		    }
		});
	});
	jQuery(".clients:not(.owl-carousel)").each(function(){
		jQuery(this).children().css({
			"width" : "calc(100% / " + jQuery(this).data("row-items") + ")",
		});
	});
	// RADIANTTHEMES IMAGE GALLERY.
    jQuery(".rt-image-gallery").each(function(){
        jQuery(this).find(".owl-carousel").owlCarousel({
            nav: false,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 6000,
            items: 1,
            thumbs: true,
            thumbImage: true,
        });
        jQuery(this).find(".owl-thumb-item").css({
            "width" : "calc(100% / " + jQuery(this).data("thumbnail-items") + ")" ,
        });
	});
	// RADIANTTHEMES IMAGE SLIDER.
	jQuery(".rt-image-slider.owl-carousel").each(function(){
        jQuery(this).owlCarousel({
            nav: true,
            dots: true,
            loop: true,
            center: true,
            mouseDrag: false,
            touchDrag: false,
            autoplay: true,
            autoplayTimeout: 6000,
            responsive:{
                0:{ items: jQuery(this).data("owl-mobile-items") },
                321:{ items: jQuery(this).data("owl-mobile-items") },
                480:{ items: jQuery(this).data("owl-tab-items") },
                768:{ items: jQuery(this).data("owl-tab-items") },
                992:{ items: jQuery(this).data("owl-desktop-items") },
                1200:{ items: jQuery(this).data("owl-desktop-items") }
            }
        });
        jQuery(this).find(".fancybox").fancybox({
            animationEffect: "zoom-in-out",
            animationDuration: 500,
            zoomOpacity: "auto",
        });
	});
	// RADIANTTHEMES PORTFOLIO SLIDER.
    jQuery(".rt-portfolio-slider.owl-carousel").each(function(){
		jQuery(this).owlCarousel({
			nav: true,
			dots: false,
			mouseDrag: false,
			touchDrag: true,
			loop: jQuery(this).data("portfolio-mobileitem") ,
			autoplay: jQuery(this).data("portfolio-mobileitem") ,
			autoplayTimeout: jQuery(this).data("portfolio-mobileitem") ,
			responsive:{
		        0:{ items: jQuery(this).data("portfolio-mobileitem") },
		        321:{ items: jQuery(this).data("portfolio-mobileitem") },
		        480:{ items: jQuery(this).data("portfolio-tabitem") },
		        768:{ items: jQuery(this).data("portfolio-tabitem") },
		        992:{ items: jQuery(this).data("portfolio-desktopitem") },
		        1200:{ items: jQuery(this).data("portfolio-desktopitem") }
		    }
        });
        if ( jQuery(this).hasClass("has-fancybox") ) {
            jQuery(this).find(".fancybox").fancybox({
                animationEffect: "zoom-in-out",
                animationDuration: 500,
                zoomOpacity: "auto",
            });
        }
	});
	// RADIANTTHEMES TIMELINE.
	jQuery(".radiantthemes-timeline").each(function(){
		jQuery(this).find(".owl-carousel").owlCarousel({
            nav: false,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 6000,
            items: 1,
            thumbs: true,
            thumbImage: false,
        });
	});
    // RADIANTTHEMES CASE STUDIES SLIDER.
    jQuery(".radiantthemes-case-studies-slider.owl-carousel").each(function(){
		jQuery(this).owlCarousel({
			nav: false,
			dots: false,
			mouseDrag: false,
			touchDrag: true,
			loop: jQuery(this).data("case-studies-mobileitem") ,
			autoplay: jQuery(this).data("case-studies-mobileitem") ,
			autoplayTimeout: jQuery(this).data("case-studies-mobileitem") ,
			responsive:{
		        0:{ items: jQuery(this).data("case-studies-mobileitem") },
		        321:{ items: jQuery(this).data("case-studies-mobileitem") },
		        480:{ items: jQuery(this).data("case-studies-tabitem") },
		        768:{ items: jQuery(this).data("case-studies-tabitem") },
		        992:{ items: jQuery(this).data("case-studies-desktopitem") },
		        1200:{ items: jQuery(this).data("case-studies-desktopitem") }
		    }
        });
        if ( jQuery(this).hasClass("has-fancybox") ) {
            jQuery(this).find(".fancybox").fancybox({
                animationEffect: "zoom-in-out",
                animationDuration: 500,
                zoomOpacity: "auto",
            });
        }
	});
	// RADIANTTHEMES BLOG ELEMENT.
	jQuery(".blog.isotope:not(.owl-carousel)").each(function(){
		jQuery(this).isotope({
	        layoutMode: 'masonry',
	    });
    });
	// RADIANTTHEMES CASE STUDY ELEMENT.
	jQuery(".rt-case-study-box.isotope").each(function(){
        var $RTCaseStudyBoxElementOne = jQuery(this).isotope({
            layoutMode: 'masonry',
        });
        jQuery(this).parent().children(".rt-case-study-box-filter > button:last-child").addClass("current-menu-item");
        jQuery(this).parent().children(".rt-case-study-box-filter").on( 'click', 'button', function(){
            jQuery(this).parent().find("button").removeClass("current-menu-item");
            jQuery(this).attr("class","current-menu-item");
            $RTCaseStudyBoxElementOne.isotope({
                filter: jQuery(this).attr("data-filter"),
            });
        });
        if ( jQuery(this).hasClass("has-fancybox") ) {
            jQuery(this).find(".fancybox").fancybox({
                animationEffect: "zoom-in-out",
                animationDuration: 500,
                zoomOpacity: "auto",
            });
        }
    });
    // RADIANTTHEMES PORTFOLIO BOX.
    jQuery(".rt-portfolio-box.isotope").each(function(){
        jQuery(this).isotope({
        	percentPosition: true,
        	layoutMode: 'packery',
            //layoutMode: 'masonry',
        });
        jQuery(this).find(".fancybox").fancybox({
            animationEffect: "zoom-in-out",
            animationDuration: 500,
            zoomOpacity: "auto",
        });
    });
    // RADIANTTHEMES FLIP BOX.
    jQuery(".rt-flip-box").each(function(){
	    jQuery(this).children(".holder").justFlipIt({
    	    FlipX: jQuery(this).data("flip-box-x") ,
    	    Template: jQuery(this).find(".second-card") ,
    	});
    	jQuery(this).find(".first-card").unwrap();
	});
});