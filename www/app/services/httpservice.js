﻿angular.module('http.service.module', []).service('httpServices', ['$q', '$http', '$ionicLoading', function ($q, $http, $ionicLoading) {

   
    var url = 'http://smartservicesapp.com/Service.svc';
  this.get=function(urlres){
      var q = $q.defer();
      $ionicLoading.show();
      $http.get(url+urlres).then(function (result) {
         
          q.resolve(result);
          $ionicLoading.hide();
      }, function (error) {
          q.reject(error);
          alert(JSON.stringify(error));
      })
      return q.promise;
  }
  this.post = function (urlres, data) {
   
      var q = $q.defer();
      $ionicLoading.show();
      $http.post(url+urlres, data).then(function (result) {
          $ionicLoading.hide();
          q.resolve(result);
      }, function (error) {
          q.reject(error);
          alert(JSON.stringify(error));
      });
      return q.promise;
  }


}]);