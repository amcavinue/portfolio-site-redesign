$(function() {
  // Load the Handlebars template. 
  loadPartials(function(content) {
    //Compile main template
    var template = Handlebars.compile(content.filter("#image-organizer").html());
    var data = {
      header: {
        id: '',
        title: 'Web Developer',
        link: '/',
        otherSite: '/art',
        otherSiteText: 'Also see my artwork >'
      },
      caseStudyBanner: '/content/case-studies/image-organizer/image-organizer-banner.jpg',
      caseStudyBannerAlign: 'top',
      caseStudyIntroTitle: 'Image Organizer',
      caseStudyIntroBlurb: 'An app that stores images, built with a tag system for mining unrelated images for creative inspiration.',
      caseStudySource: 'https://github.com/amcavinue/image-organizer',
      caseStudySite: 'https://still-temple-63836.herokuapp.com/',
      caseStudyBody: [
        {
          type: 'p',
          title: 'Overview',
          content: 'I created this app because I needed a way to manage the collection of images I use for art and illustration projects. It was inspired by organizer and productivity apps like Evernote. Each project I do uses a different theme, and needs different images. The app implements a tag system, which allows the user to mine unrelated images for related qualities. This can be used as a source of inspiration, as a creativite tool, or can be used to locate reference for specific objects.'
        },
        {
          type: 'p',
          title: 'Use Case',
          content: 'Why is this app useful? It allows you to organize lots of images that have personal significance to you, and search through them in a fluid, useable way not provided by typical filesystems.'
        },
        {
          type: 'img',
          content: '/content/case-studies/image-organizer/screenshots.jpg'
        },
        {
          type: 'ul',
          title: 'Functionality',
          list: [
            'Implements a tag system that can be used on multiple images, updated, and added to in real-time.',
            'Works as a SPA, allowing the user to upload images, change tags, and change images without reloading the browser.',
            'Has a filter system allowing the user to search based on tags, filenames, or words in the image descriptions.',
            'Has easy drag-and-drop functionality for uploading images.',
            'Implemented with clean design principles.'
          ]
        },
        {
          type: 'p',
          title: 'Data Modeling',
          content: 'The tag system for this project required a many-to-many relationship between the different collections of data. This was visualized before building the application with this image:'
        },
        {
          type: 'img',
          maxWidth: '660px',
          content: '/content/case-studies/image-organizer/image_tags_schema_1.jpg'
        },
        {
          type: 'ul',
          title: 'Technical',
          list: [
            'The app is built mainly with Node.js and MongoDB on the back end, and Bootstrap and jQuery on the front end. Helper libraries were used as well.',
            'The back end implements a full REST API, for creating images and tags, reading data and images, uploading images, modifying data, and deleting images, tags, and data.',
            'The entire API has been tested using Mocha, and the production version passes all tests.',
            'The front end is fully responsive and follows clean usability principles.',
            'Continuous integration using Travis CI was used during development.',
            'Heroku (server hosting), Cloud9 (editing), and mLab (MongoDB hosting) were SaaS services used during development and deployment.'
          ]
        },
        {
          type: 'p',
          title: 'Results',
          content: 'The resulting application works solidly without bugs and is maintainable so other developers can edit it easily. It\'s sure to provide the customers with valuable image organization capabilities for years to come.'
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