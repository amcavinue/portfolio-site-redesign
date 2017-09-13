$(function() {
  // Load the Handlebars template. 
  loadPartials(function(content) {
    //Compile main template
    var template = Handlebars.compile(content.filter("#weather-app").html());
    var data = {
      header: {
        id: '',
        title: 'Full-Stack Software Developer',
        link: '/',
        otherSite: '/art',
        otherSiteText: 'Also see my artwork >'
      },
      caseStudyBanner: '',
      caseStudyIntroTitle: 'Weather App',
      caseStudyIntroBlurb: 'An app for everyone that displays your local weather, built in a maintainable and scalable way.',
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