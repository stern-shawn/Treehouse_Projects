// Problem: We need a simple way to look at a user's badge count and JavaScript points from a web server, and put the information into the HTML templates
// Solution: Use Node.js to perform the look up and serve the template using http

// Imports
var router = require("./router.js");

// Create a web server
var http = require('http');

http.createServer(function(request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(3000);
console.log("Server running at http://<workspace-url>");



// Function that handles the reading of files and merge into values
// read from file and get a string
// merge values into string

