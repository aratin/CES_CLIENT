'use strict';

/**
 * @ngdoc overview
 * @name clarionEnterpriseApp
 * @description
 * # clarionEnterpriseApp
 *
 * Main module of the application.
 */
angular
  .module('clarionEnterpriseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource'
    ,'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])

 .config(function ($urlRouterProvider, $stateProvider) {

     $urlRouterProvider.otherwise('/login');
     // $locationProvider.html5Mode(true);

      $stateProvider
        
        // login state 
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
        })

         // logout
        .state('logout', {
            url: '/logout?redirectUrl',
            views: {
              '@': {
                controller: function(authFactory){
                  authFactory.logout();
                }
              }
            }

        })

        
        // forgot password
        .state('forgotPassword', {
            url: '/forgotPassword',
            templateUrl: 'views/forgot-password.html',
            controller: 'ForgotPasswordCtrl',

        })

        // Reset password
        .state('resetPassword', {
            url: '/resetPassword',
            templateUrl: 'views/reset-password.html',
            controller: 'ResetPasswordCtrl',

        })

         // Change password
        .state('changePassword', {
            url: '/changePassword',
            templateUrl: 'views/change-password.html',
            controller: 'ChangePasswordCtrl',

        })


          // forgot password
        .state('registration', {
            url: '/registration',
            templateUrl: 'views/registration-form.html'

        })

        //dashboard 
         .state('dashboard', {
        url: '/dashboard',
        views: {
          '@': {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
          },
          'navBar': {
            templateUrl: 'views/nav-bar.html'
          },
          'menuBar': {
            templateUrl: 'views/menu-bar.html'
          },
          'footer': {
            templateUrl: 'views/footer.html'
          }
        }
      })

         //requisitionForm
      .state('requisition', {
        url: '/requisition',
        views: {
          '@': {
            templateUrl: 'views/requisition.html',
            controller: 'RequisitionCtrl'
          },
          'navBar': {
            templateUrl: 'views/nav-bar.html'
          },
          'menuBar': {
            templateUrl: 'views/menu-bar.html'
          }
        }
      });
  })


// .run(function($rootScope,$window,$location) {
//         $rootScope.socket= null;
        
//         $rootScope.$on('$stateChangeSuccess',
//         function(event, next, current){
//           // redirect to login page if not logged in and trying to access a restricted page
//             var session_Id =JSON.parse(sessionStorage.getItem('userData'));               
//                if (!session_Id) {
//                 templateUrl : 'views/login.html';
//                 //$window.location.href = 'login.html';
//                }
//             });
//   });

 
  .run(function ($rootScope, $location, $state, authFactory, $log, $window) {
    // store the current state in the root-scope
    $rootScope.$state = $state;
    $rootScope.socket= null;
  
    $rootScope.$on('$stateChangeSuccess',
      function(event, toState, toParams, fromState, fromParams){
             var session_Id =JSON.parse(sessionStorage.getItem('userData'));               
             if (!session_Id) {
              templateUrl : 'views/login.html';
              //$window.location.href = 'login.html';
                       /*Based on the view show/hid the header footer */
           
             }
           
              authFactory.showHeaderFooter(toState.name);
           
          }
      )


    $rootScope.$on('$stateChangeStart', function (event, toState) {
      $log.debug(event);
      // check if already logged in
    
      if (!authFactory.isLoggedIn()) {

          $rootScope.isLoggedIn = false;
         

          // if not logged in, only redirect to sign-in for the secure pages
          if (toState.name !== 'forgotPassword' && toState.name !== 'changePassword' && toState.name !== 'resetPassword' && toState.name!=='logout') {
               $location.path('/login');
          
          }


      } else {
          $rootScope.isLoggedIn = true;

        // redirect to Mashup, if user is an end user
        // redirect to dashboard, if user is a developer and already logged in
        // if(AuthFactory.getUserRole().toLowerCase() === roles.USER.toLowerCase()){
        //   $window.open('http://crossarm.clarionworld.com', '_self');
        // } else {
          if (toState.name === 'login') {
          //  $location.path('/dashboard');
          }
      }
    });
    
  });

