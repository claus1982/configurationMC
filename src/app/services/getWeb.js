( function () {
  "use strict";
  angular.module('app').service('getWebService', function (GenericHttpService) {
    var serviceName = "getWeb";


    this.getWebRequest = function (inputData) {
      return {
        "getWebRequest": {
          "operation": inputData.operation || "",
          "productName": inputData.productName || ""
        }
      }
    };

    this.getWeb = function (request) {
      return GenericHttpService.doHttpRequest('/' + serviceName, request);
    };

  })
}());
