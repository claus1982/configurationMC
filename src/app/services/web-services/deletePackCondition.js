( function () {
  "use strict";
  angular.module('app').service('deletePackConditionService', function (GenericHttpService, myConfig) {
    var baseUrl = myConfig.BASE_URL_PACK,
        serviceName = "deletePackCondition";


    this.deletePackConditionRequest = function (inputData) {
      return {
        deletePackConditionRequest: {
          idPackCondition              :   inputData["idPackCondition"],
          codicePack               :   inputData["codicePack"]
        }
      };
    };

    this.deletePackCondition = function (request) {
      return GenericHttpService.doHttpRequest(baseUrl, serviceName, request);
    };

  })
}());
