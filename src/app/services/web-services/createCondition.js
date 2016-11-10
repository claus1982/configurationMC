( function () {
  "use strict";
  angular.module('app').service('createConditionService', function (GenericHttpService) {
    var serviceName = "createCondition";


    this.createConditionRequest = function (inputData) {
      return {
        createConditionRequest: {
          scontoValore              :   inputData["scontoValore"],
          scontoPercentuale         :   inputData["scontoPercentuale"],
          priceActivation           :   inputData["priceActivation"],
          offerta                   :   inputData["offerta"],
          tipologiaVendita          :   inputData["tipologiaVendita"],
          CS2Purchase               :   inputData["CS2Purchase"],
          BF2Purchase               :   inputData["BF2Purchase"],
          isPadreBF2Purchase        :   inputData["isPadreBF2Purchase"],
          CSwithBonus               :   inputData["CSwithBonus"],
          BFwithBonus               :   inputData["BFwithBonus"],
          taglioRicarica            :   inputData["taglioRicarica"],
          totaleCarrello            :   inputData["totaleCarrello"],
          ricaricaMinGenerazione    :   inputData["ricaricaMinGenerazione"],
          ricaricaMaxGenerazione    :   inputData["ricaricaMaxGenerazione"],
          ricaricaTipoGenerazione   :   inputData["ricaricaTipoGenerazione"],
          ricaricaMinApplicazione   :   inputData["ricaricaMinApplicazione"],
          importoRicaricaBonus      :   inputData["importoRicaricaBonus"],
          ricaricaTipoApplicazione  :   inputData["ricaricaTipoApplicazione"],
          codicePromo               :   inputData["codicePromo"]
        }
      };
    };

    this.createCondition = function (request) {
      return GenericHttpService.doHttpRequest(serviceName, request);
    };

  })
}());
