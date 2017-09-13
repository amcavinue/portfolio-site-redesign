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
      caseStudyBanner: '/content/case-studies/weather-app/weather-app-banner.jpg',
      caseStudyBannerAlign: 'top',
      caseStudyIntroTitle: 'Weather App',
      caseStudyIntroBlurb: 'An app for everyone that displays your local weather, built in a maintainable and scalable way.',
      caseStudySource: 'https://github.com/amcavinue/weather-app',
      caseStudySite: 'http://intense-shelf-90505.herokuapp.com/',
      caseStudyBody: [
        {
          type: 'p',
          title: 'Overview',
          content: 'The goal of this app is to create a simple weather app using perfect coding practices. It can easily be scaled, extended, and maintained by another React developer.'
        },
        {
          type: 'p',
          title: 'Use Case',
          content: 'Why is this app useful? It allows you to get the weather from your current location, and see what it will be like hours and days from now.'
        },
        {
          type: 'img',
          content: '/content/case-studies/weather-app/weather-app-combined.jpg'
        },
        {
          type: 'ul',
          title: 'Functionality',
          list: [
            'Works as a SPA, allowing the user to view multiple weather components on the same page, without reloading the browser.',
            'Has rich charts for displaying the upcoming forecasts.',
            'Gives data in Farenheight and Celcius measurements.',
            'Implemented with clean design principles.'
          ]
        },
        {
          type: 'ul',
          title: 'Technical',
          list: [
            'The app is built mainly with front-end technologies, specifically React, Redux, JavaScript, HTML, and CSS. Helper libraries such as Lodash, Chart.js, and Minute.js were also used.',
            'It utilizes ES6 features of JavaScript, making the code easier to read and maintain. These features are transpiled using Babel to work on all browsers.',
            'The Airbnb JavaScript style guide is followed to ensure consistent, clean code is produced.',
            'All front-end components have been tested using Mocha, and the production version passes all tests.',
            'The front end is fully responsive and follows clean usability principles.',
            'Continuous integration using Travis CI was used during development.',
            'Heroku (server hosting) and Cloud9 (editing) were SaaS services used during development and deployment.'
          ]
        },
        {
          type: 'p',
          title: 'Results',
          content: 'The resulting application works solidly without bugs and is maintainable so other developers can edit it easily. It\'s sure to provide the customers with valuable weather info for years to come.'
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