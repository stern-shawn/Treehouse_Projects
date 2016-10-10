angular.module("todoListApp", [])
.controller("mainCtrl", function ($scope, dataService) {
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

  $scope.saveTodo = function (todo) {
    dataService.saveTodo(todo)
  }
})
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

  this.saveTodo = function (todo) {
    console.log(todo.name + " has been added")
    // Logic to actually add to the server
  }
})
