'use strict'

var angular = require('angular')

angular.module('todoListApp')
.controller('mainCtrl', function ($scope, $log, $interval, dataService) {
  $scope.seconds = 0

  $scope.counter = function () {
    $scope.seconds++
    $log.log($scope.seconds + ' seconds have passed!')
  }

  // Syntax: callback to be exectued, delay in ms, # of iterations (optional)
  $interval($scope.counter, 1000, 10)

  dataService.getTodos(function (response) {
    // Due to different formatting of the object, todos data is in
    // response.data.todos instead of just response.data like before
    var todos = response.data.todos
    $scope.todos = todos
  })

  $scope.addTodo = function () {
    $scope.todos.unshift({name: 'This is a new todo.', completed: false})
  }
})
