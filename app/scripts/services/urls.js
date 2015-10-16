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
    	 LOGOUT:'logout',
    	 CERTAITYS:'certainities',
    	 CORETECHNOLOGY:'coretechnology',
    	 CRITICALITY:"criticalities",
    	 CUSTOMERS:"clients",
       LOGIN_WITH_GOOGLE:"auth/google/"
  });
//local http://192.168.61.24:4000/
// server URL-http://40.122.127.83:7000/