$(function() {
  // Load the Handlebars template. 
  loadPartials(function(content) {
    //Compile main template
    var template = Handlebars.compile(content.filter("#").html());
    var data = {
      header: {
        id: '',
        title: 'Full-Stack Software Developer',
        link: '/',
        otherSite: '/art',
        otherSiteText: 'Also see my artwork >'
      },
      caseStudyBanner: '',
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
        portrait: true,
        blurb: 'I look forward to hearing from you and helping achieve your goals.'
      }
    };
    document.body.innerHTML = template(data);
  });
});