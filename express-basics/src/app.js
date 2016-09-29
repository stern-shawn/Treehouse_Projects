'use strict'

// Import express module
var express = require('express'),
      posts = require('./mock/posts.json')
var app = express()

// Set up route for initial visit to the site
app.get('/', function (req, res) {
  res.send('<h1>Just getting started! App mastery loading...</h1>')
})

// Route for our blog site
app.get('/blog/:title', function (req, res) {
  var title = req.params.title
  var post = posts[title]
  res.send(post)
})

// Set up the server (port 3000)
app.listen(3000, function () {
  console.log('Front-end server running on port 3000')
})
