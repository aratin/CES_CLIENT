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

      $scope.vm = {
        email : '',
        message: "",
        flag: false,
        successFlag:false,
        showLoader : false
     };
    
  	 $scope.changepassword = function () {
      $scope.vm.showLoader = true;
      // make API call only if the form is valid
    var userData =JSON.parse(sessionStorage.getItem('userData'));    
    authFactory.changePassword({email:userData.data['email'], password: $scope.current_password, newPassword: $scope.new_password }).then(function(response){
        $scope.vm.showLoader = false;
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
