( function () {
  "use strict";
  angular.module('app').service('getPromoService', function (GenericHttpService) {
    var serviceName = "getPromo";


    this.getPromoRequest = function (inputData) {
    var req = {
      getPromoRequest: {
        tipoPromo: inputData.tipoPromo
      }
    }
      return req;
    };

    this.getPromo = function (request) {
      return GenericHttpService.doHttpRequest('/' + serviceName, request);
    };

  })
}());
