'use strict';

angular.module('myApp.clients', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/clients', {
            templateUrl: 'clients/clients.html',
            controller: 'clientsCtrl'
        });
    }])

    .controller('clientsCtrl', function ($scope, clientService) {

      clientService.getClients().success(function (data) {
      $scope.clients = data;
      //console.log(data);
    }).
      error(function(data){
        $scope.clients = 'error!';
      })
    });
