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
        successFlag:false
     };
  	 $scope.resetPassword = function () {
      // make API call only if the form is valid
      var token = $location.$$search.temp;
       authFactory.updateForgotPassword({ token : token, newPassword: $scope.cp.password }).then(function(response){
    	
        if(response.success) {
           $scope.vm.flag= false;
           $scope.vm.successFlag=true;
           $scope.vm.message = response.data.message;
          
        } else {
            $scope.vm.flag= true;
            $scope.vm.successFlag=false;
            $scope.vm.message = response.message;
        }
  			console.log(response);
  		});
    };

  });
