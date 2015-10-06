'use strict';

/**
 * @ngdoc directive
 * @name clarionEnterpriseApp.directive:passwordMatch
 * @description
 * # passwordMatch
 */
angular.module('clarionEnterpriseApp')
  .directive('pwCheck', function () {
    return {
      require: 'ngModel',
      link: function (scope, elem, attrs, ctrl) {
        var firstPassword = '#' + attrs.pwCheck;
        elem.add(firstPassword).on('keyup', function () {
          scope.$apply(function () {
            var v = elem.val()===$(firstPassword).val();
            ctrl.$setValidity('pwmatch', v);
          });
        });
      }
    };
  });


