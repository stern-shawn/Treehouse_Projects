// Import the filesystem from Node.js
var fs = require("fs");

// Merge the given values into the provided content
function mergeValues(values, content) {
  // Cycle over all keys
  for (var key in values) {
    // Replace placeholers with the corresponding values
    content = content.replace("{{" + key + "}}", values[key]);
  }

  // Return modified file contents
  return content;
}

// Render the given template, with any given values, to the response
function view(templateName, values, response) {
  // Read from the html template files. Make sure to give the encoding argument so returned value is a string
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});

  // Insert values into the content
  fileContents = mergeValues(values, fileContents);

  // Write out the contents to the response
  response.write(fileContents);
}

module.exports.view = view;
