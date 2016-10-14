'use strict'

var angular = require('angular')

angular.module('todoListApp')
.service('dataService', function ($http) {
  this.getTodos = function (cb) {
    // Point this to our /api area
    $http.get('/api/todos').then(cb)
  }

  this.deleteTodo = function (todo) {
    console.log('I deleted the ' + todo.name + ' todo!')
  }

  this.saveTodos = function (todos) {
    console.log('I saved ' + todos.length + ' todos!')
  }
})
