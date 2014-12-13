'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'myApp.services',
    'myApp.clients',
    'myApp.view2',
    'myApp.home',
    'myApp.cattle',
])
/*
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
*/

