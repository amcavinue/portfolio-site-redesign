function showMore(currHeight, heightIncrement) {
	/* Show more fade: https://css-tricks.com/text-fade-read-more/ */
	$('.work-samples').css({'height' : currHeight});
  $('.work-samples .button').click(function() {
    var scrollHeight = $('.work-samples')[0].scrollHeight;
  	if (currHeight + heightIncrement < scrollHeight) {
  	  currHeight += heightIncrement;
  	  $('.work-samples')
  		.animate({
  			'height': currHeight
  		}, 500);
  	} else {
  	  $('.work-samples').animateAuto('height', 500, function() {
  	    $('.work-samples').css('height', 'auto');
  	  });
  	  $('.show-more').fadeOut();
  	}
  	// prevent jump-down
  	return false;
  });
}

function scrollNav() {
  // ScrollMagic options.
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 0.55,
      reverse: true,
    }
  });
  
  controller.scrollTo(function(target) {
    TweenMax.to(window, 0.5, {
      scrollTo : {
        y : target,
        autoKill : true
      },
      ease : Cubic.easeInOut
    });
  });
  
  
  $('section, footer').each(function(i, el) {
    $('#scroll-navigation').append('<a class="scroll-link" id="scroll-link-' + i + '" href="#' + $(this).attr('id') + '">&#9679;</a>');
    // var currHeight = $(this).height();
    var section = this;
	  var scene = new ScrollMagic.Scene({
  	  triggerElement: '#' + $(this).attr('id'),
  	  duration: function() {
  	    return $(section).height();
  	  }
  	})
			.setClassToggle('#scroll-link-' + i, "scroll-active") // add class toggle
			// .addIndicators() // For debugging.s
			.addTo(controller);
  });
  $('#scroll-navigation').show();
  
  $(document).on('click', '.scroll-link', function(e) {
    var id = $(this).attr("href"); // grab the href attribute value
  
    if($(id).length > 0) {
      // prevents default behavior of links.
      e.preventDefault();
      
      // trigger scroll
      controller.scrollTo(id);
    }
  });
  
  $(document).on('click', '.websites-link', function(e) {
    e.preventDefault();
    controller.scrollTo('#dev-intro');
  });
  
  $(document).on('click', '.websites-link', function(e) {
    e.preventDefault();
    controller.scrollTo('#art');
  });
}

function carouselProgress() {
  var percent = 0,
    	interval = 100,
    	$bar = $('.carousel-progress-bar'),
    	$crsl = $('#testimonials-carousel');
	$('.carousel-indicators li, .carousel-control').click(function (){$bar.css({width:0.5+'%'});});
	$crsl.carousel({
		interval: false,
		pause: true
	}).on('slide.bs.carousel', function (){percent = 0;});//This event fires immediately when the bootstrap slide instance method is invoked.
	function progressBarCarousel() {
		$bar.css({width:percent+'%'});
		percent = percent +0.5;
		if (percent>=100) {
			percent=0;
			$crsl.carousel('next');
		}
	}
	var barInterval = setInterval(progressBarCarousel, interval);//set interval to progressBarCarousel function
	if (!(/Mobi/.test(navigator.userAgent))) {//tests if it isn't mobile
		$crsl.hover(function(){
					clearInterval(barInterval);
				},
				function(){
					barInterval = setInterval(progressBarCarousel, interval);
				}
		);
	}
}

function equalWidthTabs() {
  var containerWidth = $('.nav-tabs').width();
    
  if (containerWidth > 700) {
    $('.nav-tabs>li').each(function(i, el) {
      $(this).width(Math.floor(containerWidth / 5) - 10); // 2 * 5px border
    });
  } else {
    $('.nav-tabs>li').each(function(i, el) {
      $(this).width('100%');
    });
  }
}

$(function() {
  // Load the Handlebars template. 
  loadPartials(function(content) {
    //Compile main template
    var template = Handlebars.compile(content.filter("#development-page").html());
    var data = {
      header: {
        id: '',
        title: 'Web Developer',
        link: '/',
        otherSite: '/art',
        otherSiteText: 'Also see my artwork >'
      },
      caseStudies: {
        showMore: true
      },
      contact: {
        portrait: false,
        blurb: 'I look forward to hearing from you and making something amazing.'
      }
    };
    document.body.innerHTML = template(data);
    
    /* Match column height */
    $('.service-item').matchHeight();
    
    showMore(765, 765);
    scrollNav();
    carouselProgress();
    equalWidthTabs();
    $(window).on('resize', equalWidthTabs);
    
    $('#toggle').click(function() {
     $(this).toggleClass('active');
     $('#overlay').toggleClass('open');
    });
    
    AOS.init();
  });
});
