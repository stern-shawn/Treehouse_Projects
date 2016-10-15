'use strict'

var mongoose = require('mongoose')

// Set up connection to MongoDB using mongoose
mongoose.connect('mongodb://localhost/mean-todo', function (err) {
  if (err) {
    console.log('Failed connecting to MongoDB')
  } else {
    console.log('Connected to MongoDB')
  }
})
