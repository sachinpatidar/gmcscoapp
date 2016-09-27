angular.module('registration.module.controller', []).controller('registration.controller', function ($scope, $ionicPopover) {
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
   //$scope.show = function() {

   //    // Show the action sheet
   //    var hideSheet = $ionicActionSheet.show({
   //        buttons: [
   //          { text: '<button class="button button-block button-stable">Take Photo</button><button class="button button-block button-stable">Choose From Gallery</button>' },
   //        //  { text: '<button class="button button-block button-stable">Choose From Gallery</button>' }
   //        ],
           
   //        titleText: 'Choose',
   //        cancelText: 'Cancel',
   //        cancel: function() {
   //            // add cancel code..
   //        },
   //        buttonClicked: function (index) {
   //            if (index == 0)
   //            {
   //                $scope.takeFromCamera();
   //                hideSheet();
   //            }
   //            if (index == 1)
   //            {
   //                $scope.setProfilePicture();
   //                hideSheet();
   //            }
   //            return true;
   //        }
   //    });

   //    // For example's sake, hide the sheet after two seconds

   //};

   //var myPopup = $ionicPopup.show({
   //    template: '<div class="row"><button class="button button-block button-stable" data-ng-model="takeFromCamera()">take photo</button></div>' +
   //        '<div class="row"><button data-ng-model="setProfilePicture()">choose from library</button></div>',
   //    title: 'Enter Wi-Fi Password',
   //    subTitle: 'Please use normal things',
   //    scope: $scope,
   //    buttons: [
   //      { text: 'Cancel' },
   //      {
   //          text: '<b>Save</b>',
   //          type: 'button-positive',
   //          onTap: function (e) {
   //              if (!$scope.data.wifi) {
   //                  //don't allow the user to close unless he enters wifi password
   //                  e.preventDefault();
   //              } else {
   //                  return $scope.data.wifi;
   //              }
   //          }
   //      }
   //    ]
   //});
})