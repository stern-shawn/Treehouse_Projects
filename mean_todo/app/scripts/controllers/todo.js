'use strict'

var angular = require('angular')

angular.module('todoListApp')
.controller('todoCtrl', function ($scope, dataService) {
  $scope.deleteTodo = function (todo) {
    // Wrong method from treehouse: use the $index value, which doesn't change
    // after the todo item is first made...
    // $scope.todos.splice(index, 1)
    // Fixed method, use indexOf to get the current location in the todos list
    $scope.todos.splice($scope.todos.indexOf(todo), 1)
    dataService.deleteTodo(todo)
  }

  $scope.saveTodos = function () {
    var filteredTodos = $scope.todos.filter(function (todo) {
      if (todo.edited) {
        return todo
      }
    })
    dataService.saveTodos(filteredTodos)
  }
})
