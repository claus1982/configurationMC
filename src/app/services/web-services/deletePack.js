( function () {
  "use strict";
  angular.module('app').service('deletePackService', function (GenericHttpService) {
    var serviceName = "deletePack";


    this.deletePackRequest = function (inputData) {
      var req = {
        deletePackRequest: {
          codicePack: inputData.codicePack
        }
      };
      return req;
    };

    this.deletePack = function (request) {
      return GenericHttpService.doHttpRequest(serviceName, request);
    };

  })
}());
