$(function() {
  // Load the Handlebars template. 
  loadPartials(function(content) {
    //Compile main template
    var template = Handlebars.compile(content.filter("#case-studies").html());
    var data = {
      header: {
        id: '',
        title: 'Web Developer',
        link: '/',
        otherSite: '/art',
        otherSiteText: 'Also see my artwork >'
      },
      caseStudies: {
        showMore: false
      },
      contact: {
        portrait: false,
        blurb: 'I look forward to hearing from you and making something amazing.'
      }
    };
    document.body.innerHTML = template(data);
    
    $('#toggle').click(function() {
     $(this).toggleClass('active');
     $('#overlay').toggleClass('open');
    });
    
    $('.overlay-menu li a').click(function(e) {
      $('#toggle').toggleClass('active');
	    $('#overlay').toggleClass('open');
	  });
  });
});