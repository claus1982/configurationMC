( function () {
  'use strict';
  angular.module('app').factory('lovService', function () {

    var factory = {};

    factory.getBooleanTypes = function () {
      return ['true', 'false'];
    };

    //paymentMethodType type
    factory.getPaymentMethodType = function () {
      return ['Carta di Credito', 'Pay Pal', 'Contanti'];
    };

    //constraint type

    factory.getjoinedSeniorityConstraintWebType = function () {
      return ['AL', 'MNP', 'CB'];
    };


    return factory;
  });
}());
