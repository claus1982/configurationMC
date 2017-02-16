( function () {
  "use strict";
  angular.module('app').service('deletePromoService', function (GenericHttpService, myConfig) {
    var baseUrl = myConfig.BASE_URL_PROMO,
      serviceName = "deletePromo";


    this.deletePromoRequest = function (inputData) {
      var req = {
        deletePromoRequest: {
          tipoPromo: inputData.tipoPromo,
          codicePromo: inputData.codicePromo
        }
      };
      return req;
    };

    this.deletePromo = function (request) {
      return GenericHttpService.doHttpRequest(baseUrl, serviceName, request);
    };

  })
}());
