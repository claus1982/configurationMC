( function () {
  "use strict";
  angular.module('app').service('deleteConditionService', function (GenericHttpService, myConfig) {
    var baseUrl = myConfig.baseUrlPromo,
        serviceName = "deleteCondition";


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
      return GenericHttpService.doHttpRequest(baseUrl,serviceName, request);
    };

  })
}());
