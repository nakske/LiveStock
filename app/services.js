/**
 * Created by Bart on 29/11/14.
 */

angular.module('myApp.services', [])
  .factory('AccAPIservice', function($http) {

    var AccAPI = {};

    AccAPI.getDrivers = function() {
      return $http({
        method: 'JSONP',
        url: 'http://ergast.com/api/f1/2014/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    AccAPI.getClients = function() {

      return $http({
        method: 'GET',
        url: 'http://localhost:3000/clients'
      });
    }

    return AccAPI;
  });
