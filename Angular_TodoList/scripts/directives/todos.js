'use strict'

angular.module('todoListApp')
.directive('todos', function() {
  return {
    templateUrl: 'templates/todos.html',
    controller: 'mainCtrl',
    // This only exists if you want to see <div> tags instead of <todo> tags in final html output
    replace: true
  }
})
