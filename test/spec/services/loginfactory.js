'use strict';

describe('Service: loginFactory', function () {

  // load the service's module
  beforeEach(module('clarionEnterpriseApp'));

  // instantiate service
  var loginFactory;
  beforeEach(inject(function (_loginFactory_) {
    loginFactory = _loginFactory_;
  }));

  it('should do something', function () {
    expect(!!loginFactory).toBe(true);
  });

});
