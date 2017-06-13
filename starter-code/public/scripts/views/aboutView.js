'use strict';
var app = app || {};

(function(module) {
  const aboutView = {};

  // REVIEW: Private methods declared here live only within the scope of the wrapping IIFE.
  const ui = function() {
    let $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  // DONE: Remember that new Handlebars template? Let's compile it!
  // Save the result in this `render` variable.
  let repoRender = Handlebars.compile($('#repo-template').text());
  let userRender = Handlebars.compile($('#user-template').text());

  aboutView.userIndex = function() {
    ui();
    // The jQuery `append` method lets us append an entire array of HTML elements at once:
    $('#about div').append(
      app.user.all.map(userRender));
  };

  aboutView.repoIndex = function() {
    ui();
    // console.log('appending for repo: ',app.repos.with('name').map(repoRender));
    // The jQuery `append` method lets us append an entire array of HTML elements at once:
    $('#about ul').append(
      app.repos.with('name').map(repoRender) // Want to filter by a different property other than name?
    );
  };


  module.aboutView = aboutView;
})(app);
