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
    response.write("Search for " + username + "\n");
    response.end("Footer\n");
    
  // get *'s json from treehouse
    // on end, show profile
    // on error, show error
  }
}

module.exports.home = home;
module.exports.user = user;