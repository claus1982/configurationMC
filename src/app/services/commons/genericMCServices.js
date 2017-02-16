( function () {
  "use strict";
  angular.module('app').service('GenericHttpService', function
    ($http,
    toolsService,
    $q,
    myConfig) {

    function getAppId() {
      return 'AAAAAAAA';
    }

    function generateHexCode() {
      var text = "";
      var possible = "ABCDEF0123456789";
      for (var i = 0; i < 8; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }

    function getRandomHex() {

      var firstBlock = getAppId(),
          secondBlock = new Date().getTime().toString().substr(-8),
          thirdBlock = generateHexCode();
      return firstBlock + secondBlock + thirdBlock;
    };


    this.doHttpRequest = function (baseUrl, urlEndpoint, requestData) {

      //aggiunge un businessId ad ogni request in cima
      var data = {};
      data[Object.keys(requestData)[0]] = {};
      data[Object.keys(requestData)[0]].businessId = getRandomHex();
      angular.extend(data[Object.keys(requestData)[0]],requestData[Object.keys(requestData)[0]]);


      //Request
      var req = {
        "url": (baseUrl || '') + '/'+urlEndpoint,
        "data": toolsService.cleanObject(data),
        "timeout": myConfig.TIMEOUT
      };

      console.log(urlEndpoint,"called");
      return $http.post(req.url, req.data, {timeout: req.timeout}).then(
        function(res){
          console.log(urlEndpoint, "received OK");
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
          console.log(urlEndpoint, "received KO or timeout");
          res.error = "Timeout o nessuna risposta dal server...";
          return $q.reject(res);
        }
      );
    };

  });
}());
