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

// PUT route for updating todos
router.put('/todos/:id', function (req, res) {
  var id = req.params.id
  var todo = req.body

  if (todo && todo._id !== id) {
    return res.status(500).json({err: 'Ids don\'t match'})
  }
  // Syntax: id to look up entry, new data for entry, (optional options), callback
  Todo.findByIdAndUpdate(id, todo, {new: true}, function (err, todo) {
    if (err) {
      return res.status(500).json({err: err.message})
    }
    res.json({'todo': todo, message: 'Todo updated'})
  })
})

// DELETE route to remove a todo from the app AND the database
router.delete('/todos/:id', function (req, res) {
  var id = req.params.id

  Todo.findByIdAndRemove(id, function (err, result) {
    if (err) {
      return res.status(500).json({err: err.message})
    }
    res.json({message: 'Todo deleted...'})
  })
})

module.exports = router
