// Use only one arg to tell this module to search for existing app with name todoListApp
angular.module("todoListApp")
.directive('helloWorld', function () {
  return {
    template: "This is the hello world directive",
    // restict this directive to only work as an element
    restrict: "E"
  }
});