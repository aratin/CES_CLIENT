'use strict';

/**
 * @ngdoc function
 * @name clarionEnterpriseApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clarionEnterpriseApp
 */
angular.module('clarionEnterpriseApp').controller('LoginCtrl', function ($scope,$window,$compile,authFactory,$http,$location) {

    $scope.vm = {
        message: "",
        flag: false,
        email: '',
        password:'',
        showLoader : false
    };  
  
  /** @method $scope.signIn
  * @param {object} form
  * this method logs in user (if form is valid)
  * by calling AuthFactory service's login()
  */
 
	$scope.login = function () {
  $scope.vm.showLoader = true;
    var param ={
        email : $scope.vm.email,
        password :$scope.vm.password
    };

    authFactory.login(param).then(function (response){
      $scope.vm.showLoader = false;
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

/*exicuite on login with google success or faliure */
 $scope.$on('event:google-plus-signin-success', function (authResult) {
      console.log("Got login response");
       
       authFactory.loginWithGoogle("access_token="+authResult.access_token).then(function (response){
        if(response.success && response.data && angular.equals(response.data.email,$scope.vm.email)) {
            sessionStorage.setItem("userData", JSON.stringify(response));
            $location.url("/dashboard");
        } else {
            $scope.vm.flag= true;
            $scope.vm.message = response.message;
        }   

    });

  });
  $scope.$on('event:google-plus-signin-failure', function (event,
    authResult) {
    console.log("Failed to login with google");
     // $scope.vm.flag= true;
     // $scope.vm.message = "Failed to login with google";
  });

  function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
  }



$scope.signIn = function(authResult) {
  $scope.$apply(function() {
    $scope.processAuth(authResult);
  });
}

$scope.processAuth = function(authResult) {
  $scope.immediateFailed = true;
  if ($scope.isSignedIn) {
    return 0;
  }
  if (authResult['access_token']) {
    $scope.immediateFailed = false;
    // Successfully authorized, create session
    PhotoHuntApi.signIn(authResult).then(function(response) {
      $scope.signedIn(response.data);
    });
  } else if (authResult['error']) {
    if (authResult['error'] == 'immediate_failed') {
      $scope.immediateFailed = true;
    } else {
      console.log('Error:' + authResult['error']);
    }
  }
}

$scope.renderSignIn = function() {
  gapi.signin.render('myGsignin', {
    'callback': $scope.signIn,
    'clientid': Conf.clientId,
    'requestvisibleactions': Conf.requestvisibleactions,
    'scope': Conf.scopes,
    'apppackagename': 'your.photohunt.android.package.name',
    'theme': 'dark',
    'cookiepolicy': Conf.cookiepolicy,
    'accesstype': 'offline'
  });
}

//   $scope.googleSignin = function (authResult) {
  
//     authFactory.loginWithGoogle("access_token="+authResult.access_token).then(function (response){
//         if(response.success && response.data && angular.equals(response.data.email,$scope.vm.email)) {
//             sessionStorage.setItem("userData", JSON.stringify(response));
//             $location.url("/dashboard");
//         } else {
//             $scope.vm.flag= true;
//             $scope.vm.message = response.message;
//         }   

//     });

//   // };

 });

