angular.module('main.module.controller', []).controller('main', function ($scope, $state, httpServices, $ionicLoading, ionicToast, $rootScope) {

    $rootScope.profilePicture = "img/classprofile.png";
    $scope.signOut = function () {
        $rootScope.loginStatus = false;
        $rootScope.profilePicture = "img/classprofile.png";
    }

    httpServices.get('/GetCategoryList/L').then(function (response) {
        $scope.values = response.data.GetCategoryListResult;
    }, function (error) {


    })

})