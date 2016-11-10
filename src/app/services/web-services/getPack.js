( function () {
  "use strict";
  angular.module('app').service('getPackService', function (GenericHttpService) {
    var serviceName = "getPack";


    this.getPackRequest = function (inputData) {
    var req = {
      getPackRequest: {
      }
    }
      return req;
    };

    this.getPack = function (request) {
      return GenericHttpService.doHttpRequest(serviceName, request);
    };

  })
}());
