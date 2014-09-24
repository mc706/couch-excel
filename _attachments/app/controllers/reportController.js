app.controller("ReportController", function ($scope, $log, database) {
    'use strict';
    $log.debug('ReportController Initialized');
    $scope.database = database;
    $log.debug("Selected Database:", $scope.database);

});