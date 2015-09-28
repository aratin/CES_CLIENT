'use strict';

describe('Controller: MenuBarCtrl', function () {

  // load the controller's module
  beforeEach(module('clarionEnterpriseApp'));

  var MenuBarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuBarCtrl = $controller('MenuBarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MenuBarCtrl.awesomeThings.length).toBe(3);
  });
});
