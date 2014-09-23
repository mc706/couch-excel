app.service('DatabaseService', function ($http, $q, RootService) {
    "use strict";
    return {
        listData: function (database) {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: '/' + database + '/'
            }).success(function (data, status, headers, config) {
                defer.resolve(data);
            }).error(function (data, status, headers, config) {
                defer.reject(status);
            });
            return defer.promise;
        },
        createData: function (database, data) {
            var defer = $q.defer(),
                uuid = RootService.getUUID();
            $http({
                method: 'PUT',
                url: '/' + database + '/' + uuid,
                data: data
            }).success(function (data, status, headers, config) {
                defer.resolve(data);
            }).error(function (data, status, headers, config) {
                defer.reject(status);
            });
            return defer.promise;
        },
        getData: function (database, id) {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: '/' + database + '/' + id
            }).success(function (data, status, headers, config) {
                defer.resolve(data);
            }).error(function (data, status, headers, config) {
                defer.reject(status);
            });
            return defer.promise;
        },
        updateData: function (database, data) {
            var defer = $q.defer();
            $http({
                method: 'PUT',
                url: '/' + database + '/' + data._id,
                data: data
            }).success(function (data, status, headers, config) {
                defer.resolve(data);
            }).error(function (data, status, headers, config) {
                defer.reject(status);
            });
            return defer.promise;
        },
        deleteData: function (database, data) {
            var defer = $q.defer();
            $http({
                method: 'DELETE',
                url: '/' + database + '/' + data._id,
                data: data
            }).success(function (data, status, headers, config) {
                defer.resolve(data);
            }).error(function (data, status, headers, config) {
                defer.reject(status);
            });
            return defer.promise;
        }
    };
});