'use strict'

var express = require('express')
var app = express()

// Serve files in public to the route '/'
app.use('/', express.static('public'))

var router = express.Router()

// Add a todos route
router.get('/todos', function (req, res) {
  res.json({todos: []})
})

// TODO: Add POST route to create new entries

// TODO: Add PUT route to update existing entries

// TODO: Add DELETE route to delete entries

// Serve the /api namespace using the object router
// We'll use this namespace to avoid clashes with 'public's' routes
app.use('/api', router)

// Run server and listen to port 3000
app.listen(3000, function () {
  console.log('Server is running on port 3000')
})
