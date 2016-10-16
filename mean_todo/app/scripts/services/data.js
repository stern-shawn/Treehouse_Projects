'use strict'

var angular = require('angular')

angular.module('todoListApp')
// Include $q service to manage requests
.service('dataService', function ($http, $q) {
  this.getTodos = function (cb) {
    // Point this to our /api area
    $http.get('/api/todos').then(cb)
  }

  this.deleteTodo = function (todo) {
    console.log('I deleted the ' + todo.name + ' todo!')
  }

  this.saveTodos = function (todos) {
    // Establish a queue of requests
    var queue = []
    todos.forEach(function (todo) {
      var request
      if (!todo._id) {
        // If this todo doesn't have an id yet, post it to be put in DB
        // Syntax: $http.post('URL', 'Data to post)
        request = $http.post('/api/todos', todo)
      } else {
        // If this todo DOES have an id, put to update it in the DB
        // Syntax: $http.put('URL', 'Data to put')
        request = $http.put('/api/todos/' + todo._id, todo)
      }
      queue.push(request)
    })
    // $q returns a promise, so make sure to return it so the .finally() on
    // saveTodos has a promise to grab
    return $q.all(queue).then(function (results) {
      console.log('I saved ' + todos.length + ' todos!')
    })
  }
})
