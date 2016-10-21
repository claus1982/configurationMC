angular.module('app').factory('dataTableResources', ['lovService', function (lovService) {
  'use strict';
  return {
      attributiCS:
      {
        getOperation: "getCSWeb",
        setOperation: "setCSWeb",
        params : [
        {'name': 'nomeOfferta', 'title': 'Nome Offerta', 'type': 'text'},
        {'name': 'nomeProdotto', 'title': 'Nome Prodotto', 'type': 'text'}],

        columns: [
          {'model': 'nomeOfferta', 'title': 'Nome Offerta', 'type': 'text'},
          {'model': 'nomeProdotto', 'title': 'Nome Prodotto', 'type': 'text'},
          {'model': 'codiceCartaServizi', 'title': 'Codice Carta Servizi', 'type': 'text'},
          {
            'model': 'defaultFlag',
            'title': 'defaultFlag',
            'type': 'options',
            'options': lovService.getBooleanTypes(),
            'editable': true
          },
          {'model': 'parentDisplayName', 'title': 'parentDisplayName', 'type': 'text', 'editable': true},
          {'model': 'webDescription', 'title': 'webDescription', 'type': 'text', 'editable': true},
          {'model': 'longDescriptionWeb', 'title': 'longDescriptionWeb', 'type': 'text', 'editable': true},
          {
            'model': 'joinedSeniorityConstraintWeb',
            'title': 'joinedSeniorityConstraintWeb',
            'type': 'options',
            'multiple': true,
            'options': lovService.getjoinedSeniorityConstraintWebType(),
            'editable': true
          },
          {
            'model': 'isWebSellable',
            'title': 'isWebSellable',
            'type': 'options',
            'options': lovService.getBooleanTypes(),
            'editable': true
          },
          {
            'model': 'paymentMethodWeb',
            'title': 'paymentMethodWeb',
            'type': 'options',
            'options': lovService.getPaymentMethodType(),
            'editable': true
          }
        ]
      },
      attributiBF:
      {

      },
      attributiSIM:
      {

      },
      attributiRicarica:
      {

      },
    promo:
    {

    },
    pack:
    {

    }
  };
}]);
