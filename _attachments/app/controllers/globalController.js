app.controller("GlobalController", function ($scope, $log, $location) {
    'use strict';
    $log.debug('GlobalController Initialized');

    $scope.go = function (url) {
        $location.path(url);
    };
});