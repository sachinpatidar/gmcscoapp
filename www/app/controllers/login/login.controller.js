angular.module('login.module.controller', []).controller('login.controller', function ($scope, $state, httpServices, ionicToast, $rootScope, $ionicHistory) {
    var count = 0;
    $scope.passhow = false;
    $scope.authenticateUser = function (data) {
        if (count == 0) {
            $scope.passhow = true;
            count++;
        }
        else {
         
            httpServices.post('/LoginUser', data).then(function (response) {
                if (response.data.Source != 0) {
                    ionicToast.show(response.data.Success, 'bottom', false, 2500);
                    $rootScope.loginStatus = true;
                    alert(JSON.stringify(response));
                    $ionicHistory.clearHistory();
                    $state.go('dashboard');
                }
                else {
                    ionicToast.show(response.data.Success, 'bottom', false, 2500);
                    $scope.$apply(function () {
                        $scope.data.UserName = '';
                        $scope.data.Password = '';
                    });
                    
                }
            }, function (error) {
                ionicToast.show('Login failed', 'top', false, 2500);

            })

        }
    }
})