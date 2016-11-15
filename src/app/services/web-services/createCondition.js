( function () {
  "use strict";
  angular.module('app').service('createConditionService', function (GenericHttpService, myConfig) {
    var baseUrl = myConfig.baseUrlPromo,
        serviceName = "createCondition";


    this.createConditionRequest = function (inputData) {
      return {
        createConditionRequest: {
          tipoPromo                 :   inputData["tipoPromo"],
          scontoValore              :   inputData["scontoValore"],
          scontoPercentuale         :   inputData["scontoPercentuale"],
          prezzoAttivazione           : inputData["prezzoAttivazione"],
          offerta                   :   inputData["offerta"],
          tipologiaVendita          :   inputData["tipologiaVendita"],
          cs2purchase               :   inputData["cs2purchase"],
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
          codicePromo               :   inputData["codicePromo"]
        }
      };
    };


    this.createCondition = function (request) {
      return GenericHttpService.doHttpRequest(baseUrl, serviceName, request);
    };

  })
}());
