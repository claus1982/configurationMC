angular.module('app').factory('dataTableResources', ['lovService','$state', function (lovService, $state) {
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
      title: "Promo",
      columns: [
        {'model':'promo','title':'Promo','type':'text'},
        {'model':'description','title':'Descrizione','type':'text'}
      ],
      items: [
        {
          "tipoPromo" :"PROMO_ID1",
          "promo":"PROMO ID1 Bene Fisico",
          "description": "Promo che sconta, da canale Web ed in un determinato periodo, un Bene Fisico in vendita diretta con uno sconto a valore assoluto o in percentuale"
        },
        {
          "tipoPromo" :"PROMO_ID2",
          "promo":"PROMO ID2 Carta Servizi",
          "description": "Promo che sconta, da canale Web ed in un determinato periodo, il costo a pagare (attivazione + 1° canone) di una Carta Servizi con uno sconto a valore assoluto o in percentuale"
        },
        {
          "tipoPromo" :"PROMO_ID3",
          "promo":"PROMO ID3 Combinazione Item",
          "description": "Promo che aggiunge a carrello, da canale Web ed in un determinato periodo, una Carta Servizi se presente un'altra nel carrello"
        },
        {
          "tipoPromo" :"PROMO_ID4",
          "promo":"PROMO ID4 GiftWithPurchase",
          "description": "Promo che sconta, da canale Web ed in un determinato periodo, un Bene Fisico in vendita diretta con uno sconto a valore assoluto o in percentuale"
        },
        {
          "tipoPromo" :"PROMO_ID5",
          "promo":"PROMO ID5 SIM CARD",
          "description": "Promo che sconta, da canale Web ed in un determinato periodo, la SIM Card con uno sconto a valore assoluto o a percentuale"
        },
        {
          "tipoPromo" :"PROMO_ID6_1",
          "promo":"PROMO ID6.1 Coupon",
          "description": "Promo che fornisce in fase di vendita, da canale Web ed in un determinato periodo, un Coupon che elargirà uno sconto in una successiva post-vendita (su base BF/CS)"
        },
        {
          "tipoPromo" :"PROMO_ID6_2",
          "promo":"PROMO ID7 Ricarica",
          "description": "Promo che fornisce in fase di vendita, da canale Web ed in un determinato periodo, un Coupon che elargirà un bonus aggiuntivo di ricarica alla prossima ricarica. Il coupon verrà erogato solo se la ricarica è effettuata in un determinato periodo e con un determinato taglio; il bonus sarà erogato solo se la successiva ricarica sarà effettuata in un determinato periodo e con un determinato taglio"
        }
      ]
    },
    "promoList": {
      title: "Promo List",
      PROMO_ID1: {
        columns: [
          {'model': 'codicePromo', 'title': 'Codice Promo', 'type': 'text'},
          {'model': 'nomePromo', 'title': 'Nome Promo', 'type': 'text'},
          {'model': 'descrizionePromo', 'title': 'Descrizione Promo', 'type': 'text'},
          {'model': 'periodoValidita', 'title': 'Periodo Validita', 'type': 'text'}
        ]
      },
      PROMO_ID2: {
        columns: [
          {'model': 'codicePromo', 'title': 'Codice Promo', 'type': 'text'},
          {'model': 'nomePromo', 'title': 'Nome Promo', 'type': 'text'},
          {'model': 'descrizionePromo', 'title': 'Descrizione Promo', 'type': 'text'},
          {'model': 'periodoValidita', 'title': 'Periodo Validita', 'type': 'text'}
        ]
      },
      PROMO_ID3: {
        columns: [
          {'model': 'codicePromo', 'title': 'Codice Promo', 'type': 'text'},
          {'model': 'nomePromo', 'title': 'Nome Promo', 'type': 'text'},
          {'model': 'descrizionePromo', 'title': 'Descrizione Promo', 'type': 'text'},
          {'model': 'periodoValidita', 'title': 'Periodo Validita', 'type': 'text'}
        ]
      },
      PROMO_ID4: {
        columns: [
          {'model': 'codicePromo', 'title': 'Codice Promo', 'type': 'text'},
          {'model': 'nomePromo', 'title': 'Nome Promo', 'type': 'text'},
          {'model': 'descrizionePromo', 'title': 'Descrizione Promo', 'type': 'text'},
          {'model': 'periodoValidita', 'title': 'Periodo Validita', 'type': 'text'}
        ]
      },
      PROMO_ID5: {
        columns: [
          {'model': 'codicePromo', 'title': 'Codice Promo', 'type': 'text'},
          {'model': 'nomePromo', 'title': 'Nome Promo', 'type': 'text'},
          {'model': 'descrizionePromo', 'title': 'Descrizione Promo', 'type': 'text'},
          {'model': 'periodoValidita', 'title': 'Periodo Validita', 'type': 'text'}
        ]
      },
      PROMO_ID6_1: {
        columns: [
          {'model':'codicePromo','title':'Codice promo','type':'text'},
          {'model':'descrizionePromo','title':'Descrizione promo','type':'text'},
          {'model':'periodoValidita','title':'Periodo Validita','type':'text'},
          {'model':'periodoGenerazione','title':'Periodo Generazione','type':'text'},
          {'model':'codiceTemplateSMS','title':'Codice Template SMS','type':'text'},
          {'model':'codiceTemplateMail','title':'Codice Template Mail','type':'text'},
          {'model':'flagLinea','title':'FlagLinea','type':'text'},
          {'model':'qtyRiusoCoupon','title':'QtyRiusoCoupon','type':'text'}
        ]
      },
      PROMO_ID6_2: {
        columns: [
          {'model':'codicePromo','title':'Codice promo','type':'text'},
          {'model':'descrizionePromo','title':'Descrizione promo','type':'text'},
          {'model':'periodoValidita','title':'Periodo Validita','type':'text'},
          {'model':'periodoGenerazione','title':'Periodo Generazione','type':'text'},
          {'model':'codiceTemplateSMS','title':'Codice Template SMS','type':'text'},
          {'model':'codiceTemplateMail','title':'Codice Template Mail','type':'text'},
          {'model':'flagLinea','title':'FlagLinea','type':'text'},
          {'model':'qtyRiusoCoupon','title':'QtyRiusoCoupon','type':'text'}
        ]
      },
      PROMO_ID7: {
        columns: [
          {'model':'codicePromo','title':'Codice promo','type':'text'},
          {'model':'descrizionePromo','title':'Descrizione promo','type':'text'},
          {'model':'periodoValidita','title':'Periodo Validita','type':'text'},
          {'model':'periodoGenerazione','title':'Periodo Generazione','type':'text'},
          {'model':'codiceTemplateSMS','title':'Codice Template SMS','type':'text'},
          {'model':'codiceTemplateMail','title':'Codice Template Mail','type':'text'},
          {'model':'flagLinea','title':'FlagLinea','type':'text'},
          {'model':'qtyRiusoCoupon','title':'QtyRiusoCoupon','type':'text'}
        ]
      },

    },
    "promoListDetail": {
      title: "Condition List",
      PROMO_ID1:
      {
        buttons:
          [
            {
              'name': 'Ricerca BF',
              clbk:function(){

              console.log("called Ricerca BF");
              $state.go("promoSearch",{
                'type'      : 'attributiBF',
                'tipoPromo' : $state.params.tipoPromo,
                'codicePromo': $state.params.codicePromo
              });
            }
            }
          ],
        columns: [
          {'model':'NMU','title':'NMU','type':'text'},
          {'model':'isPadre','title':'IsPadre',editable:true, 'type': 'options','options': lovService.getBooleanTypes()},
          {'model':'price','title':'Prezzo','type':'text', editable:true},
          {'model':'scontoValore','title':'Sconto a Valore','type':'text', editable:true, mutualExclusive: 'scontoPercentuale'},
          {'model':'scontoPercentuale','title':'Sconto a Percentuale','type':'text', editable: true, mutualExclusive: 'scontoValore'}
        ]
      },
      PROMO_ID2:
      {
        buttons:
          [
            {
              'name': 'Ricerca CS', clbk:function(){
              console.log("called Ricerca CS")
              $state.go("promoSearch",{
                'type'      : 'attributiCS',
                'tipoPromo' : $state.params.tipoPromo,
                'codicePromo': $state.params.codicePromo
              });

            }
            }
          ],
        columns: [
          {'model':'nomeOfferta','title':'Offerta','type':'text'},
          {'model':'cartaServizi','title':'Carta Servizi','type':'text'},
          {'model':'scontoValore','title':'Sconto a Valore','type':'text', editable:true, mutualExclusive: 'scontoPercentuale'},
          {'model':'scontoPercentuale','title':'Sconto a Percentuale','type':'text', editable: true, mutualExclusive: 'scontoValore'}
        ]
      },
      PROMO_ID3:
      {
        buttons:
          [

            {
              'name': 'Ricerca CS2P', clbk:function(params){
              console.log("called Ricerca CS2P")
              $state.go("promoSearch",{
                'type'      : 'attributiCS',
                'tipoPromo' : $state.params.tipoPromo,
                'codicePromo': $state.params.codicePromo
              });
            }
            },
            {
              'name': 'Ricerca BF2P', clbk:function(params){
              console.log("called Ricerca BF2P")
              $state.go("promoSearch",{
                'type'      : 'attributiBF',
                'tipoPromo' : $state.params.tipoPromo,
                'codicePromo': $state.params.codicePromo
              });
            }
            },

            {
              'name': 'Ricerca CSBonus', clbk:function(params){
              console.log("called Ricerca CSBonus")
              $state.go("promoSearch",{
                'type'      : 'attributiCS',
                'tipoPromo' : $state.params.tipoPromo,
                'codicePromo': $state.params.codicePromo
              });
            }
            },

            {
              'name': 'Ricerca BFBonus', clbk:function(params){
              console.log("called Ricerca BFBonus")
              $state.go("promoSearch",{
                'type'      : 'attributiBF',
                'tipoPromo' : $state.params.tipoPromo,
                'codicePromo': $state.params.codicePromo
              });
            }
            }
          ],
        columns: [
          {'model':'tipologiaVendita','title':'Tipologia Vendita','type':'text'},
          {'model':'taglioRicarica','title':'Taglio Ricarica','type':'text'},
          {'model':'offerta','title':'Offerta','type':'text'},
          {'model':'CS2Purchase','title':'CS2Purchase','type':'text'},
          {'model':'BF2Purchase','title':'BF2Purchase','type':'text'},
          {'model':'isPadre','title':'IsPadre','type':'text'},
          {'model':'offerta2','title':'Offerta','type':'text'},
          {'model':'CSwithBonus','title':'CSwithBonus','type':'text'},
          {'model':'BFwithBonus','title':'BFwithBonus','type':'text'},
          {'model':'isPadre2','title':'IsPadre','type':'text'},
          {'model':'scontoValore','title':'Sconto a valore','type':'text'},
          {'model':'scontoPercentuale','title':'Sconto in percentuale','type':'text'}
        ]
      },
      PROMO_ID4:
      {
        columns: [
          {'model':'nomeOfferta','title':'Offerta','type':'text'},
          {'model':'cartaServizi','title':'Carta Servizi','type':'text'},
          {'model':'scontoValore','title':'Sconto a Valore','type':'text'},
          {'model':'scontoPercentuale','title':'Sconto a Percentuale','type':'text'}
        ]
      },
      PROMO_ID5:
      {
        columns: [
          {'model':'codicePromo','title':'Codice Promo','type':'text'},
          {'model':'nomePromo','title':'Nome Promo','type':'text'},
          {'model':'descrizionePromo','title':'Descrizione Promo','type':'text'},
          {'model':'periodoValidita','title':'Periodo Validita','type':'text'}
        ]
      },
      PROMO_ID6_1:
      {
        columns: [
          {'model':'codicePromo','title':'Codice promo','type':'text'},
          {'model':'descrizionePromo','title':'Descrizione promo','type':'text'},
          {'model':'periodoValidita','title':'Periodo Validita','type':'text'},
          {'model':'periodoGenerazione','title':'Periodo Generazione','type':'text'},
          {'model':'codiceTemplateSMS','title':'Codice Template SMS','type':'text'},
          {'model':'codiceTemplateMail','title':'Codice Template Mail','type':'text'},
          {'model':'flagLinea','title':'Flag Linea','type':'text'},
          {'model':'qtyRiusoCoupon','title':'Qty Riuso Coupon','type':'text'}

        ]
      },
      PROMO_ID6_2:
      {
        columns: [
          {'model':'totaleCarrello','title':'Totale Carrello','type':'text'},
          {'model':'offerta','title':'Offerta','type':'text'},
          {'model':'CSwithBonus','title':'CSwithBonus','type':'text'},
          {'model':'BFwithBonus','title':'BFwithBonus','type':'text'},
          {'model':'isPadre','title':'IsPadre','type':'text'},
          {'model':'scontoValore','title':'Sconto a valore','type':'text'},
          {'model':'scontoPercentuale','title':'Sconto in percentuale','type':'text'}
        ]
      },
      PROMO_ID7:
      {
        columns: [
          {'model':'taglioRicaricaGenerazione','title':'Taglio Ricarica Generazione','type':'text'},
          {'model':'bonus','title':'Bonus','type':'text'},
          {'model':'taglioRicaricaBonus','title':'Taglio Ricarica Bonus','type':'text'}
        ]
      }
    },
    "promoSearch":
    {

    },
    pack:
    {

    }
  };
}]);
