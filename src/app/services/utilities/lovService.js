( function () {
  'use strict';
  angular.module('app').factory('lovService', function () {

    var factory = {};

    factory.getBooleanTypes = function (type) {
      if (type===1)
        return ['true', 'false'];
      else if (type===2)
        return ['yes', 'no'];

      return ['Y', 'N'];

    };

    /*//paymentMethodType type
    factory.getPaymentMethodType = function () {
      return ['Carta di Credito',  'Contrassegno', 'Contanti','Credito Residuo','Passepartout Offerte', 'PAY PAL'];
    };
*/
    //constraint type

    factory.getSeniorityConstraintWebType = function () {
      return ['AL', 'MNP', 'CB'];
    };

    factory.getRicaricaTypes = function () {
        return ['RICARICA', 'RICARICA_OR_RICARICA_PLUS'];
    };


    return factory;
  });
}());
