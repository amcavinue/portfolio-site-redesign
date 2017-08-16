function loadPartials(done) {
  $.get("partials.html").done(function(response) {
    var content = $($.parseHTML(response));

    //You need to register each partial
    Handlebars.registerPartial({
      header: content.filter("#header").html()
    });
    
    done(content);
  });
}
