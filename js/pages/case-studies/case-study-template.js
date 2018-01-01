$(function() {
  // Load the Handlebars template. 
  loadPartials(function(content) {
    //Compile main template
    var template = Handlebars.compile(content.filter("#").html());
    var data = {
      header: {
        id: '',
        title: 'Web Developer',
        link: '/',
        otherSite: '/art',
        otherSiteText: 'Also see my artwork >'
      },
      caseStudyBanner: '',
      caseStudyBannerAlign: '',
      caseStudyIntroTitle: '',
      caseStudyIntroBlurb: '',
      caseStudySource: '',
      caseStudySite: '',
      caseStudyBody: [
        {
          type: 'p',
          title: 'Overview',
          content: ''
        },
        {
          type: 'p',
          title: 'Use Case',
          content: ''
        },
        {
          type: 'img',
          content: ''
        },
        {
          type: 'ul',
          title: 'Development Story',
          list: [
            '',
            ''
          ]
        },
        {
          type: 'img',
          content: ''
        },
        {
          type: 'ul',
          title: 'Technical',
          list: [
            '',
            ''
          ]
        },
        {
          type: 'p',
          title: 'Results',
          content: ''
        },
      ],
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