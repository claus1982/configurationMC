( function () {
  "use strict";
  angular.module('app').service('getConditionService', function (GenericHttpService) {
    var serviceName = "getCondition";


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
      return GenericHttpService.doHttpRequest(serviceName, request);
    };

  })
}());
