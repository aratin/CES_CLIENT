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
  	 $scope.changepassword = function () {
      // make API call only if the form is valid
    var userData =JSON.parse(sessionStorage.getItem('userData'));    
    authFactory.changePassword({email:userData.data['email'], password: $scope.cp.currentpassword, newPassword: $scope.cp.password }).then(function(response){
    		alert("password change sucessfully");
  			console.log(response);
  		});
    };
  });
