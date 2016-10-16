'use strict'

var express = require('express')
// Import Todo model instead of using mock data
var Todo = require('../models/todo')
// var todos = require('../../mock/todos.json')

var router = express.Router()

// Add a todos GET route
router.get('/todos', function (req, res) {
  Todo.find({}, function (err, todos) {
    if (err) {
      return res.status(500).json({message: err.message})
      // return console.log(err)
    }
    res.json({todos: todos})
  })
})

// POST route for the todos page
router.post('/todos', function (req, res) {
  var todo = req.body
  Todo.create(todo, function (err, todo) {
    if (err) {
      return res.status(500).json({err: err.message})
    }
    res.json({'todo': todo, message: 'Todo created'})
  })
})
// TODO: Add PUT route to update existing entries

// TODO: Add DELETE route to delete entries

module.exports = router
