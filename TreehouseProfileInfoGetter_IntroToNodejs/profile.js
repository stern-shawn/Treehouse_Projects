// Problem:  Need a simple way to look at the user's badge count and Javascript points
// Approach: Use Node.js to grab the .json treehouse URL and parse the user's info

var https = require("https");

// Print out an error message
function printError(error) {
  console.error(error.message);
}

// Print out a message
function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

function get(username) {
  // Connect to the api at teamtreehouse.com/username.json
  var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response){
    var body = "";

    console.log(response.statusCode);
    // Read
    response.on('data', function(chunk) {
      body += chunk;
    });

    response.on('end', function() {
      if(response.statusCode === 200) {
        // Add error handler in case we don't get valid JSON
        try {
          // Parse
          var profile = JSON.parse(body);
          // Print results
          printMessage(username, profile.badges.length, profile.points.JavaScript);
        } catch(error) {
          printError(error);
        }
      } else {
        // StatusCode error
        printError({message: "There was an error getting the profile for " + username + ". (" + response.statusMessage + ")"});
      }
    })
  }).on("error", printError);
}

// Make the method get() visible when imported
module.exports.get = get;
