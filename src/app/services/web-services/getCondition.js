( function () {
  "use strict";
  angular.module('app').service('getConditionService', function (GenericHttpService, myConfig) {
    var baseUrl = myConfig.baseUrlPromo,
        serviceName = "getCondition";


    this.getConditionRequest = function (inputData) {
      var req = {
        getConditionRequest: {
          tipoPromo: inputData.tipoPromo,
          codicePromo: inputData.codicePromo
        }
      }
      return req;
    };

    this.getCondition = function (request) {
      return GenericHttpService.doHttpRequest(baseUrl, serviceName, request);
    };

  })
}());
