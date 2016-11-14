( function () {
  "use strict";
  angular.module('app').service('createPackConditionService', function (GenericHttpService) {
    var serviceName = "createPackCondition";


    this.createPackConditionRequest = function (inputData) {
      return {
        createPackConditionRequest: {
          scontoValore              :   inputData["scontoValore"],
          scontoPercentuale         :   inputData["scontoPercentuale"],
          prezzoAttivazione           :   inputData["prezzoAttivazione"],
          offerta                   :   inputData["offerta"],
          tipologiaVendita          :   inputData["tipologiaVendita"],
          CS2Purchase               :   inputData["CS2Purchase"],
          bf2purchase               :   inputData["bf2purchase"],
          isPadreBf2purchase        :   inputData["isPadreBf2purchase"],
          csWithBonus               :   inputData["csWithBonus"],
          bfwithBonus               :   inputData["bfwithBonus"],
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
