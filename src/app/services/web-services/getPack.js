( function () {
  "use strict";
  angular.module('app').service('getPackService', function (GenericHttpService, myConfig) {
    var baseUrl = myConfig.BASE_URL_PACK,
        serviceName = "getPack";


    this.getPackRequest = function (inputData) {
    var req = {
      getPackRequest: {
      }
    }
      return req;
    };

    this.getPack = function (request) {
      return GenericHttpService.doHttpRequest(baseUrl, serviceName, request);
    };

  })
}());
