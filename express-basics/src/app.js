'use strict'

// Import express module
var express = require('express')
var app = express()

// Set up route for initial visit to the site
app.get('/', function (request, response) {
  response.send('Just getting started!')
})

// Set up the server (port 3000)
app.listen(3000)
