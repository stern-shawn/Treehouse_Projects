angular.module("todoListApp", [])
.controller("mainCtrl", function ($scope) {
  $scope.learningNgChange = function () {
    console.log("An input changed!")
  }

  $scope.todos = [
    {"name": "clean the house"},
    {"name": "vaccum the rug"},
    {"name": "don't let the existential dread set in"},
    {"name": "lift heavy things"},
    {"name": "eat all the things"}
  ]
})
