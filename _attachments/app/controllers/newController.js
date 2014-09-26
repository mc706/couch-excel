app.controller("NewController", function ($scope, $log, database, settings) {
    'use strict';
    $log.debug('NewController Initialized');
    $scope.database = database;
    $log.debug("Selected Database:", $scope.database);
    $scope.settings = settings;



});