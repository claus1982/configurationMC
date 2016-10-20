( function () {
  "use strict";
  angular.module('app').service('setWebService', function (GenericHttpService) {
    var serviceName = "setWeb";


    this.setWebRequest = function (inputData) {
      return {
        "setWebRequest": {
          "operation": "setCSWeb",
          "productName": "ODE46 - INTERNET 7 GIORNI"
        }
      }
    };

    this.setWeb = function (request) {
      return GenericHttpService.doHttpRequest('/' + serviceName, request);
    };

  })
}());
