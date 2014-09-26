var app = angular.module("couch-excel", ['ngCookies', 'ngRoute', 'ngAnimate', 'ngMaterial', "highcharts-ng", "ui.bootstrap", "ui.utils"]);

app.config(function ($logProvider) {
    "use strict";
    //Enables Debug when ?debug=1&password=*password*
    var password = "f48b9001e3972038d687a3dac8ebe8f9",
        querystring = (window.location.search ? window.location.search.substring(1) :
                window.location.hash.indexOf('?') !== -1 ? window.location.hash.split('?')[1] : ""),
        params = {};
    angular.forEach(querystring.split('&'), function (pair) {
        params[pair.split('=')[0]] = pair.split('=')[1];
    });
    $logProvider.debugEnabled(false);
    if (params.hasOwnProperty('debug') && params.hasOwnProperty('password')) {
        if (params.debug && md5(params.password) === password) {
            $logProvider.debugEnabled(true);
            console.info("Logging Enabled");
        }
    }
});

app.config(function ($routeProvider) {
    "use strict";
    $routeProvider.when('/',
        {
            controller: 'HomeController',
            templateUrl: 'app/views/home.html'
        })
        .when('/database/:database/',
        {
            controller: 'DatabaseController',
            templateUrl: 'app/views/list.html',
            resolve: {
                objects: function (DatabaseService, $route) {
                    var database = $route.current.params.database;
                    return DatabaseService.listData(database);
                },
                database: function ($route) {
                    return $route.current.params.database;
                },
                settings: function (RootService, $route) {
                    var database = $route.current.params.database;
                    return RootService.getSettings(database);
                }
            }
        })
        .when('/database/:database/reports',
        {
            controller: 'ReportController',
            templateUrl: 'app/views/report.html',
            resolve: {
                database: function ($route) {
                    return $route.current.params.database;
                }
            }
        })
        .when('/database/:database/setup',
        {
            controller: 'SetupController',
            templateUrl: 'app/views/setup.html',
            resolve: {
                database: function ($route) {
                    return $route.current.params.database;
                },
                settings: function (RootService, $route) {
                    var database = $route.current.params.database;
                    return RootService.getSettings(database);
                }
            }
        })
        .when('/database/:database/new',
        {
            controller: 'NewController',
            templateUrl: 'app/views/new.html',
            resolve: {
                database: function ($route) {
                    return $route.current.params.database;
                }
            }
        })
        .when('/database/:database/detail/:id',
        {
            controller: 'DetailController',
            templateUrl: 'app/views/detail.html',
            resolve: {
                object: function(DatabaseService, $route) {
                    var database = $route.current.params.database,
                        id = $route.current.params.id;
                    return DatabaseService.getData(database, id);
                }
            }
        })
        .otherwise({redirectTo: '/'});
});