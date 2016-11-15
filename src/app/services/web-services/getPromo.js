( function () {
  "use strict";
  angular.module('app').service('getPromoService', function (GenericHttpService, myConfig) {
    var baseUrl = myConfig.baseUrlPromo,
      serviceName = "getPromo";


    this.getPromoRequest = function (inputData) {
    var req = {
      getPromoRequest: {
        tipoPromo: inputData.tipoPromo
      }
    }
      return req;
    };

    this.getPromo = function (request) {
      return GenericHttpService.doHttpRequest(baseUrl, serviceName, request);
    };

  })
}());
