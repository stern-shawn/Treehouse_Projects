var Profile = require("./profile.js");

// Handle the http route GET / and POST / ie HOME
function home(request, response) {
// If url === / && GET
  // show the serach field
  if (request.url === "/") {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n");
  }

// If url === / && POST
  // redirect to site/username
}

// Handle HTTP route Get /:userame ie /chalkers or /shawnste
function user(request, response) {
//if url === "/*"
  // Remove the slash from url and check if we have any username input
  var username = request.url.replace("/", "");
  if (username.length > 0) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");

     // get *'s json from treehouse
    var studentProfile = new Profile(username);
    // on end, show profile
    studentProfile.on("end", function(profileJSON){
      // Show profile

      // Store values that we need
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }

      // Simple response
      response.write(values.username + " has " + values.badges + " badges\n");
      response.end("Footer\n");
    });

    // on error, show error
    studentProfile.on("error", function(error) {
      response.write(error.message + "\n");
      response.end("Footer\n");
    });
  }
}

module.exports.home = home;
module.exports.user = user;
