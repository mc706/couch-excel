app.controller("DatabaseController", function ($scope, $log, database, settings, objects) {
    'use strict';
    $log.debug('DatabaseController Initialized');
    //initialized objects
    $scope.objects = objects;
    $log.debug("Objects:", $scope.objects);
    $scope.database = database;
    $scope.settings = settings;



});