'use strict';

/**
 * @ngdoc directive
 * @name clarionEnterpriseApp.directive:passwordMatch
 * @description
 * # passwordMatch
 */
angular.module('clarionEnterpriseApp')
  .directive('passwordMatch', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the passwordMatch directive');
      }
    };
  });
