<!-- In-line style for lightbox - Shawn Stern 10/3/16 -->
<style>
	/** Start Coding Here **/
	#overlay {
	  background:rgba(0,0,0,0.7);
	  width:100%;
	  height:100%;
	  position:fixed;
	  top:0;
	  left:0;
	  display:none;
	  text-align:center;
		z-index: 999;
	}

	#overlay img {
		margin-top: 2.5%;
	 	max-height: 90%;
	}
</style>

<!-- Javascript for lightbox - Shawn Stern 10/3/16 -->
<script type="text/javascript">
	// Store the overly and its elements as jQuery variables to reference later
	var $overlay = $('<div id="overlay"></div>');
	var $image = $("<img>");

	// Add image to overlay
	$overlay.append($image);

	// Add overlay to the DOM
	$("body").append($overlay);

	// Capture the click event on a link to an image
	$("td img").click(function(){
	  // Update overlay with the image linked in the link
	  var imageLocation = $(this).attr("src");
	  $image.attr("src", imageLocation);

	  // Now that everything is put together, show the overlay
	  $overlay.show();
	});

	// When overlay is clicked...
	$overlay.click(function(){
	  // Hide the overlay
	  $overlay.hide();
	});
</script>
