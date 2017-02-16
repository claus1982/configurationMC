( function () {
  "use strict";
  angular.module('app').service('getWebService', function (GenericHttpService, myConfig) {
    var baseUrl = myConfig.BASE_URL_ATTR,
        serviceName = "getWeb";


    this.getWebRequest = function (inputData) {
    var req = {
      getWebRequest: {
        operation: inputData.operation,
        nomeOfferta:  inputData.nomeOfferta,
        nomeProdotto: inputData.nomeProdotto,
        nmu:  inputData.nmu,
        descrizioneModello: inputData.descrizioneModello,
        descrizioneBrand: inputData.descrizioneBrand,
        nmuPadre: inputData.nmuPadre
    }
  }
      return req;
    };

    this.getWeb = function (request) {
      return GenericHttpService.doHttpRequest(baseUrl, serviceName, request);
    };

  })
}());
