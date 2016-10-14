angular.module('login.module.controller', []).controller('login.controller', function ($scope, $state, httpServices, $ionicLoading) {
    $scope.authenticateUser = function (data) {
        $ionicLoading.show();
        httpServices.post('/LoginUser', data).then(function (response) {
            $ionicLoading.hide();
            toastr.success('success', 'Login Successfully');
           // $state.go('dashboard');
        }, function (error) {
            toastr.pop('failure', 'success', 'login successfully');

        })

    }
})