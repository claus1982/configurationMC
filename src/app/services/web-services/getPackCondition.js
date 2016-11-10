( function () {
  "use strict";
  angular.module('app').service('getPackConditionService', function (GenericHttpService) {
    var serviceName = "getPackCondition";


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
      return GenericHttpService.doHttpRequest(serviceName, request);
    };

  })
}());
