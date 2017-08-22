function loadPartials(done) {
  $.get(window.location.protocol + '//' + window.location.hostname + '/partials.html').done(function(response) {
    var content = $($.parseHTML(response));

    //You need to register each partial
    Handlebars.registerPartial({
      header: content.filter('#header').html(),
      intro: content.filter('#intro').html(),
      services: content.filter('#services').html(),
      testimonials: content.filter('#testimonials').html(),
      workSamples: content.filter('#work-samples').html(),
      contact: content.filter('#contact').html()
    });
    
    done(content);
  });
}
