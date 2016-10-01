'use strict'

// Import express module
var express = require('express'),
      posts = require('./mock/posts.json')
var app = express()

// Set view engine to Jade and direct to src/templates w/ relative path
app.set('view engine', 'jade')
app.set('views', __dirname + '/views')

// Set up route for initial visit to the site
app.get('/', function (req, res) {
  // We can pass index instead of index.jade since engine is set to Jade
  res.render('index')
})

// Route for our blog site. Use question mark to make param optional
app.get('/blog/:title?', function (req, res) {
  var title = req.params.title
  if (title === undefined) {
    // 503 to indicate to search engines under construction
    res.status(503)
    res.send('Page under construction!')
  } else {
    // Use the || empty object convention to assign empty value if invalid blog requested
    var post = posts[title] || {}
    res.render('post', { post: post })
  }
})

// Set up the server (port 3000)
app.listen(3000, function () {
  console.log('Front-end server running on port 3000')
})
