angular.module('main.module.controller', []).controller('main', function ($scope, $state, httpServices, $ionicLoading) {
    httpServices.get('/GetCategoryList/L').then(function (response) {
       

        $scope.values = response.data.GetCategoryListResult;
    }, function (error) {


    })

})