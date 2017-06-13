'use strict';
var app = app || {};

(function (module) {
  const repoView = {};

  // REVIEW: Private methods declared here live only within the scope of the wrapping IIFE.
  const ui = function () {
    let $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  // DONE: Remember that new Handlebars template? Let's compile it!
  // Save the result in this `render` variable.
  var source = $('#repo-template').html();
  var templateFiller = Handlebars.compile(source);


  repoView.index = function () {
    ui();
    // The jQuery `append` method lets us append an entire array

    $('#about ul').append(
      app.repos.with('name').map(function (repo) {
        return templateFiller(repo);
      }) // Want to filter by a different property other than name?
    );
  };

  module.repoView = repoView;
})(app);
