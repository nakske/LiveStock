'use strict';

angular.module('myApp.cattle', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/cattle', {
            templateUrl: 'cattle/cattle.html',
            controller: 'cattleCtrl'
        });
    }])

    .controller('cattleCtrl', function ($scope) {

    });
