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
        if(response.data && angular.equals(response.data.email,$scope.vm.email)) {
            // response.password = $scope.vm.password;
            // $rootScope.socketObj;
            sessionStorage.setItem("userData", JSON.stringify(response));
            //$window.location.href = 'login.html';
            $location.url("/dashboard");
        } else {
            $scope.vm.flag= true;
            $scope.vm.message = "Invalid username or password";
        }               
       
    });
  };
});

		