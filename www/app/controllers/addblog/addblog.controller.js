angular.module('addblogs.module.controller', []).controller('addblogs.controller', function ($scope, $ionicHistory,$state) {
    $scope.images = [];

    $scope.addImage = function () {

        navigator.camera.getPicture(imageAddSuccess, imageAddFail, {
            quality: 50,
            destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
            mediaType: Camera.MediaType.PICTURE
        });
    }
    function imageAddSuccess(imageUrl) {
      
        $scope.images.push(imageUrl);
    }
    function imageAddFail(ex) {

       
    }
    $scope.addBlog = function (data) {
      
        var result={blog:data,image:$scope.images}
        localStorage.setItem("blogadded", JSON.stringify(result));
        var value = $ionicHistory.clearCache();
        value.then(function () {
            $state.go("dashboard");
        })
      
    }
})