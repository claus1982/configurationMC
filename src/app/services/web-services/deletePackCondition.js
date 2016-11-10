( function () {
  "use strict";
  angular.module('app').service('deletePackConditionService', function (GenericHttpService) {
    var serviceName = "deletePackCondition";


    this.deletePackConditionRequest = function (inputData) {
      return {
        deletePackConditionRequest: {
          idPackCondition              :   inputData["idPackCondition"],
          codicePack               :   inputData["codicePack"]
        }
      };
    };

    this.deletePackCondition = function (request) {
      return GenericHttpService.doHttpRequest(serviceName, request);
    };

  })
}());
