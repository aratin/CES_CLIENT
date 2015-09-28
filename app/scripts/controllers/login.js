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
        if(angular.equals(response.data.email,$scope.vm.email)) {
            response.password = $scope.vm.password;
            // $rootScope.socketObj;
            sessionStorage.setItem("userData", JSON.stringify(response));
            //$window.location.href = 'login.html';
            $location.url("/loginsuccess");
        } else {
            $scope.vm.flag= true;
            $scope.vm.message = "Invalid username or password";
        }               
       
    });
  };
});

		/*var param ={
                email : $scope.email,
                password :$scope.password
            };

            authFactory.login(param).then(function (response){
            	 console.log(response);
            	 localStorage.setItem("userData", JSON.stringify(response.data));
            	 	$location.url("/loginsuccess");
            	
            	  
            });
      };*/
 
/*mayuri.zingade@clariontechnologies.co.in

   //  $scope.login = function () {  
		 // $scope.vm = {
		 //            message: "",
		 //            flag: false,
		 //            email: '',
		 //            password:'' 
		 //    };              
   //      var param ={
   //          email : $scope.vm.email,
   //          password : $scope.vm.password
   //      };
   //      authFactory.login(param)
   //          .success(function (response) {
   //          	console.log("login sucess");               
   //              if(angular.equals(response.name,$scope.vm.email)) {
   //                  response.password = $scope.vm.password;
   //              } else {
   //                  $scope.vm.flag= true;
   //                  $scope.vm.message = "Invalid username or password";
   //              }               
   //      });
   //  };
 
  });
*/
  
