( function () {
  "use strict";
  angular.module('app').service('createPackConditionService', function (GenericHttpService) {
    var serviceName = "createPackCondition";


    this.createPackConditionRequest = function (inputData) {
      return {
        createPackConditionRequest: {
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
          codicePack               :   inputData["codicePack"]
        }
      };
    };

    this.createPackCondition = function (request) {
      return GenericHttpService.doHttpRequest(serviceName, request);
    };

  })
}());
