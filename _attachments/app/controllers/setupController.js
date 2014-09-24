app.controller("SetupController", function ($scope, $log, RootService, database, structure) {
    'use strict';
    $log.debug('SetupController Initialized');
    $scope.database = database;
    $log.debug("Selected Database:", $scope.database);
    $scope.structure = structure;

    $scope.addField = function () {
        $scope.structure.push({});
    };

    $scope.saveStructure = function () {
        RootService.updateStructure($scope.database, $scope.structure).then(function () {
            $scope.$emit('updateDatabases');
        });
    };

});