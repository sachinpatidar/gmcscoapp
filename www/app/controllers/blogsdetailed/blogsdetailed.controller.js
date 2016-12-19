angular.module('blogsdetailed.module.controller', []).controller('blogsdetailed.controller', function ($stateParams, $scope, $ionicSlideBoxDelegate, httpServices) {
  
     $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
  var BlogIDs = $stateParams.BlogId;
  $scope.convertDate = function (mydate) {
      var p = mydate;
      var g = parseInt(p.replace("/Date(", "").replace(")/", ""));
      return g;
  }

  httpServices.get('/GetBlogList/'+BlogIDs+'/'+null).then(function (response) {

      $scope.blogvalues = response.data.GetBlogListResult;
  }, function (error) {
  });
})