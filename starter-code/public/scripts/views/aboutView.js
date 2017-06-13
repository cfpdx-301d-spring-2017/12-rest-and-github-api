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
  let userRender = Handlebars.compile($('#user-template').text()); 
  let repoRender = Handlebars.compile($('#repo-template').text());

  aboutView.userIndex = function() {
    ui();
    // The jQuery `append` method lets us append an entire array of HTML elements at once:
    $('#about div').append(
      app.user.userRender // Want to filter by a different property other than name?
    );
  };
  aboutView.repoIndex = function() {
    ui();
    // The jQuery `append` method lets us append an entire array of HTML elements at once:
    $('#about ul').append(
      app.repos.with('name').map(repoRender) // Want to filter by a different property other than name?
    );
  };


  module.aboutView = aboutView;
})(app);
