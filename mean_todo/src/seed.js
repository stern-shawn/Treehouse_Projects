'use strict'

var Todo = require('./models/todo.js')

// Generate some todos
var todos = [
  'Feed the dog',
  'Walk the tree',
  'Water the kids',
  'Do not let the existential dread set in'
]

todos.forEach(function (todo, index) {
  Todo.find({'name': todo}, function (err, todos) {
    // If no todo with this name, create a new one that is uncompleted
    if (!err && !todos.length) {
      Todo.create({completed: false, name: todo})
    }
  })
})
