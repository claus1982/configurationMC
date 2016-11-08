( function () {
  "use strict";
  angular.module('app').service('deleteConditionService', function (GenericHttpService) {
    var serviceName = "deleteCondition";


    this.deleteConditionRequest = function (inputData) {
      return {
        deleteConditionRequest: {
          idCondition              :   inputData["idCondition"],
          codicePromo               :   inputData["codicePromo"]
        }
      };
    };

    this.deleteCondition = function (request) {
      return GenericHttpService.doHttpRequest(serviceName, request);
    };

  })
}());
