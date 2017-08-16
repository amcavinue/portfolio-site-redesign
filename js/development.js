/* Match column height */
$('.service-item').matchHeight();

/* Animate to auto height: https://css-tricks.com/snippets/jquery/animate-heightwidth-to-auto/ */
jQuery.fn.animateAuto = function(prop, speed, callback){
  var elem, height, width;
  return this.each(function(i, el){
    el = jQuery(el), elem = el.clone().css({"height":"auto","width":"auto"}).appendTo("body");
    height = elem.css("height"),
    width = elem.css("width"),
    elem.remove();
    
    if(prop === "height")
      el.animate({"height":height}, speed, callback);
    else if(prop === "width")
      el.animate({"width":width}, speed, callback);
    else if(prop === "both")
      el.animate({"width":width,"height":height}, speed, callback);
  });
}

function carouselHeightMatch() {
  var maxHeight = -1;
     $('.item').each(function() {
       maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
     });
  
     $('.item').each(function() {
       $(this).height(maxHeight);
     });
}

/* Show more fade: https://css-tricks.com/text-fade-read-more/ */
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
