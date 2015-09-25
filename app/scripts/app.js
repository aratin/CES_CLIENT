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
            url: '/logout',
            templateUrl: 'views/logout.html'

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

          // forgot password
        .state('registration', {
            url: '/registration',
            templateUrl: 'views/registration-form.html'

        });
       


  })




  // .run(function ($rootScope, $location, $cookieStore, $http) {
  //         // keep user logged in after page refresh
  //         $rootScope.globals = $cookieStore.get('globals') || {};
  //         if ($rootScope.globals.currentUser) {
  //             $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
  //         }
    
  //         $rootScope.$on('$locationChangeStart', function (event, next, current) {
  //             // redirect to login page if not logged in
  //             if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
  //                 $location.path('/login');
  //             }
  //         });
  //     })