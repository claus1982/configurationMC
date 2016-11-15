( function () {
  "use strict";
  angular.module('app').service('getPackConditionService', function (GenericHttpService, myConfig) {
    var baseUrl = myConfig.baseUrlPack,
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
