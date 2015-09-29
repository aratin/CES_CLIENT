'use strict';

/**
 * @ngdoc function
 * @name clarionEnterpriseApp.controller:ChangePasswordCtrl
 * @description
 * # ChangePasswordCtrl
 * Controller of the clarionEnterpriseApp
 */
angular.module('clarionEnterpriseApp')
  .controller('ChangePasswordCtrl', function ($scope,authFactory,$location) {
  	 $scope.changePassword = function () {
      // make API call only if the form is valid
    authFactory.changePassword({password: $scope.cp.currentpassword, newPassword: $scope.cp.password }).then(function(response){
    		alert("password change sucessfully");
  			console.log(response);
  		});
    };
  });
