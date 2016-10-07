angular.module("todoListApp", [])
.controller("mainCtrl", function ($scope) {
  $scope.helloWorld = function () {
    console.log("Hello, this is the hellowWorld controller function in mainCtrl!")
  }
})
