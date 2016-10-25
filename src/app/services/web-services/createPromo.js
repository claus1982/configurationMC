( function () {
  "use strict";
  angular.module('app').service('createPromoService', function (GenericHttpService) {
    var serviceName = "createPromo";


    this.createPromoRequest = function (inputData) {
      var req = {
        createPromoRequest: {
        }
      }
      return req;
    };

    this.createPromo = function (request) {
      return GenericHttpService.doHttpRequest('/' + serviceName, request);
    };

  })
}());
