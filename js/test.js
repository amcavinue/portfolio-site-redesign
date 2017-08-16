$(function () {
  //Get partials from server
  $.get("partials.html").done(function(response) {
    var content = $($.parseHTML(response));

    //Compile main template
    var template = Handlebars.compile(content.filter("#test-template").html());

    //You need to register each partial
    Handlebars.registerPartial({
      foo: content.filter("#foo-partial").html(),
      bar: content.filter("#bar-partial").html()
    });

    //Your data
    var data = {
      "test": [{
        foo: "Foo",
        "foo_bar": "Foo-Bar",
        bar: "Bar",
        bar_foo: "Bar-Foo"
      }, {
        foo: "Foo2",
        "foo_bar": "Foo-Bar2",
        bar: "Bar2",
        bar_foo: "Bar-Foo2"
      }]
    };
    document.body.innerHTML = template(data);
  });
});
