'use strict';

/**
 * @ngdoc service
 * @name clarionEnterpriseApp.authFactory
 * @description
 * # authFactory
 * Factory in the clarionEnterpriseApp.
 */
angular.module('clarionEnterpriseApp')
  .factory('authFactory', function ($http, $state, urls) {
  	 return {
    // Service logic

    //login functionality post the login data
      login: function (data) {
        var url = urls.API_DOMAIN + urls.LOGIN;
        return $http({
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          url: url,
          data:data
        }).then(function (result) {
          return result.data;        
        });
      },

      //forgot password post the data
      forgotPassword: function (email) {
        var url = urls.API_DOMAIN + urls.FORGOT_PASSWORD;
        // console.log(url);
        return $http({
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          url: url,
          data:{
          	'email':email
          }

        }).then(function (result) {
        	console.log(result);
          return result.data;
     	});
      },

      // update password 
       updateForgotPassword: function (data) {
        var url = urls.API_DOMAIN + urls.UPDATE_FORGOTPASSWORD;
        // var tokenObj =$location.$$search.temp;
         console.log(url);
        return $http({
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          url: url,
          data: data
        }).then(function (result) {
        	console.log(result);
          return result.data;
     	});
		// return $http.post(url, data);
       },

  };

  });
