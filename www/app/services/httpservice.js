angular.module('http.service.module', []).service('httpServices', [ '$q', '$http', function ( $q, $http) {

   
    var url = 'http://smartservicesapp.com/Service.svc';
  this.get=function(urlres){
      var q = $q.defer();
      $http.get(url+urlres).then(function (result) {
         
          q.resolve(result);
      }, function (error) {
          q.reject(error);
          alert(JSON.stringify(error));
      })
      return q.promise;
  }
  this.post = function (urlres, data) {
   
      var q = $q.defer();
      $http.post(url+urlres, data).then(function (result) {
          alert(JSON.stringify(result));
          q.resolve(result);
      }, function (error) {
          q.reject(error);
          alert(JSON.stringify(error));
      });
      return q.promise;
  }


}]);