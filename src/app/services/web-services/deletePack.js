( function () {
  "use strict";
  angular.module('app').service('deletePackService', function (GenericHttpService, myConfig) {
    var baseUrl = myConfig.baseUrlPack,
        serviceName = "deletePack";


    this.deletePackRequest = function (inputData) {
      var req = {
        deletePackRequest: {
          codicePack: inputData.codicePack
        }
      };
      return req;
    };

    this.deletePack = function (request) {
      return GenericHttpService.doHttpRequest(baseUrl, serviceName, request);
    };

  })
}());
