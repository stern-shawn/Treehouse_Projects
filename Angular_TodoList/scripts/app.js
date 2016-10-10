angular.module("todoListApp", [])
.controller("mainCtrl", function ($scope) {
  $scope.helloWorld = function () {
    console.log("Hello, this is the hellowWorld controller function in mainCtrl!")
  }

  $scope.todos = [
    {"name": "clean the house"},
    {"name": "vaccum the rug"},
    {"name": "don't let the existential dread set in"},
    {"name": "lift heavy things"},
    {"name": "eat all the things"}
  ]
})
