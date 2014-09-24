app.controller("HomeController", function ($scope, $log, RootService) {
    'use strict';
    $log.debug('HomeController Initialized');

    $scope.submitNewDatabase = function (isValid) {
        $log.debug('newDatabase Called');
        $scope.submitted = true;
        if (isValid) {
            $log.debug('Form Submission Valid');
            RootService.createDatabase($scope.newDatabase.name).then(function (data) {
                $scope.newDatabase = {};
                $scope.NewDatabaseForm.$setPristine();
                $scope.submitted = false;
                $scope.$emit('updateDatabases');
            });
        } else {
            $log.debug('Form Submission Invalid');
        }
    };

    $scope.deleteDatabase = function (name) {
        $log.debug('deleteDatabase Called');
        RootService.deleteDatabase(name).then(function (data) {
            $scope.$emit('updateDatabases');
        });
    };
});