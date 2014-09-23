app.controller("NewController", function ($scope, $log, database) {
    'use strict';
    $log.debug('NewController Initialized');
    $scope.database = database;
    $log.debug("Selected Database:", $scope.database);

});