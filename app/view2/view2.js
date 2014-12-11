'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope, AccAPIservice) {
   /* $scope.nameFilter = null;
    $scope.driversList = [];
    $scope.searchFilter = function (driver) {
      var re = new RegExp($scope.nameFilter, 'i');
      return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
    };*/


    AccAPIservice.getClients().success(function (data) {
      $scope.clientsList = data;
      console.log(data);
    }).
    error(function(data){
        $scope.clientsList = 'error!';
      })
    ;
  });

