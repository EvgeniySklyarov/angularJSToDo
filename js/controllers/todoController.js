todoApp.controller('todoController', function ($scope, $filter) {
    
    $scope.todos = [];

    $scope.watch = function () {
        $scope.remainingCount = $filter('filter')($scope.todos, { completed: false }).length;
        $scope.completedCount = $scope.todos.length - $scope.remainingCount;

        var test = true;
        $scope.todos.forEach(function (todo) {
            if(!todo.completed) {
                test = false;
            }
        });

        if(test) {
            $('#toggle-all').prop('checked', true);
            $scope.allChecked = true;
        } else {
            $scope.allChecked = false;
        }
    };

    $scope.addTodo = function () {

        if (!$scope.newTodo.trim()) {
            return;
        }

        $scope.todos.push(
            {
                title: $scope.newTodo.trim(),
                completed: false,
                viewClass: 'show'
            }
        );
        $scope.watch();
        $scope.newTodo = '';
    };

    $scope.removeTodo = function (todo) {
        var i = $scope.todos.indexOf(todo);
        $scope.todos.splice(i, 1);
        $scope.watch();
    };

    $scope.markAll = function (allChecked) {
        $scope.todos.forEach(function (todo) {
            todo.completed = !allChecked;
        });
        $scope.watch();
    };

    $scope.clearCompletedTodos = function () {
        var incompletedTodos = [];

        $scope.todos.forEach(function (todo) {
            if (!todo.completed) {
                incompletedTodos.push(todo);
            }
        });
        $scope.todos = incompletedTodos;
        $scope.watch();
    };

    $scope.viewAllTodo = function () {
        $scope.todos.forEach(function (todo) {
            todo.viewClass = 'show';
        });
    };

    $scope.viewActiveTodo = function () {
        $scope.todos.forEach(function (todo) {
            todo.completed === false ? todo.viewClass = 'show' : todo.viewClass = 'hide';
        });
    };

    $scope.viewCompletedTodo = function () {
        $scope.todos.forEach(function (todo) {
            todo.completed === true ? todo.viewClass = 'show' : todo.viewClass = 'hide';
        });
    };
});