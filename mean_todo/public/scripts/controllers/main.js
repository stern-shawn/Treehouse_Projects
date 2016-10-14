'use strict';

angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService){

  dataService.getTodos(function(response){
    // Due to different formatting of the object, todos data is in
    // response.data.todos instead of just response.data like before
    var todos = response.data.todos;
    $scope.todos =  todos;
    });

  $scope.addTodo = function() {
    $scope.todos.unshift({name: "This is a new todo.",
                      completed: false});
  };

})
