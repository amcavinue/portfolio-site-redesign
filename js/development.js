$(function() {
  var heightIncrement = 765,
      currHeight = 765;
  
  // Load the Handlebars template. 
  loadPartials(function(content) {
    //Compile main template
    var template = Handlebars.compile(content.filter("#development-page").html());
    var data = {
      header: {
        
      }
    };
    document.body.innerHTML = template(data);
  });
  
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
});

$(window).on("load", function() {
  carouselHeightMatch();
	$(window).on('resize', function() {
	    $('.item').removeAttr("style");
	    carouselHeightMatch();
	});
});
