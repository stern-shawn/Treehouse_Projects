// Problem: User when clicking on image goes to a dead end
// Solution: Create an overlay with the large image, ie make a 'lightbox'

// Store the overly and its elements as jQuery variables to reference later
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// Add image to overlay
$overlay.append($image);

// Add caption to overlay
$overlay.append($caption);

// Add overlay to the DOM
$("body").append($overlay);

// Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  // Prevent the default behavior of navigating to the link
  event.preventDefault();

  // Update overlay with the image linked in the link
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);

  // Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);

  // Now that everything is put together, show the overlay
  $overlay.show();
});

// When overlay is clicked...
$overlay.click(function(){
  // Hide the overlay
  $overlay.hide();
});
