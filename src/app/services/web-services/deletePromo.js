( function () {
  "use strict";
  angular.module('app').service('deletePromoService', function (GenericHttpService) {
    var serviceName = "deletePromo";


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
      return GenericHttpService.doHttpRequest(serviceName, request);
    };

  })
}());
