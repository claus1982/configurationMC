( function () {
  "use strict";
  angular.module('app').service('deleteConditionService', function (GenericHttpService) {
    var serviceName = "deleteCondition";


    this.deleteConditionRequest = function (inputData) {
      return {
        deleteConditionRequest: {
          tipoPromo                 :   inputData["tipoPromo"],
          codicePromo               :   inputData["codicePromo"],
          idCondition              :   inputData["idCondition"]

        }
      };
    };

    this.deleteCondition = function (request) {
      return GenericHttpService.doHttpRequest(serviceName, request);
    };

  })
}());
