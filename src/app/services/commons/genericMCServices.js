( function () {
  "use strict";
  angular.module('app').service('GenericHttpService', function
    ($http,
     myConfig,
     toolsService) {

    this.doHttpRequest = function (urlEndpoint, data) {

      data = angular.copy(toolsService.cleanObject(data)) || {};

      //Request
      var req = {
        "url": (myConfig.baseUrl || '') + urlEndpoint,
        "data": data,
        "timeout": myConfig.timeout
      };

      return $http.post(req.url, req.data, {timeout: req.timeout});
    };

  });
}());
