app.controller("GlobalController", function ($scope, $log, $location, $materialToast, RootService) {
    'use strict';
    $log.debug('GlobalController Initialized');

    $scope.go = function () {
        var args = Array.prototype.slice.call(arguments),
            url = "/" + args.join('/');
            $log.debug(url);
        $location.path(url);
    };

    $scope.getDatabases = function () {
        $log.debug('Get Databases Called');
        RootService.listDatabases().then(function (data) {
            $scope.databases = data;
        });
    };
    $scope.getDatabases();

    $scope.showToast = function ($event) {
        var hideToast = $materialToast({
            template: '<material-toast>Hello!</material-toast>',
            duration: 3000,
            position: 'top right'
        });
    };

    //Global listeners
    $scope.$on('updateDatabases', function (event) {
        $log.debug('updateDatabases event recieved');
        $scope.getDatabases();
    });
});