angular.module('login.module.controller', []).controller('login.controller', function ($scope, $state, httpServices, $ionicLoading) {
    var count = 0;
    $scope.passhow = false;
    $scope.authenticateUser = function (data) {
        if (count == 0) {
            $scope.passhow = true;
            count++;
        }
        else {
            $ionicLoading.show();
            httpServices.post('/LoginUser', data).then(function (response) {
                $ionicLoading.hide();
                toastr.success('success', 'Login Successfully');
                // $state.go('dashboard');
            }, function (error) {
                toastr.pop('failure', 'success', 'login successfully');

            })

        }
    }
})