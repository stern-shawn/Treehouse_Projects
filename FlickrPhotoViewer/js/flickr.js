$(document).ready(function() {
  $('button').click(function() {
    // Remove highlighted from all other buttons
    $('button').removeClass('selected');
    $(this).addClass('selected');
    
    // Callback variables and callback below
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    // Set animal to the internal text of this button (cat, dog, or moose)
    var animal = $(this).text();
    
    var flickrOptions = {
      tags: animal,
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
      });
      
      // Replace current 'photos' div's content with this new list of photos
      $('#photos').html(photos);
    };
    
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  }); // End click function for buttons
});