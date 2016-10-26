( function () {
  "use strict";
  angular.module('app').service('setWebService', function (GenericHttpService) {
    var serviceName = "setWeb";


    this.setWebRequest = function (inputData) {
      return {
        setWebRequest: {
          operation: inputData.operation,
          nomeOfferta: inputData.nomeOfferta,
          nomeProdotto: inputData.nomeProdotto,
          codiceCartaServizi: inputData.codiceCartaServizi,
          defaultFlag: inputData.defaultFlag,
          parentDisplayName: inputData.parentDisplayName,
          webDescription: inputData.webDescription,
          longDescriptionWeb: inputData.longDescriptionWeb,
          seniorityConstraintWeb: inputData.seniorityConstraintWeb,
          isWebSellable: inputData.isWebSellable,
          paymentMethodWeb: inputData.paymentMethodWeb,
          NMU: inputData.NMU,
          descrizioneModello: inputData.descrizioneModello,
          price: inputData.price,
          descrizioneBrand: inputData.descrizioneBrand,
          NMUPadre: inputData.NMUPadre,
          REGALABILE: inputData.REGALABILE,
          pianoTariffarioWeb: inputData.pianoTariffarioWeb,
          TIDweb: inputData.TIDweb,
          priorityRecharge: inputData.priorityRecharge
        }
      }
    }
      ;

    this.setWeb = function (request) {
      return GenericHttpService.doHttpRequest('/' + serviceName, request);
    };

  })
}());
