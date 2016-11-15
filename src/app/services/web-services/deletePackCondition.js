( function () {
  "use strict";
  angular.module('app').service('deletePackConditionService', function (GenericHttpService, myConfig) {
    var baseUrl = myConfig.baseUrlPack,
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
