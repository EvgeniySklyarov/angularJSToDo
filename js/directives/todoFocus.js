todoApp.directive('todoFocus', function todoFocus($timeout) {

    return function (scope, elem, attrs) {
        scope.$watch(attrs.todoFocus, function () {
                $timeout(function () {
                    elem[0].focus();
                });
        });
    };

});