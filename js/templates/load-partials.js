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
      gallery: content.filter('#gallery').html()
    });
    
    done(content);
  });
}
