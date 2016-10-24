angular.module('app').factory('dataTableResources', ['lovService', function (lovService) {
  'use strict';
  return {
      attributiCS:
      {
        title: "Attributi CS",
        getOperation: "getCSWeb",
        setOperation: "setCSWeb",
        searchParams : [
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
            'multiple': true,
            'options': lovService.getPaymentMethodType(),
            'editable': true
          }
        ]
      },
      attributiBF:
      {
        title: "Attributi BF",
        getOperation: "getBFWeb",
        setOperation: "setBFWeb",
        searchParams : [
          {'name': 'nomeProdotto', 'title': 'Nome Prodotto', 'type': 'text'},
          {'name': 'NMU', 'title': 'NMU', 'type': 'text'},
          {'name': 'descrizioneModello', 'title': 'Descrizione Modello', 'type': 'text'},
          {'name': 'descrizioneBrand', 'title': 'Descrizione Brand', 'type': 'text'},
          {'name': 'NMUPadre', 'title': 'NMU Padre', 'type': 'text'}
        ],
        columns: [
          {'model':'nomeProdotto','title':'Nome Prodotto','type':'text'},
          {'model':'NMU','title':'NMU','type':'text'},
          {'model':'descrizioneModello','title':'Descrizione Modello','type':'text'},
          {'model':'price','title':'Price','type':'text'},
          {'model':'descrizioneBrand','title':'descrizioneBrand','type':'text'},
          {'model':'NMUPadre','title':'NMUPadre','type':'text'},
          {'model':'webDescription','title':'webDescription','type':'text','editable': true},
          {'model':'longDescriptionWeb','title':'longDescriptionWeb','type':'text','editable': true},
          {'model': 'joinedSeniorityConstraintWeb',
            'title': 'joinedSeniorityConstraintWeb',
            'type': 'options',
            'multiple': true,
            'options': lovService.getjoinedSeniorityConstraintWebType(),
            'editable': true},
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
            'multiple': true,
            'options': lovService.getPaymentMethodType(),
            'editable': true
          },
          {'model':'REGALABILE','title':'REGALABILE','type':'options','editable': true,'options': lovService.getBooleanTypes()},
          {'model':'pianoTariffarioWeb','title':'pianoTariffarioWeb','type':'text','editable': true},
          {'model':'TIDweb','title':'TIDweb','type':'text','editable': true}
        ]
      },
      attributiSIM:
      {
        title: "Attributi SIM",
        getOperation: "getSIMWeb",
        setOperation: "setSIMWeb",
        searchParams : [
          {'name': 'nomeProdotto', 'title': 'Nome Prodotto', 'type': 'text'}
        ],


        columns: [
          {'model':'nomeProdotto','title':'Nome Prodotto','type':'text'},
          {'model':'webDescription','title':'webDescription','type':'text','editable': true},
          {'model':'longDescriptionWeb','title':'longDescriptionWeb','type':'text','editable': true},
          {'model': 'joinedSeniorityConstraintWeb',
            'title': 'joinedSeniorityConstraintWeb',
            'type': 'options',
            'multiple': true,
            'options': lovService.getjoinedSeniorityConstraintWebType(),
            'editable': true},
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
            'multiple': true,
            'options': lovService.getPaymentMethodType(),
            'editable': true
          },
          {'model':'pianoTariffarioWeb','title':'pianoTariffarioWeb','type':'text','editable': true},
          {'model':'TIDweb','title':'TIDweb','type':'text','editable': true}
        ]
      },
      attributiRicarica:
      {
        title: "Attributi Ricarca",
        getOperation: "getRicaricaWeb",
        setOperation: "setRicaricaWeb",
        searchParams : [
          {'name': 'nomeProdotto', 'title': 'Nome Prodotto', 'type': 'text'}
        ],


        columns: [
          {'model':'nomeProdotto','title':'Nome Prodotto','type':'text'},
          {'model':'webDescription','title':'webDescription','type':'text','editable': true},
          {'model':'longDescriptionWeb','title':'longDescriptionWeb','type':'text','editable': true},
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
            'multiple': true,
            'options': lovService.getPaymentMethodType(),
            'editable': true
          }
        ]
      },
    promo:
    {

    },
    pack:
    {

    }
  };
}]);
