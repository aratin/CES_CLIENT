'use strict';

/**
 * @ngdoc service
 * @name clarionEnterpriseApp.authFactory
 * @description
 * # authFactory
 * Factory in the clarionEnterpriseApp.
 */
angular.module('clarionEnterpriseApp')
  .factory('authFactory', function ($http, $state, urls,$rootScope) {
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
       //login functionality post the login data
      loginWithGoogleold: function (data) {
        var url = urls.API_DOMAIN + urls.LOGIN_WITH_GOOGLE +data;
        return $http({
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          url: url
         
        }).then(function (result) {
          return result.data;        
        });
      },


       loginWithGoogle: function (data) {
       var url = urls.API_DOMAIN + urls.LOGIN_WITH_GOOGLE+'token?'+ data;
        var userData =JSON.parse(sessionStorage.getItem('userData'));    
        $rootScope.isLoggedIn = false;  
        return $http({
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          url: url
        }).then(function (result) {
           sessionStorage.setItem("userData", null); 
           $rootScope.isLoggedIn = false;
           $state.go('login');
           return result.data;

       });
      },
      showHeaderFooter:function(toState){
         if (toState == 'login' || toState == 'forgotPassword' || toState== 'changePassword' || toState == 'resetPassword') {
              $rootScope.showHeadFooter=false;
          }else{
              $rootScope.showHeadFooter=true;
          }
        // console.log("header fouter  visible ="+ $rootScope.showHeadFooter);
      },
      isLoggedIn :function(){
        var userData =JSON.parse(sessionStorage.getItem('userData'));
        return (userData) ? userData.data['sessionId'] : false;
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

       // Change password 
      changePassword: function (data) {
         var url = urls.API_DOMAIN + urls.CHANGE_PASSWORD;
         var userData =JSON.parse(sessionStorage.getItem('userData'));    
         console.log(userData.data['sessionId']);
        return $http({
          method: 'POST',
          headers: {'Content-Type': 'application/json','session-id': userData.data['sessionId']},
          url: url,
          data: data
        }).then(function (result) {
          console.log(result);
          return result.data;
      });
    },
    //Logout and redirect to login
     logout: function () {
       var url = urls.API_DOMAIN + urls.LOGOUT;
        var userData =JSON.parse(sessionStorage.getItem('userData'));
        //Var auth2 = gapi.auth2.getAuthInstance();    
        $rootScope.isLoggedIn = false;  
        return $http({
          method: 'GET',
          headers: {'Content-Type': 'application/json', 'session-id': userData.data['sessionId']},
          url: url
        }).then(function (result) {
           sessionStorage.setItem("userData", null); 
           $rootScope.isLoggedIn = false;
           $state.go('login');

           gapi.auth.signOut();
           
           //gapi.auth2.getAuthInstance().signOut()

           return result.data;

        });
      },

      //Get Core technology 

       coretechnology: function () {
         var url = urls.API_DOMAIN + urls.CORETECHNOLOGY + '/active';
         var userData =JSON.parse(sessionStorage.getItem('userData'));    
          return $http({
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'session-id': userData.data['sessionId']},
            url: url
          }).then(function (result) {
            
             return result.data;

          });
      },
       certaintys: function () {
         var url = urls.API_DOMAIN + urls.CERTAITYS + '/active';
         var userData =JSON.parse(sessionStorage.getItem('userData'));    
          return $http({
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'session-id': userData.data['sessionId']},
            url: url
          }).then(function (result) {
            
             return result.data;

          });
      },
       cirticalities: function () {
         var url = urls.API_DOMAIN + urls.CRITICALITY + '/active';
         var userData =JSON.parse(sessionStorage.getItem('userData'));    
          return $http({
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'session-id': userData.data['sessionId']},
            url: url
          }).then(function (result) {
            
             return result.data;

          });
      },
       customers: function () {
         var url = urls.API_DOMAIN + urls.CUSTOMERS ;
         var userData =JSON.parse(sessionStorage.getItem('userData'));    
          return $http({
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'session-id': userData.data['sessionId']},
            url: url
          }).then(function (result) {
             return result.data;
          });
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



