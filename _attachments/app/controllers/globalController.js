app.controller("GlobalController", function ($scope, $log, $location, $materialToast, RootService) {
    'use strict';
    $log.debug('GlobalController Initialized');

    $scope.go = function (section) {
        var url;
        switch (section) {
            case "home":
                url = "/";
                break;
            case "database":
                url = "/database/" + arguments[1];
                break;
            case "setup":
                url = "/database/" + arguments[1] + '/setup';
                break;
            case "reports":
                url = "/database/" + arguments[1] + '/reports';
                break;
        }
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