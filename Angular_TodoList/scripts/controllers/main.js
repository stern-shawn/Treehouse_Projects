'use strict'

angular.module('todoListApp')
.controller("mainCtrl", function ($scope, dataService) {
  $scope.addTodo = function () {
    var todo = {name: "This is a new todo."}
    // Change push to unshift so new items are added to top of list
    $scope.todos.unshift(todo);
  }

  $scope.helloConsole = dataService.helloConsole

  $scope.learningNgChange = function () {
    console.log("An input changed!")
  }

  dataService.getTodos(function (response) {
    console.log(response.data)
    $scope.todos = response.data
  })

  $scope.deleteTodo = function (todo, index) {
    dataService.deleteTodo(todo)
    // Use the .splice method to remove one element at the given index (delete the todo item)
    $scope.todos.splice(index, 1)
  }

  $scope.saveTodos = function() {
    var filteredTodos = $scope.todos.filter(function(todo) {
      return todo.edited === true
    })
    dataService.saveTodos(filteredTodos)
  };})
