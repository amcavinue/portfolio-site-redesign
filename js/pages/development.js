$(function() {
  var heightIncrement = 765,
      currHeight = 765;
  
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
        portrait: true,
        blurb: 'I look forward to hearing from you and helping achieve your goals.'
      }
    };
    document.body.innerHTML = template(data);
    
    /* Match column height */
    $('.service-item').matchHeight();
    	
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
    
    // ScrollMagic options.
    $('section, footer').each(function(i, el) {
      $('#scroll-navigation').append('<a class="scroll-link" href="#' + $(this).attr('id') + '">&#9679;</a>');
    });
    
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        duration: $('section').height(),
        triggerHook: .025,
        reverse: true
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
    
    $(document).on('click', '.scroll-link', function(e) {
      var id = $(this).attr("href"); // grab the href attribute value
    
      if($(id).length > 0) {
        // prevents default behavior of links.
        e.preventDefault();
        
        // trigger scroll
        controller.scrollTo(id);
      }
    });
  });
});