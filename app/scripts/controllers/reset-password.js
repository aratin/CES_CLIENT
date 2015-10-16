'use strict';

/**
 * @ngdoc function
 * @name clarionEnterpriseApp.controller:ResetPasswordCtrl
 * @description
 * # ResetPasswordCtrl
 * Controller of the clarionEnterpriseApp
 */
angular.module('clarionEnterpriseApp')
  .controller('ResetPasswordCtrl',function ($scope,authFactory,$location) {  		

     $scope.vm = {
        email : '',
        message: "",
        flag: false,
        successFlag:false,
        showLoader : false
     };
  	 $scope.resetPassword = function () {
      $scope.vm.showLoader = true;
      // make API call only if the form is valid
      $scope.pw1 = 'password';
      var token = $location.$$search.temp;
       authFactory.updateForgotPassword({ token : token, newPassword: $scope.pw1 }).then(function(response){
    	  $scope.vm.showLoader = false;
        if(response.success) {
           $scope.vm.flag= false;
           $scope.vm.successFlag=true;
           $scope.vm.message = response.data.message;
            $scope.pw1= '';
            $scope.pw2= '';
          
        } else {
            $scope.vm.flag= true;
            $scope.vm.successFlag=false;
            $scope.vm.message = response.message;
        }
  			console.log(response);
  		});
    };

  });
