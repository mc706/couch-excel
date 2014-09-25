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

    $scope.collapse = {};
    angular.forEach($scope.settings.structure, function (field) {
       $scope.collapse[field.name] = false;
    });

    $scope.removeField = function (index) {
        $scope.settings.structure.splice(index, 1);
    };
});