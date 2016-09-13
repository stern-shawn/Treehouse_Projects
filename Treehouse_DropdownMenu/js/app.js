// Looks like shite in smaller browser widths
// Solution: Make a dropdown/compact menu for smaller screens

// Create a select object, append to the menu after the ul
var $select = $("<select></select>");
$("#menu").append($select);

// Fill the select using the li's in the ul

$("#menu a").each(function() {
  var $anchor = $(this);
  var $option = $("<option></option>");

  // Assign value/text to the option
  $option.val($anchor.attr("href"));
  $option.text($anchor.text());

  // If this element is selected on this current page, give it the
  // selected attribute before appending to the list
  if ($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }

  // Append to the list of options
  $select.append($option);
});

// Listen to the select menu and navigate to the new selection when it changes
$select.change(function() {
  window.location = $select.val();
});
