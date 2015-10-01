'use strict';

/**
 * @ngdoc function
 * @name clarionEnterpriseApp.controller:ForgotPasswordCtrl
 * @description
 * # ForgotPasswordCtrl
 * Controller of the clarionEnterpriseApp
 */
angular.module('clarionEnterpriseApp')
  .controller('ForgotPasswordCtrl', function ($scope,authFactory) {
 /**
     * $scope.forgotPassword
     * @param {object} forgotPasswordForm
     * this method calls AuthFactory service's forgotPassword()
     * if the form data is valid
     */
      $scope.vm = {
    'email' : ''
   };
    $scope.forgotpassword = function () {
      // make API call only if the form is valid
    authFactory.forgotPassword($scope.vm.email).then(function(response){
      
     console.log(response);
    });
    };
  });
