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

      //remember usrname/password
      rememberPassword: function(data) {
            function fetchValue(data) {
                var name=data;
                var gCookieVal = document.cookie.split("; ");
                for (var i=0; i < gCookieVal.length; i++)
                {
                    // a name/value pair (a crumb) is separated by an equal sign
                    var gCrumb = gCookieVal[i].split("=");
                    if (name === gCrumb[0])
                    {
                        var value = '';
                        try {
                            value = angular.fromJson(gCrumb[1]);
                        } catch(e) {
                            value = unescape(gCrumb[1]);
                        }
                        return value;
                    }
                }
                // a cookie with the requested name does not exist
                return null;
            }
            return function(name, values) {
                if(arguments.length === 1) return fetchValue(name);
                var cookie = name + '=';
                if(typeof values === 'object') {
                    var expires = '';
                    cookie += (typeof values.value === 'object') ? angular.toJson(values.value) + ';' : values.value + ';';
                    if(values.expires) {
                        var date = new Date();
                        date.setTime( date.getTime() + (values.expires * 24 *60 * 60 * 1000));
                        expires = date.toGMTString();
                    }
                    cookie += (!values.session) ? 'expires=' + expires + ';' : '';
                    cookie += (values.path) ? 'path=' + values.path + ';' : '';
                    cookie += (values.secure) ? 'secure;' : '';
                } else {
                    cookie += values + ';';
                }
                document.cookie = cookie;
            }
       },
    };

  });



