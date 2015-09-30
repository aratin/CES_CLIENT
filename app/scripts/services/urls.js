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
  		API_DOMAIN :'http://192.168.61.24:4000/',
    	 LOGIN : 'login',
    	 FORGOT_PASSWORD:'forgotpassword',
    	 UPDATE_FORGOTPASSWORD:'updateforgotpassword',
    	 CHANGE_PASSWORD:'changepassword',
    	 LOGOUT:'logout'
  });