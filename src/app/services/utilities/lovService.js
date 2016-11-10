( function () {
  'use strict';
  angular.module('app').factory('lovService', function () {

    var factory = {};

    factory.getBooleanTypes = function (type) {
      if (type===1)
        return ['false', 'true'];
      else if (type===2)
        return ['no', 'yes'];

      return ['N', 'Y'];

    };

    /*//paymentMethodType type
    factory.getPaymentMethodType = function () {
      return ['Carta di Credito',  'Contrassegno', 'Contanti','Credito Residuo','Passepartout Offerte', 'PAY PAL'];
    };
*/
    //constraint type

    factory.getSeniorityConstraintWebType = function () {
      return ['AL', 'CB','MNP'];
    };

    factory.getRicaricaTypes = function () {
        return ['RICARICA', 'RICARICA_OR_RICARICA_PLUS'];
    };

    factory.getVincoloTypes = function () {
      return ['Soft', 'Group', 'Hard'];
    };



    return factory;
  });
}());
