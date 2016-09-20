var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");

// Set output type to html so output is rendered instead of output as plain text
var commonHeaders = {'Content-Type': 'text/html'};

// Handle the http route GET / and POST / ie HOME
function home(request, response) {
  // If url === / && GET
  // show the search field
  if (request.url === "/") {
    if (request.method.toLowerCase() === "get") {
      response.writeHead(200, commonHeaders);
      renderer.view("header", {}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    } else {
      // If url === / && POST from the submit button

      // Get post data from body
      request.on("data", function(postBody) {
        // extract username
        var query = querystring.parse(postBody.toString());

        // redirect to site/username using Location header,
        // Code303 forces a GET on a POST request
        response.writeHead(303, {"Location": "/" + query.username});
        response.end();
      })
    }
  }
}

// Handle HTTP route Get /:userame ie /chalkers or /shawnste
function user(request, response) {
//if url === "/*"
  // Remove the slash from url and check if we have any username input
  var username = request.url.replace("/", "");
  if (username.length > 0) {
    response.writeHead(200, commonHeaders);
    renderer.view("header", {}, response);

    // get *'s json from treehouse
    var studentProfile = new Profile(username);
    // on end, show profile
    studentProfile.on("end", function(profileJSON){
      // Store values that we need
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }

      // Simple response
      renderer.view("profile", values, response);
      renderer.view("footer", {}, response);
      response.end();
    });
    // on error, show error
    studentProfile.on("error", function(error) {
      renderer.view("error", {errorMessage: error.message}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    });
  }
}

module.exports.home = home;
module.exports.user = user;
