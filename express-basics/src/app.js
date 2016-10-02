'use strict'

// Import express module
var express = require('express')
var posts = require('./mock/posts.json')

var postsList = Object.keys(posts).map(function (key) {
  // Turn posts object into array of post objects since render only works on arrays
  return posts[key]
})

var app = express()

// Setup our static content middleware
// Add the /static prefix
app.use('/static', express.static(__dirname + '/public'))

// Set view engine to Jade and direct to src/templates w/ relative path
app.set('view engine', 'jade')
app.set('views', __dirname + '/views')

// Set up route for initial visit to the site
app.get('/', function (req, res) {
  var path = req.path
  // this is identical to res.render('index', {path: path})
  res.locals.path = path
  // We can pass index instead of index.jade since engine is set to Jade
  res.render('index')
})

// Route for our blog site. Use question mark to make param optional
app.get('/blog/:title?', function (req, res) {
  var title = req.params.title
  if (title === undefined) {
    // 503 to indicate to search engines under construction
    // res.status(503)
    console.log(postsList)

    res.render('blog', {posts: postsList})
  } else {
    // Use the || empty object convention to assign empty value if invalid blog requested
    var post = posts[title] || {}
    res.render('post', {post: post})
  }
})

// Set up the server (port 3000)
app.listen(3000, function () {
  console.log('Front-end server running on port 3000')
})
