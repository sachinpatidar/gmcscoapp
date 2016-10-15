angular.module('dashboard.module.controller', []).controller('dashboard.controller', function ($scope, $ionicHistory) {
   
    $ionicHistory.clearHistory();

    $scope.newBlog = JSON.parse(localStorage.getItem("blogadded"));
    
   
    
})