( function () {
  "use strict";
  angular.module('app').service('setWebService', function (GenericHttpService) {
    var serviceName = "setWeb";


    this.setWebRequest = function (inputData) {
      return {
        setWebRequest: {
          operation:                         inputData.operation,
          nomeOfferta:                       inputData.nomeOfferta,
          nomeProdotto:                      inputData.nomeProdotto,
          codiceCartaServizi:                inputData.codiceCartaServizi,
          defaultFlag:                       inputData.defaultFlag,
          parentDisplayName:                 inputData.parentDisplayName,
          webDescription:                    inputData.webDescription,
          longDescriptionWeb:                inputData.longDescriptionWeb,
          joinedSeniorityConstraintWeb:      inputData.joinedSeniorityConstraintWeb,
          isWebSellable:                     inputData.isWebSellable,
          paymentMethodWeb:                  inputData.paymentMethodWeb
        }
      }
    };

    this.setWeb = function (request) {
      return GenericHttpService.doHttpRequest('/' + serviceName, request);
    };

  })
}());
