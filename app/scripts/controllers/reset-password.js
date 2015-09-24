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
  	 $scope.resetPassword = function () {
      // make API call only if the form is valid
      var token = $location.$$search.temp;
    authFactory.updateForgotPassword({ token : token, newPassword: $scope.cp.password }).then(function(response){
    		alert("password update sucessfully");
  			console.log(response);
  		});
    };

  });
