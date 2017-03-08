angular.module('blogsdetailed.module.controller', []).controller('blogsdetailed.controller', function ($stateParams, $scope, $ionicSlideBoxDelegate) {
  
     $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };


})