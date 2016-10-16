webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var angular = __webpack_require__(1)

	angular.module('todoListApp', [])

	__webpack_require__(3)
	__webpack_require__(4)
	__webpack_require__(5)
	__webpack_require__(6)


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var angular = __webpack_require__(1)

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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var angular = __webpack_require__(1)

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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var angular = __webpack_require__(1)

	angular.module('todoListApp')
	.directive('todo', function () {
	  return {
	    templateUrl: 'templates/todo.html',
	    replace: true,
	    controller: 'todoCtrl'
	  }
	})


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var angular = __webpack_require__(1)

	angular.module('todoListApp')
	// Include $q service to manage requests
	.service('dataService', function ($http, $q) {
	  this.getTodos = function (cb) {
	    // Point this to our /api area
	    $http.get('/api/todos').then(cb)
	  }

	  // Send a $http.delete request for this todo if it has a MongoDB id
	  this.deleteTodo = function (todo) {
	    if (!todo._id) {
	      return $q.resolve()
	    }
	    return $http.delete('/api/todos/' + todo._id).then(function () {
	      console.log('Todo: ' + todo.name + ' deleted from todos!')
	    })
	  }

	  this.saveTodos = function (todos) {
	    // Establish a queue of requests
	    var queue = []
	    todos.forEach(function (todo) {
	      var request
	      if (!todo._id) {
	        // If this todo doesn't have an id yet, post it to be put in DB
	        // Syntax: $http.post('URL', 'Data to post)
	        request = $http.post('/api/todos', todo)
	      } else {
	        // If this todo DOES have an id, put to update it in the DB
	        // Syntax: $http.put('URL', 'Data to put')
	        request = $http.put('/api/todos/' + todo._id, todo)
	      }
	      queue.push(request)
	    })
	    // $q returns a promise, so make sure to return it so the .finally() on
	    // saveTodos has a promise to grab
	    return $q.all(queue).then(function (results) {
	      console.log('I saved ' + todos.length + ' todos!')
	    })
	  }
	})


/***/ }
]);