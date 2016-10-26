( function () {
  'use strict';
  angular.module('app').factory('lovService', function () {

    var factory = {};

    factory.getBooleanTypes = function () {
      return ['true', 'false'];
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


    return factory;
  });
}());
