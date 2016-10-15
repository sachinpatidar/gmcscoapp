angular.module('main.module.controller', []).controller('main', function ($scope, $state, httpServices, $ionicLoading, ionicToast, $rootScope) {


    $scope.signOut = function () {
        $rootScope.loginStatus = false;
    }

    httpServices.get('/GetCategoryList/L').then(function (response) {
       
       
        $scope.values = response.data.GetCategoryListResult;
    }, function (error) {


    })

})