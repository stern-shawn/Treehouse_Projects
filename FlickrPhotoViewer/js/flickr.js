$(document).ready(function() {
  // Replace button click with form submit handler
  $('form').submit(function(e) {
    // Prevent navigation to another page
    e.preventDefault();

    // Disable elements and let user know search is under way...
    var $searchField = $('#search');
    var $submitButton = $('#submit');

    $searchField.prop("disabled", true);
    $submitButton.attr("disabled", true).val("searching...");

    // Set up the API call...
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    // Set animal to the internal text of user's search input
    var requestedTag = $searchField.val();

    var flickrOptions = {
      tags: requestedTag,
      format: "json"
    };

    var displayPhotos = function (data) {
      // Create a new container for photo results
      var photos = $('<ul></ul>');

      $.each(data.items, function(i, photo) {
        // Create the outer li, anchor, and img elements for the entry
        // Use jQuery to assign attributes controlled by photo data
        var newLi = $("<li class='grid-25 tablet-grid-50'></li>");
        var newLink = $("<a class='image' target='_blank'></a>");
        newLink.attr('href', photo.link);
        var newThumbnail = $("<img>");
        newThumbnail.attr('src', photo.media.m);

        // Properly nest elements and add to the parent ul
        newLink.append(newThumbnail);
        newLi.append(newLink);
        photos.append(newLi);

        // After load complete, reenable the form elements...
        $searchField.prop("disabled", false);
        $submitButton.attr("disabled", false).val("Search");
      });

      // Replace current 'photos' div's content with this new list of photos
      $('#photos').html(photos);
    };

    // Fire off the JSON request
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
  }); // End click function for buttons
});
