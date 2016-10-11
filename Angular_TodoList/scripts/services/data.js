'use strict'

angular.module('todoListApp')
.service('dataService', function ($http) {
  this.helloConsole = function () {
    console.log('This is the hello console service')
  }

  this.getTodos = function (callback) {
    $http.get('mock/todos.json')
    .then(callback)
  }

  this.deleteTodo = function (todo) {
    console.log(todo.name + " has been deleted")
    // Logic to actually remove from the server
  }

  this.saveTodos = function(todos) {
    console.log(todos.length + " todos have been saved!");
    // Logic to actually add to the server
  }
})
