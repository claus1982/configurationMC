( function () {
  "use strict";
  angular.module('app').service('createPackService', function (GenericHttpService) {
    var serviceName = "createPack";


    this.createPackRequest = function (inputData) {
      var req = {
        createPackRequest: {
          packBatch: inputData.packBatch,
          codicePack:inputData.codicePack,
          nomePack:inputData.nomePack,
          descrizionePack:inputData.descrizionePack,
          inizioValidita: inputData.inizioValidita,
          fineValidita:inputData.fineValidita,
          inizioGenerazione: inputData.inizioGenerazione,
          fineGenerazione:inputData.fineGenerazione,
          codiceTemplateSMS:inputData.codiceTemplateSMS,
          codiceTemplateMAIL:inputData.codiceTemplateMAIL,
          flagLinea:inputData.flagLinea,
          limiteUtilizzoCoupon:inputData.limiteUtilizzoCoupon,
          sysdate:new Date()
        }
      }
      return req;
    };

    this.createPack = function (request) {
      return GenericHttpService.doHttpRequest(serviceName, request);
    };

  })
}());
