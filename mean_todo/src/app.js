'use strict'

var express = require('express')
var app = express()

// Serve files in public to the route '/'
app.use('/', express.static('public'))

// Run server and listen to port 3000
app.listen(3000, function () {
  console.log('Server is running on port 3000')
})
