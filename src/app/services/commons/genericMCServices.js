( function () {
  "use strict";
  angular.module('app').service('GenericHttpService', function
    ($http,
     myConfig,
    toolsService,
    $q) {


    this.doHttpRequest = function (urlEndpoint, data) {

      data = angular.copy(data) || {};

      //Request
      var req = {
        "url": (myConfig.baseUrl || '') + '/'+urlEndpoint,
        "data": toolsService.cleanObject(data),
        "timeout": myConfig.timeout
      };

      return $http.post(req.url, req.data, {timeout: req.timeout}).then(
        function(res){
          var dataRes = res.data[urlEndpoint+"Response"];
            if (dataRes)
          {
            var header = dataRes.header;
          }

          if (dataRes && header && header.code !=1) {
            return $q.resolve(dataRes);
          }
         //header.code === 1

          else if (dataRes && header && header.description) {
            dataRes.error = header.result ? header.result+":"+header.description: header.description;
            return $q.reject(dataRes);
          }
          else if(dataRes) {
            dataRes.error = "Errore: risposta inattesa dal server...";
            return $q.reject(dataRes);
          }
            return $q.reject({error: "Errore: risposta inattesa dal server..."});
        },
        function(res){
          res.error = "Timeout o nessuna risposta dal server...";
          return $q.reject(res);
        }
      );
    };

  });
}());
