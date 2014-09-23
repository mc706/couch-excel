app.service('RootService', function ($http, $q) {
    "use strict";
    return {
        listDatabases: function () {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: '/_all_dbs/'
            }).success(function (data, status, headers, config) {
                defer.resolve(data);
            }).error(function (data, status, headers, config) {
                defer.reject(status);
            });
            return defer.promise;
        },
        checkHealth: function () {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: '/'
            }).success(function (data, status, headers, config) {
                defer.resolve(data);
            }).error(function (data, status, headers, config) {
                defer.reject(status);
            });
            return defer.promise;
        },
        createDatabase: function (name) {
            var defer = $q.defer();
            $http({
                method: 'PUT',
                url: '/' + name
            }).success(function (data, status, headers, config) {
                defer.resolve(data);
            }).error(function (data, status, headers, config) {
                defer.reject(status);
            });
            return defer.promise;
        },
        deleteDatabase: function (name) {
            var defer = $q.defer();
            $http({
                method: 'DELETE',
                url: '/' + name
            }).success(function (data, status, headers, config) {
                defer.resolve(data);
            }).error(function (data, status, headers, config) {
                defer.reject(status);
            });
            return defer.promise;
        },
        getUUID: function (amount) {
            var defer = $q.defer(),
                url = +amount > 1 ? '/_uuids?count=' + amount : '/_uuids';
            $http({
                method: 'GET',
                url: url
            }).success(function (data, status, headers, config) {
                defer.resolve(data);
            }).error(function (data, status, headers, config) {
                defer.reject(status);
            });
            return defer.promise;
        }

    };
});