'use strict'

var express = require('express')
var app = express()
var router = require('./api')

// Require the database so it's available globally
require('./database')

// Serve files in public to the route '/'
app.use('/', express.static('public'))

// Serve the /api namespace using the object router
// We'll use this namespace to avoid clashes with 'public's' routes
app.use('/api', router)

// Run server and listen to port 3000
app.listen(3000, function () {
  console.log('Server is running on port 3000')
})
