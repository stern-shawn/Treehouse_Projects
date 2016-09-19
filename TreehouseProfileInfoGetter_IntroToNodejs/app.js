var profile = require("./profile.js");
// var users = ["chalkers", "shawnstern", "davemcfarland"];

// console.dir(process.argv);
// Slice from index 2 to accept any number of extra args. First two are path to node.js and the app itself
var users = process.argv.slice(2);

// .get automatically run on each element in the array
users.forEach(profile.get);

// // Normal, but longer
// users.forEach(function(username) {
//  profile.get(username);
// });
