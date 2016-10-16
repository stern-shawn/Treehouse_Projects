'use strict'

var angular = require('angular')

angular.module('todoListApp')
.controller('todoCtrl', function ($scope, dataService) {
  $scope.deleteTodo = function (todo) {
    // Wrong method from treehouse: use the $index value, which doesn't change
    // after the todo item is first made...
    // $scope.todos.splice(index, 1)
    // Fixed method, use indexOf to get the current location in the todos list
    dataService.deleteTodo(todo).finally(function () {
      // Updating to only visibly remove from front-end once removal promise
      // comes back as successful
      $scope.todos.splice($scope.todos.indexOf(todo), 1)
    })
  }

  $scope.saveTodos = function () {
    var filteredTodos = $scope.todos.filter(function (todo) {
      if (todo.edited) {
        return todo
      }
    })
    // Use .finally to call the reset, since $q returns a promise
    dataService.saveTodos(filteredTodos)
    .finally($scope.resetTodoState())
  }

  // If we're saving the edited todos, remove the edited state once saved
  $scope.resetTodoState = function () {
    $scope.todos.forEach(function (todo) {
      todo.edited = false
    })
  }
})
