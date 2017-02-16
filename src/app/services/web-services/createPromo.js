( function () {
  "use strict";
  angular.module('app').service('createPromoService', function (GenericHttpService, myConfig) {
    var baseUrl = myConfig.BASE_URL_PROMO,
      serviceName = "createPromo";


    this.createPromoRequest = function (inputData) {
      var req = {
        createPromoRequest: {
          tipoPromo: inputData.tipoPromo,
          nomePromo:inputData.nomePromo,
          descrizionePromo:inputData.descrizionePromo,
          inizioValidita: inputData.inizioValidita,
          fineValidita:inputData.fineValidita,
          promoBatch: inputData.promoBatch,
          inizioGenerazione: inputData.inizioGenerazione,
          fineGenerazione:inputData.fineGenerazione,
          codiceTemplateSMS:inputData.codiceTemplateSMS,
          codiceTemplateMAIL:inputData.codiceTemplateMAIL,
          flagLinea:inputData.flagLinea,
          limiteUtilizzoCoupon:inputData.limiteUtilizzoCoupon
        }
      };

      return req;
    };

    this.createPromo = function (request) {
      return GenericHttpService.doHttpRequest(baseUrl, serviceName, request);
    };

  })
}());
