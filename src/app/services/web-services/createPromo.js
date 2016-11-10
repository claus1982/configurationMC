( function () {
  "use strict";
  angular.module('app').service('createPromoService', function (GenericHttpService) {
    var serviceName = "createPromo";


    this.createPromoRequest = function (inputData) {
      var req = {
        createPromoRequest: {
          promoBatch: inputData.promoBatch,
          codicePromo:inputData.codicePromo,
          nomePromo:inputData.nomePromo,
          descrizionePromo:inputData.descrizionePromo,
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

    this.createPromo = function (request) {
      return GenericHttpService.doHttpRequest(serviceName, request);
    };

  })
}());
