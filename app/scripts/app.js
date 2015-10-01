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


.run(function($rootScope,$window,$location) {
        $rootScope.socket= null;
        
        $rootScope.$on('$stateChangeSuccess',
        function(event, next, current){
          // redirect to login page if not logged in and trying to access a restricted page
            var session_Id =JSON.parse(sessionStorage.getItem('userData'));               
               if (!session_Id) {
                templateUrl : 'views/login.html';
                //$window.location.href = 'login.html';
               }
            });
  });

 
// $rootScope.$on('$stateChangeStart', 
// function(event, toState, toParams, fromState, fromParams){ 
//     event.preventDefault(); 
//     // transitionTo() promise will be rejected with 
//     // a 'transition prevented' error
// })