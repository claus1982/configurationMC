( function () {
  "use strict";
  angular.module('app').service('createPromoService', function (GenericHttpService) {
    var serviceName = "createPromo";


    this.createPromoRequest = function (inputData) {
      var req = {
        createPromoRequest: {
          codicePromo:inputData.codicePromo,
          nomePromo:inputData.nomePromo,
          descrizionePromo:inputData.descrizionePromo,
          periodoValidita: inputData.periodoValidita,
          periodoGenerazione:inputData.periodoGenerazione,
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
      return GenericHttpService.doHttpRequest('/' + serviceName, request);
    };

  })
}());
