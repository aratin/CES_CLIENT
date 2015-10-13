'use strict';

/**
 * @ngdoc function
 * @name clarionEnterpriseApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clarionEnterpriseApp
 */
angular.module('clarionEnterpriseApp').controller('LoginCtrl', function ($scope,$window,$compile,authFactory,$location) {

    $scope.vm = {
        message: "",
        flag: false,
        email: '',
        password:'' 
    };  
  
  /** @method $scope.signIn
  * @param {object} form
  * this method logs in user (if form is valid)
  * by calling AuthFactory service's login()
  */
 
	$scope.login = function () {
  
    var param ={
        email : $scope.vm.email,
        password :$scope.vm.password
    };

    authFactory.login(param).then(function (response){
      console.log(response);
        if(response.success && response.data && angular.equals(response.data.email,$scope.vm.email)) {
            sessionStorage.setItem("userData", JSON.stringify(response));
            $location.url("/dashboard");
        } else {
            $scope.vm.flag= true;
            $scope.vm.message = response.message;
        }   

    });

  };


  $scope.logonWithGoogle = function () {

      var left = screen.width / 2 - 200, top = screen.height / 2 - 250
      $window.open('https://accounts.google.com/o/oauth2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.login%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.profile.emails.read&response_type=code&client_id=857178447138-of31mlrjlnb2t2plul2m05hfb4vpkuql.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Foauth2callback', '', "top=" + top + ",left=" + left + ",width=400,height=500")
  
  };

  $scope.logout = function () {
  
    

    authFactory.logout(param).then(function (response){
      console.log(response);
        if(response.success && response.data && angular.equals(response.data.email,$scope.vm.email)) {
            sessionStorage.setItem("userData", null);
            $location.url("/dashboard");
        } else {
           
        }   

    });

  };




});


// var test = angular.module('clarionEnterpriseApp', []);


// test.controller('LoginCtrl', ['$compile', '$scope','$window', function($compile, $scope, $window) {
//     $scope.openChildWindow = function () {
//       var left = screen.width / 2 - 200, top = screen.height / 2 - 250
//       $window.open('http://www.aspdotnet-suresh.com', '', "top=" + top + ",left=" + left + ",width=400,height=500")
//     }

//   }]);

// 		