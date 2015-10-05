'use strict';

/**
 * @ngdoc function
 * @name clarionEnterpriseApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clarionEnterpriseApp
 */
angular.module('clarionEnterpriseApp')
  .controller('LoginCtrl', function ($scope,authFactory,$location) {

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
});

		