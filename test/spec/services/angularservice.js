'use strict';

describe('Service: angularservice', function () {

  // load the service's module
  beforeEach(module('clarionEnterpriseApp'));

  // instantiate service
  var angularservice;
  beforeEach(inject(function (_angularservice_) {
    angularservice = _angularservice_;
  }));

  it('should do something', function () {
    expect(!!angularservice).toBe(true);
  });

});
