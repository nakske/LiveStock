'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', function ($scope, clientService) {

      clientService.getClients().success(function (data) {
      $scope.clients = data;
      //console.log(data);
    }).
      error(function(data){
        $scope.clients = 'error!';
      })
    });
