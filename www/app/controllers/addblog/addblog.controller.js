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
      
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            for (var i = 0; i < $scope.images.length; i++) {


                var fileURL = $scope.images[i];
                var options = new FileUploadOptions();
                options.fileKey = "file";
                options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
                options.mimeType = "text/plain";
                var ft = new FileTransfer();
                $ionicLoading.show();
                if (fileURL == null || fileURL == "") {

                }
                ft.upload(fileURL, encodeURI("http://smartservicesapp.com/BlogImagesUpload.ashx"), function (r) {
                    JSON.stringify(r);
                   
                }, function (error) {
                    alert("An error has occurred: Code = " + error.code);
                    alert("upload error source " + error.source);
                    alert("upload error target " + error.target);
                }, options);
            }
        }

        var result={blog:data,image:$scope.images}
        localStorage.setItem("blogadded", JSON.stringify(result));
        var value = $ionicHistory.clearCache();
        value.then(function () {
            $state.go("dashboard");
        })
      
    }
})