app.directive('dynamicField', function ($compile) {
    "use strict";
    return {
        restrict: "E",
        scope: false,
        templateUrl: 'app/directives/dynamic-field.html'
    };
});