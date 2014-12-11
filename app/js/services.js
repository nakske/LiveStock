/*angular.module('myApp.services', []).factory('clientService', ['$http', function($http) {

  return {
    // call to get all clients
    get : function() {
      return $http.get('http://localhost:3000/clients');
    },


    create : function(clientData) {
      return $http.post('http://localhost:3000/clients', clientData);
    },

    delete : function(id) {
      return $http.delete('http://localhost:3000/clients/' + id);
    }
  }

}]);*/



angular.module('myApp.services', [])
  .factory('clientService', function($http) {

    var clientAPI = {};
/*
    clientAPI.getDrivers = function() {
      console.log('AccAPI.getClients entered');
      return $http({
        method: 'JSONP',
        url: 'http://ergast.com/api/f1/2014/driverStandings.json?callback=JSON_CALLBACK'
      });
    }
*/
    clientAPI.getClients = function() {

      return $http({
        method: 'GET',
        url: 'http://localhost:3000/clients'
      });
    };

    return clientAPI;
  });



