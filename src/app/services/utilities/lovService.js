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

    factory.getSeniorityConstraintWebType = function (filterList) {
      filterList = filterList || [];
      return ['AL', 'CB','MNP'].filter(function(i) {return filterList.indexOf(i) < 0;});
    };

    factory.getRicaricaTypes = function () {
        return ['RICARICA', 'RICARICA_OR_RICARICA_PLUS'];
    };

    factory.getTaglioRicaricaTypes = function(){
      return[
        "RICARICA 5 EURO",
        "RICARICA 10 EURO",
        "RICARICA 15 EURO",
        "RICARICA 20 EURO",
        "RICARICA 25 EURO",
        "RICARICA 30 EURO",
        "RICARICA 40 EURO",
        "RICARICA 50 EURO",
        "RICARICA 75 EURO",
        "RICARICA 100 EURO",
        "RICARICA 120 EURO",
        "RICARICA 150 EURO",
        "RICARICA 200 EURO",
        "RICARICA FREE",
        "RICARICA PLUS 6 EURO",
        "RICARICA PLUS 12 EURO",
        "RICARICA PLUS 17 EURO"
      ];
    };

    factory.getVincoloTypes = function () {
      return [ 'Configurable','Soft', 'Hard'];
    };

/*      Ricarica: Carta di Credito, PAY PAL , TimPersonal
        SIM: Carta di Credito, PAY PAL , Contrassegno
        BF: Carta di Credito, PAY PAL , Contrassegno
        CS: Credito Residuo , Passepartout Offerte , Passepartout Offerte CC , PAY PAL*/


    factory.getPaymentMethod = function(type){
      switch(type) {
       case "RICARICA":
         return ['Carta di Credito','PAY PAL', 'TimPersonal'];
        break;
        case "SIM":
        case "BF":
          return ['Carta di Credito','Contrassegno', 'PAY PAL'];
          break;
        case "CS":
          return ['Carta di Credito', 'Credito Residuo', 'Passepartout Offerte', 'PAY PAL'];
          break;
        default:
          return ['Carta di Credito', 'Credito Residuo', 'Passepartout Offerte', 'PAY PAL',  'TimPersonal'];
      }
    };



    return factory;
  });
}());
