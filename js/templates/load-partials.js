function loadPartials(done) {
  $.get('/partials.html').done(function(response) {
    var content = $($.parseHTML(response));

    //You need to register each partial
    Handlebars.registerPartial({
      header: content.filter('#header').html(),
      intro: content.filter('#intro').html(),
      services: content.filter('#services').html(),
      testimonials: content.filter('#testimonials').html(),
      workSamples: content.filter('#work-samples').html(),
      contact: content.filter('#contact').html(),
      introArt: content.filter('#introArt').html(),
      gallery: content.filter('#gallery').html(),
      introCaseStudy: content.filter('#introCaseStudy').html(),
      caseStudyBody: content.filter('#caseStudyBody').html(),
      caseStudyBanner: content.filter('#caseStudyBanner').html(),
      caseStudyMore: content.filter('#caseStudyMore').html(),
      scrollNav: content.filter('#scrollNav').html(),
      frontIntro: content.filter('#front-intro').html(),
      devIntro: content.filter('#dev-intro').html()
    });
    
    done(content);
  });
}
