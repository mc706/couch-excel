app.controller("SetupController", function ($scope, $log, database, settings) {
    'use strict';
    $log.debug('SetupController Initialized');
    $scope.database = database;
    $log.debug("Selected Database:", $scope.database);
    $scope.settings  = settings;

});