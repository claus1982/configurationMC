( function () {
  "use strict";
  angular.module("app").service("setWebService", function (GenericHttpService, myConfig) {
    var baseUrl = myConfig.BASE_URL_ATTR,
    serviceName = "setWeb";


    this.setWebRequest = function (inputData) {
      return {
        setWebRequest: {
          operation: inputData.operation,
          nomeOfferta:inputData.nomeOfferta,
          nomeProdotto:inputData.nomeProdotto,
          nmu:inputData.nmu,
          descrizioneModello:inputData.descrizioneModello,
          prezzo:inputData.prezzo,
          descrizioneBrand:inputData.descrizioneBrand,
          nmuPadre:inputData.nmuPadre,
          webDescription:inputData.webDescription,
          longDescriptionWeb:inputData.longDescriptionWeb,
          seniorityConstraintWeb:inputData.seniorityConstraintWeb,
          isWebSellable:inputData.isWebSellable,
          paymentMethodWeb:inputData.paymentMethodWeb,
          regalabile:inputData.regalabile,
          pianoTariffarioWeb:inputData.pianoTariffarioWeb,
          tidWeb:inputData.tidWeb,
          priorityRecharge:inputData.priorityRecharge,
          codiceCartaServizi:inputData.codiceCartaServizi,
          defaultFlag:inputData.defaultFlag,
          parentDisplayName:inputData.parentDisplayName
        }
      }
    }
      ;

    this.setWeb = function (request) {
      return GenericHttpService.doHttpRequest(baseUrl, serviceName, request);
    };

  })
}());
