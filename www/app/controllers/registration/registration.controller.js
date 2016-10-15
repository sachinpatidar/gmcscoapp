angular.module('registration.module.controller', []).controller('registration.controller', function ($scope,ionicToast, $ionicPopover,$state, httpServices) {
    $scope.dataSrc = "img/classprofile.png"
    $scope.setProfilePicture = function () {
        $scope.popover.hide();
     
        
            navigator.camera.getPicture(profilePictureSuccess, profilePictureFail, {
                quality: 50,
                correctOrientation: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 2592,
                targeHeight: 4608,
                destinationType: navigator.camera.DestinationType.FILE_URI,
                sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
                mediaType: Camera.MediaType.PICTURE
            });
        
  }
  $scope.takeFromCamera = function () {
  
      $scope.popover.hide();
   
          navigator.camera.getPicture(profilePictureSuccess, profilePictureFail, {
              quality: 50,
             
              correctOrientation: true,
              destinationType: navigator.camera.DestinationType.FILE_URI,
              sourceType: navigator.camera.PictureSourceType.CAMERA,
          });
   
          
      
  }
  $scope.registerUser = function (data) {
   
      httpServices.post('/RegisterUser', data).then(function (response) {
        
          ionicToast.show('Successfully Registered', 'bottom', true, 2500);
          $state.go('dashboard');
      }, function (error) {

          ionicToast.show('Some error occured', 'bottom', true, 2500);
      })




  }
   function profilePictureSuccess(imageUrl) {
    
       document.getElementById('camera').src = imageUrl;
       document.getElementById('camera').height = 180;
       document.getElementById('camera').width = 180;
       $scope.dataSrc = imageUrl;
       
        
    }
   function profilePictureFail(ex) {
        alert('failed called' + JSON.stringify(ex));
   }
   var template = '<ion-popover-view style="height:100px; width:90%"><ion-content class="ion-contentColor dark-border"><div class="row"><div class="col text-center" data-ng-click="takeFromCamera()"><img src="img/1469647735_camera.ico"  height="77px" width="77px"/></div><div class="col text-center" data-ng-click="setProfilePicture()"><img src="img/1469647872_image.ico"  height="77px" width="77px"/></div></div> </ion-content></ion-popover-view>';

   $scope.popover = $ionicPopover.fromTemplate(template, {
       scope: $scope
   });
   $scope.openPopover = function ($event) {
       $scope.popover.show($event);
   };
   $scope.closePopover = function () {
       $scope.popover.hide();
   };
})