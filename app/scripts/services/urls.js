'use strict';

/**
 * @ngdoc service
 * @name clarionEnterpriseApp.urls
 * @description
 * # urls
 * Constant in the clarionEnterpriseApp.
 */
angular.module('clarionEnterpriseApp')
  .constant('urls',{
  		API_DOMAIN :'http://40.122.127.83:7000/',
    	 LOGIN : 'login',
    	 FORGOT_PASSWORD:'forgotpassword',
    	 UPDATE_FORGOTPASSWORD:'updateforgotpassword',
    	 CHANGE_PASSWORD:'changepassword',
    	 LOGOUT:'logout'
  });

  