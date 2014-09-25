app.controller("SetupController", function ($scope, $log, RootService, database, settings) {
    'use strict';
    $log.debug('SetupController Initialized');
    $scope.database = database;
    $log.debug("Selected Database:", $scope.database);
    $scope.settings = settings;

    $scope.addField = function () {
        $scope.settings.structure.push({});
    };

    $scope.saveSettings = function () {
        RootService.updateSettings($scope.database, $scope.settings).then(function () {
            $scope.$emit('updateDatabases');
        });
    };

    $scope.fieldTypes = [
        'text',
        'number',
        'date',
        'select',
        'checkbox'
    ];
});