( function () {
  "use strict";
  angular.module('app').service('createConditionService', function (GenericHttpService) {
    var serviceName = "createCondition";


    this.createConditionRequest = function (inputData) {
      var req = {
        createConditionRequest: {

        }
      }
      return req;
    };

    this.createCondition = function (request) {
      return GenericHttpService.doHttpRequest('/' + serviceName, request);
    };

  })
}());
