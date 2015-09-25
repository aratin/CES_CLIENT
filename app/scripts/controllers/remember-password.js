'use strict';

/**
 * @ngdoc function
 * @name clarionEnterpriseApp.controller:RememberPasswordCtrl
 * @description
 * # RememberPasswordCtrl
 * Controller of the clarionEnterpriseApp
 */
angular.module('clarionEnterpriseApp')
  .controller('RememberPasswordCtrl', function ($scope,authFactory) {
 /**
     * $scope.rememberPassword
     * @param {object} loginForm
     * this method calls AuthFactory service's rememberPassword()
  */
   	$scope.vm = {
		  'name' : ''
	   };
        $scope.rememberPassword = function () {
         authFactory.rememberPassword($scope.vm.name).then(function(response){
            $scope.remember = false;
            if ($remember('email') && $remember('password') ) {
                $scope.remember = true;
                $scope.username = $remember('email');
                $scope.password = $remember('password');
            }

            $scope.rememberMe = function() {
                if ($scope.remember) {
                    $remember('email', $scope.email);
                    $remember('password', $scope.password);
                } else {
                    $remember('email', '');
                    $remember('password', '');
                }
          };
      });
    };

  });


