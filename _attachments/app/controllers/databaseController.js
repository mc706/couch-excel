app.controller("DatabaseController", function ($scope, $log, database, objects) {
    'use strict';
    $log.debug('DatabaseController Initialized');
    //initialized objects
    $scope.objects = objects;
    $log.debug("Objects:", $scope.objects);
    $scope.database = database;


});