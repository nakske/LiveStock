'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'myApp.services',
    'myApp.view1',
    'myApp.view2'
])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', 'view1/view1.html')
          .otherwise({redirectTo: '/view1'});
    }]);


