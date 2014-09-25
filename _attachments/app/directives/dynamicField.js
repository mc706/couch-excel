app.directive('dynamicField', function ($compile) {
    "use strict";
    return {
        restrict: "E",
        templateUrl: 'app/directives/dynamic-field.html'/*,
        link: function(scope) {
            //scope.localModel = scope.serverNameModel();

            // bind from ei-server -> parent
            scope.$watch('localModel', function(value) {
                scope.serverNameModel(value);
            });

            // bind from parent -> ei-server
            scope.$watch(function() {return scope.serverNameModel()}, function(value) {
                scope.localModel = value;
                });
        }*/
    };
});