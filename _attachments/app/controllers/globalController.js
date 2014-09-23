app.controller("GlobalController", function ($scope, $log, $location, $materialToast, RootService) {
    'use strict';
    $log.debug('GlobalController Initialized');

    $scope.go = function (url) {
        $location.path(url);
    };

    RootService.listDatabases().then(function (data) {
        $scope.databases = data;
    });

    $scope.showToast = function ($event) {
        var hideToast = $materialToast({
            template: '<material-toast>Hello!</material-toast>',
            duration: 3000,
            position: 'top right'
        });
    };
});