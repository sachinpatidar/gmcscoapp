angular.module('dashboard.module.controller', []).controller('dashboard.controller', function ($scope) {
   
    $scope.newBlog = JSON.parse(localStorage.getItem("blogadded"));
    
   
    
})