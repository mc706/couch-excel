app.controller("DetailController", function ($scope, $log, object) {
    'use strict';
    $log.debug('DetailController Initialized');
    $scope.object = object;
    $log.debug("Selected Object:", $scope.object);

});