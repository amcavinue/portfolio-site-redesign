$(function() {
  // Load the Handlebars template. 
  loadPartials(function(content) {
    //Compile main template
    var template = Handlebars.compile(content.filter("#ecommerce-wishlist").html());
    var data = {
      header: {
        id: '',
        title: 'Web Developer',
        link: '/',
        otherSite: '/art',
        otherSiteText: 'Also see my artwork >'
      },
      caseStudyBanner: '/content/case-studies/ecommerce-wishlist/ecommerce-banner.jpg',
      caseStudyBannerAlign: 'center',
      caseStudyIntroTitle: 'Ecommerce Wishlist',
      caseStudyIntroBlurb: 'A well-engineered app that lets you create a custom wishlist from your favorite products.',
      caseStudySource: 'https://github.com/amcavinue/ecommerce-wishlist',
      caseStudySite: 'https://powerful-island-41601.herokuapp.com/#/',
      caseStudyBody: [
        {
          type: 'p',
          title: 'Overview',
          content: 'The goal of this app was to exercise full-stack development skills by creating an application that utilizes the entire MERN stack.'
        },
        {
          type: 'p',
          title: 'Use Case',
          content: 'Why is this app useful? It allows you to securely create an individual profile, search for your favorite products, and add them to a custom wishlist.'
        },
        {
          type: 'img',
          content: '/content/case-studies/ecommerce-wishlist/ecommerce-wishlist-combined.jpg'
        },
        {
          type: 'ul',
          title: 'Development Story',
          list: [
            'Works as a SPA, allowing the user to use the entire app on the same page without reloading the browser.',
            'Devops work was performed with an automated build system, test tasks, production deployment, encrypted environment variables, and more.',
            'Sessionless user authentication was set up on the front- and back- ends using JWT and Passport.js.',
            'All the forms in the application have authentication and alert the user in real time for a good user experience.',
            'A CRUD restful API was built on the backend that could be accessed by other applications.',
            'A lean kanban approach with continuous deployment was used for a functioning application since day one.',
            'The entire application is scalable and maintainable, using the best practices of each language and technology, and following general software principles. The app is coded with clean logic allowing for other developers to pick it up and extend it easily. A separation of concerns is used which will allow for redesigns, refactors, pivots, and more functionality to be added effortlessly.',
            'The entire application is unit tested, providing software that is reliable and free of bugs.'
          ]
        },
        {
          type: 'img',
          content: '/content/case-studies/ecommerce-wishlist/kanbanflow-combined.jpg'
        },
        {
          type: 'ul',
          title: 'Technical',
          list: [
            'The app is built mainly with the MERN stack and makes use of MongoDB and Mongoose, Express, React and Redux, and Node.js. Helper libraries such as Bootstrap, and Passport.js were also used.',
            'It utilizes ES6 features of JavaScript, making the code easier to read and maintain. These features are transpiled using Babel to work on all browsers.',
            'All front-end components and back-end API endpoints have been tested using Mocha, and the production version passes all tests.',
            'The front end is fully responsive and follows clean usability principles.',
            'Continuous integration using Travis CI was used during development.',
            'Heroku (server hosting), Cloud9 (editing), and mLab (database) were SaaS services used during development and deployment.'
          ]
        },
        {
          type: 'p',
          title: 'Results',
          content: 'The resulting application works solidly without bugs and is designed well to further engage customers and increase sales. The code is clean and documented, making it easy for other developers to pick up, edit, and extend. It\'s sure to provide the company with value for years to come.'
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