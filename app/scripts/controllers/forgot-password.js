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
      email : '',
      message: "",
      flag: false,
      successFlag:false,
      showLoader : false
     };
  
    $scope.forgotpassword = function () {
      $scope.vm.showLoader = true;
      // make API call only if the form is valid
    authFactory.forgotPassword($scope.vm.email).then(function(response){
      $scope.vm.showLoader = false;
       if(response.success) {
           $scope.vm.flag= false;
          // $scope.vm.successFlag=true;
           $scope.vm.message = response.data.message;
           $scope.vm.email="";

             swal({   
                    title: "Success",   
                    text: response.data.message,   
                    timer: 2000,   
                    showConfirmButton: false 
                });
          // $scope.vm.email="";
        } else {
            $scope.vm.flag= true;
            $scope.vm.successFlag=false;
            $scope.vm.message = response.message;
        }
     console.log(response);
    });
    };


  
         



  });

