( function () {
  "use strict";
  angular.module('app').service('getPackConditionService', function (GenericHttpService, myConfig) {
    var baseUrl = myConfig.BASE_URL_PACK,
        serviceName = "getPackCondition";


    this.getPackConditionRequest = function (inputData) {
      var req = {
        getPackConditionRequest: {
          tipoPack: inputData.tipoPack,
          codicePack: inputData.codicePack
        }
      }
      return req;
    };

    this.getPackCondition = function (request) {
      return GenericHttpService.doHttpRequest(baseUrl, serviceName, request);
    };

  })
}());
