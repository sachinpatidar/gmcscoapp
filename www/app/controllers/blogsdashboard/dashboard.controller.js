angular.module('dashboard.module.controller', []).controller('dashboard.controller', function ($scope, $ionicHistory) {
   
  
  
   
    $ionicHistory.clearCache();
    $ionicHistory.clearHistory();
    $ionicHistory.removeBackView();
  //  $scope.gh = $ionicHistory.backView();
   // $scope.gh.canSwipeBack = false;
 //   alert(JSON.stringify($scope.gh));
    $scope.newBlog = JSON.parse(localStorage.getItem("blogadded"));
    
   
    
})