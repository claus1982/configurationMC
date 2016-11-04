angular.module('app').factory('dataTableResources', ['lovService','$state', function (lovService, $state) {
  'use strict';
  var attributi = {
    "attributi.CS":
    {
      title: "Attributi CS",
      getOperation: "getCSWeb",
      setOperation: "setCSWeb",
      searchParams : [
        {'name': 'nomeOfferta', 'title': 'Nome Gamma', 'type': 'text', minlength:'4'},
        {'name': 'nomeProdotto', 'title': 'Nome Carta Servizi', 'type': 'text',minlength:'4'}],

      columns: [
        {'model': 'nomeOfferta', 'title': 'Nome Gamma', 'type': 'text'},
        {'model': 'nomeProdotto', 'title': 'Nome Carta Servizi', 'type': 'text'},
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
          'model': 'seniorityConstraintWeb',
          'title': 'seniorityConstraintWeb',
          'type': 'selection',
          'multiple': true,

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
          'type': 'selection',
          'multiple': true,

          'editable': true
        }
      ]
    },
    "attributi.BF":
    {
      title: "Attributi BF",
      getOperation: "getBFWeb",
      setOperation: "setBFWeb",
      searchParams : [
        {'name': 'nomeProdotto', 'title': 'Nome Prodotto', 'type': 'text', minlength:'6'},
        {'name': 'nmu', 'title': 'NMU', 'type': 'text', minlength:'6', maxlength:'6'},
        {'name': 'descrizioneModello', 'title': 'Descrizione Modello', 'type': 'text', minlength:'2'},
        {'name': 'descrizioneBrand', 'title': 'Descrizione Brand', 'type': 'text',minlength:'2'},
        {'name': 'nmuPadre', 'title': 'NMU Padre', 'type': 'text', minlength:'6', maxlength:'6'}
      ],
      columns: [
        {'model':'nomeProdotto','title':'Nome Prodotto','type':'text'},
        {'model':'nmu','title':'NMU','type':'text'},
        {'model':'descrizioneModello','title':'Descrizione Modello','type':'text'},
        {'model':'prezzo','title':'Prezzo','type':'text'},
        {'model':'descrizioneBrand','title':'Descrizione Brand','type':'text'},
        {'model':'nmuPadre','title':'NMU Padre','type':'text'},
        {'model':'webDescription','title':'webDescription','type':'text','editable': true},
        {'model':'longDescriptionWeb','title':'longDescriptionWeb','type':'text','editable': true},
        {'model': 'seniorityConstraintWeb',
          'title': 'seniorityConstraintWeb',
          'type': 'selection',
          'multiple': true,

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
          'type': 'selection',
          'multiple': true,

          'editable': true
        },
        {'model':'regalabile','title':'regalabile','type':'options','editable': true,'options': lovService.getBooleanTypes()},
        {'model':'pianoTariffarioWeb','title':'pianoTariffarioWeb','type':'text','editable': true},
        {'model':'tidWeb','title':'tidWeb','type':'text','editable': true}
      ]
    },
    "attributi.SIM":
    {
      title: "Attributi SIM",
      getOperation: "getSIMWeb",
      setOperation: "setSIMWeb",
      searchParams : [
        {'name': 'nomeProdotto', 'title': 'Nome Prodotto', 'type': 'text', 'disabled': true, 'model':"SIM"}
      ],


      columns: [
        {'model':'nomeProdotto','title':'Nome Prodotto','type':'text'},
        {'model':'webDescription','title':'webDescription','type':'text','editable': true},
        {'model':'longDescriptionWeb','title':'longDescriptionWeb','type':'text','editable': true},
        {'model': 'seniorityConstraintWeb',
          'title': 'seniorityConstraintWeb',
          'type': 'selection',
          'multiple': true,
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
          'type': 'selection',
          'multiple': true,

          'editable': true
        },
        {'model':'pianoTariffarioWeb','title':'pianoTariffarioWeb','type':'text','editable': true},
        {'model':'tidWeb','title':'tidWeb','type':'text','editable': true}
      ]
    },
    "attributi.ricarica":
    {
      title: "Attributi Ricarca",
      getOperation: "getRicaricaWeb",
      setOperation: "setRicaricaWeb",
      searchParams : [
        {'name': 'nomeProdotto', 'title': 'Nome Prodotto', 'type': 'text','model':"Ricarica",minlength:'4'}
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
          'type': 'selection',
          'multiple': true,

          'editable': true
        },
        {
          'model': 'priorityRecharge',
          'title': 'priorityRecharge',
          'type': 'text',
          'editable': true
        }
      ]
    }

  };
  return {

    "attributi.CS": attributi["attributi.CS"],
    "attributi.BF":  attributi["attributi.BF"],
    "attributi.SIM":  attributi["attributi.SIM"],
    "attributi.ricarica":  attributi["attributi.ricarica"],
    "promo.categories":
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
          "promo":"PROMO ID6.1 Coupon per BF/CS",
          "description": "Promo che fornisce in fase di vendita, da canale Web ed in un determinato periodo, un Coupon che elargirà uno sconto in una successiva post-vendita (su base BF/CS)"
        },
        {
          "tipoPromo" :"PROMO_ID6_2",
          "promo":"PROMO ID6.2 Coupon carrello",
          "description": "Promo che fornisce in fase di vendita, da canale Web ed in un determinato periodo, un Coupon che elargirà uno sconto in una successiva post-vendita (su base totale a carrello)"
        },
        {
          "tipoPromo" :"PROMO_ID7",
          "promo":"PROMO ID7 Ricarica",
          "description": "Promo che fornisce in fase di vendita, da canale Web ed in un determinato periodo, un Coupon che elargirà un bonus aggiuntivo di ricarica alla prossima ricarica. Il coupon verrà erogato solo se la ricarica è effettuata in un determinato periodo e con un determinato taglio; il bonus sarà erogato solo se la successiva ricarica sarà effettuata in un determinato periodo e con un determinato taglio"
        }
      ]
    },
    "promo.list": {
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
          {'model':'codicePromo','title':'Codice promo','type':'text', 'disabled': true},
          {'model':'descrizionePromo','title':'Descrizione promo','type':'text', required:true},
          {'model':'periodoValidita','title':'Periodo Validita','type':'datepicker',required:true},
          {'model':'periodoGenerazione','title':'Periodo Generazione','type':'text',required:true},
          {'model':'codiceTemplateSMS','title':'Codice Template SMS','type':'text', required:true },
          {'model':'codiceTemplateMAIL','title':'Codice Template Mail','type':'text',required:true},
          {'model':'flagLinea','title':'FlagLinea','type':'text',required:true},
          {'model':'limiteUtilizzoCoupon','title':'Limite Utilizzo Coupon','type':'text',required:true}
        ]
      },
      PROMO_ID6_2: {
        columns: [
          {'model':'codicePromo','title':'Codice promo','type':'text'},
          {'model':'descrizionePromo','title':'Descrizione promo','type':'text'},
          {'model':'periodoValidita','title':'Periodo Validita','type':'text'},
          {'model':'periodoGenerazione','title':'Periodo Generazione','type':'text'},
          {'model':'codiceTemplateSMS','title':'Codice Template SMS','type':'text'},
          {'model':'codiceTemplateMAIL','title':'Codice Template Mail','type':'text'},
          {'model':'flagLinea','title':'FlagLinea','type':'text'},
          {'model':'limiteUtilizzoCoupon','title':'Limite Utilizzo Coupon','type':'text'}
        ]
      },
      PROMO_ID7: {
        columns: [
          {'model':'codicePromo','title':'Codice promo','type':'text'},
          {'model':'descrizionePromo','title':'Descrizione promo','type':'text'},
          {'model':'periodoValidita','title':'Periodo Validita','type':'text'},
          {'model':'periodoGenerazione','title':'Periodo Generazione','type':'text'},
          {'model':'codiceTemplateSMS','title':'Codice Template SMS','type':'text'},
          {'model':'codiceTemplateMAIL','title':'Codice Template Mail','type':'text'},
          {'model':'flagLinea','title':'FlagLinea','type':'text'},
          {'model':'limiteUtilizzoCoupon','title':'Limite Utilizzo Coupon','type':'text'}
        ]
      },

    },
    "promo.detail": {
      title: "Condition List",
      PROMO_ID1:
      {
        title: "PROMO ID1",
        buttons:
          [
            {
              'label': 'Ricerca BF',
              'model': 'BF',
              'reference': 'attributi.BF',
              'multiple': false
            }
          ],
        columns: [
          {'model':'BF2Purchase','title':'NMU','type':'number'},
          {'model':'isPadreBF2Purchase','title':'isPadre','type':'boolean'},
          {'model':'prezzo','title':'Prezzo','type':'number'},
          {'model':'scontoValore','title':'Sconto Valore','type':'number'},
          {'model':'scontoPercentuale','title':'Sconto Percentuale','type':'number'}
        ]
      },
      PROMO_ID2:
      {
        title: "PROMO ID2",
        buttons:
          [
            {
              'label': 'Ricerca CS',
              'model': 'CS',
              'multiple': false
            }
          ],
        columns: [
          {'model':'nomeOfferta','title':'Offerta','type':'text'},
          {'model':'cartaServizi','title':'Carta Servizi','type':'text'},
          {'model':'scontoValore','title':'Sconto a Valore',
            'type':'number', 'step':'0.01', pattern:/^[0-9]+(\.[0-9]{1,2})?$/,maxlength:"10",
            editable:true, mutuallyExclusive: 'scontoPercentuale'},
          {'model':'scontoPercentuale', 'title':'Sconto a Percentuale',
            'type':'number', 'step':'0.01', pattern:/^[0-9]+(\.[0-9]{1,2})?$/, maxlength:"5",
            editable: true, mutuallyExclusive: 'scontoValore'}
        ]
      },
      PROMO_ID3:
      {
        title: "PROMO ID3",
        buttons:
          [
            {
              'label': 'Ricerca CS2P',
              'model': 'CS2P',
              required: true,
              'multiple': true,
              'reference': 'attributi.CS'
            },
            {
              'label': 'Ricerca BF2P',
              'model': 'BF2P',
              required: true,
              'multiple': true,
              'reference': 'attributi.BF'
            },
            {
              'label': 'Ricerca CSBonus',
              'model': 'CSBonus',
              mutuallyExclusive: 'BFBonus',
              'multiple': false,
              'reference': 'attributi.CS'
            },
            {
              'label': 'Ricerca BFBonus',
              'model': 'BFBonus',
              mutuallyExclusive: 'CSBonus',
              'multiple': false,
              'reference': 'attributi.BF'
            }
          ],
        columns: [
          {'model':'tipologiaVendita','title':'Tipologia Vendita','type':'text'},
          {'model':'taglioRicarica','title':'Taglio Ricarica','type':'text'},
          {'model':'nomeOfferta','title':'Offerta','type':'text'},
          {'model':'CS2Purchase','title':'CS2Purchase','type':'text'},
          {'model':'BF2Purchase','title':'BF2Purchase','type':'text'},
          {'model':'isPadreBF2Purchase','title':'IsPadre','type':'text'},
          {'model':'nomeOfferta','title':'Offerta','type':'text'},
          {'model':'CSwithBonus','title':'CSwithBonus','type':'text'},
          {'model':'BFwithBonus','title':'BFwithBonus','type':'text'},
          {'model':'isPadreBFwithBonus','title':'IsPadre','type':'text'},
       -  {'model':'scontoValore','title':'Sconto a Valore',
         'type':'number', 'step':'0.01', pattern:/^[0-9]+(\.[0-9]{1,2})?$/,maxlength:"10",
         editable:true, mutuallyExclusive: 'scontoPercentuale'},
          {'model':'scontoPercentuale', 'title':'Sconto a Percentuale',
            'type':'number', 'step':'0.01', pattern:/^[0-9]+(\.[0-9]{1,2})?$/, maxlength:"5",
            editable: true, mutuallyExclusive: 'scontoValore'}
        ]
      },
      PROMO_ID4:
      {
        title: "PROMO ID4",
        buttons:
          [
            {
              'label': 'Ricerca CS2P',
              'model': 'CS2P',
              required: true,
              'multiple': false
            },
            {
              'label': 'Ricerca CSBonus',
              'model': 'CSBonus',
              required: true,
              'multiple': false
            }
          ],
        columns: [
          {'model':'nomeOfferta','title':'Offerta','type':'text'},
          {'model':'CS2Purchase','title':'CS2Purchase','type':'text'},
          {'model':'nomeOfferta2','title':'Offerta','type':'text'},
          {'model':'CSwithBonus','title':'CSwithBonus','type':'text'}
        ]
      },
      PROMO_ID5:
      {
        title: "PROMO ID5",
        columns: [
          {'model':'tipologiaVendita','title':'Tipologia Vendita','type':'text'},
          {'model':'scontoValore','title':'Sconto a Valore',
            'type':'number', 'step':'0.01', pattern:/^[0-9]+(\.[0-9]{1,2})?$/,maxlength:"10",
            editable:true, mutuallyExclusive: 'scontoPercentuale'},
          {'model':'scontoPercentuale', 'title':'Sconto a Percentuale',
            'type':'number', 'step':'0.01', pattern:/^[0-9]+(\.[0-9]{1,2})?$/, maxlength:"5",
            editable: true, mutuallyExclusive: 'scontoValore'}
        ]
      },
      PROMO_ID6_1:
      {
        title: "PROMO ID6_1",
        buttons:
          [
            //label: nome del pulsante da mostrare
            //model: identificativo del button
            //orRequired: indica se è obbligatorio in alternativa ad un altro pulsante
            //mutuallyEsclusive: indica un pulsante per cui c'è mutua esclusività
            //multiple: indica se è possibile una selezione multipla di record
            //reference: indica quale ricerca di attributi deve essere richiamata quando si clicca il pulsante

            {
              'label': 'Ricerca CS2P',
              'model': 'CS2P',
              orRequired: 'BF2P',
              mutuallyExclusive: 'BF2P',
              'multiple': true,
              'reference': 'attributi.CS',
              //compare: in caso di selezioni multiple si verifica che abbiano tutti lo stesso campo
              //append: indica se il campo va aggiunto al contenuto esistente
              'columns': [
                {model: 'nomeOfferta2P', 'refModel': 'nomeOfferta', compare: true},
                {model:'CS2Purchase', 'refModel': 'codiceCartaServizi', append:true}]
            },
            {
              'label': 'Ricerca BF2P',
              'model': 'BF2P',
              orRequired: 'CS2P',
              mutuallyExclusive: 'CS2P',
              'multiple': false,
              'reference': 'attributi.BF',
              'columns': [{model:'BF2Purchase', 'refModel': 'nmu'}]
            },
            {
              'label': 'Ricerca CSBonus',
              'model': 'CSBonus',
              mutuallyExclusive: 'BFBonus',
              'multiple': false,
              'reference': 'attributi.CS',
              'columns': [
                {model: 'nomeOfferta2P', 'refModel': 'nomeOfferta',compare: true},
                {model:'CSwithBonus','refModel': 'codiceCartaServizi', append:true}]
            },
            {
              'label': 'Ricerca BFBonus',
              'model': 'BFBonus',
              mutuallyExclusive: 'CSBonus',
              'multiple': false,
              'reference': 'attributi.BF',
              'columns': [{model:'BFwithBonus', 'refModel': 'nmu'}]
            }
          ],
        columns: [
          {'model':'nomeOfferta2P','title':'Offerta','type':'text', required: true},
          {'model':'CS2Purchase','title':'CS2Purchase','type':'text', orRequired:'BF2Purchase'},
          {'model':'BF2Purchase','title':'BF2Purchase','type':'text', orRequired:'CS2Purchase'},
          {'model':'isPadreBF2Purchase','title':'IsPadre','type':'options',
            'options': lovService.getBooleanTypes(),  editable:true,required:true},
          {'model':'nomeOfferta2P','title':'Offerta','type':'text'},
          {'model':'CSwithBonus','title':'CSwithBonus','type':'text',  mutuallyExclusive: 'BFwithBonus'},
          {'model':'BFwithBonus','title':'BFwithBonus','type':'text', mutuallyExclusive: 'CSwithBonus'},
          {'model':'scontoValore','title':'Sconto a Valore',
            'type':'number', 'step':'0.01', pattern:/^[0-9]+(\.[0-9]{1,2})?$/,maxlength:"10",
            editable:true, mutuallyExclusive: 'scontoPercentuale'},
          {'model':'scontoPercentuale', 'title':'Sconto a Percentuale',
            'type':'number', 'step':'0.01', pattern:/^[0-9]+(\.[0-9]{1,2})?$/, maxlength:"5",
           editable: true, mutuallyExclusive: 'scontoValore'}

        ]
      },
      PROMO_ID6_2:
      {
        title: "PROMO ID6_2",
        buttons:
          [
            {
              'label': 'Ricerca CSBonus',
              'model': 'CSBonus',
              mutuallyExclusive: 'BFBonus',
              orRequired: 'BFBonus',
              'reference': 'attributi.CS',
              'columns': [
                {model: 'nomeOfferta2P', 'refModel': 'nomeOfferta',compare: true},
                {model:'CSwithBonus','refModel': 'codiceCartaServizi', append:true}]

            },
            {
              'label': 'Ricerca BFBonus',
              'model': 'BFBonus',
              mutuallyExclusive: 'CSBonus',
              orRequired: 'CSBonus',
              'reference': 'attributi.BF',
              'columns': [
                {model: 'nomeOfferta2P', 'refModel': 'nomeOfferta',compare: true},
                {model:'BFwithBonus','refModel': 'codiceCartaServizi', append:true}]

            }
          ],
        columns: [
          {'model':'totaleCarrello','title':'Totale Carrello','type':'number',
            maxlength:"10", editable:true, required:true},
          {'model':'nomeOfferta2P','title':'Offerta','type':'text'},
          {'model':'CSwithBonus','title':'CSwithBonus','type':'text'},
          {'model':'BFwithBonus','title':'BFwithBonus','type':'text'},
          {'model':'scontoValore','title':'Sconto a Valore',
            'type':'number', 'step':'0.01', pattern:/^[0-9]+(\.[0-9]{1,2})?$/,maxlength:"10",
            editable:true, mutuallyExclusive: 'scontoPercentuale'},
          {'model':'scontoPercentuale', 'title':'Sconto a Percentuale',
            'type':'number', 'step':'0.01', pattern:/^[0-9]+(\.[0-9]{1,2})?$/, maxlength:"5",
            editable: true, mutuallyExclusive: 'scontoValore'}
        ]
      },
      PROMO_ID7:
      {
        title: "PROMO ID7",
        columns: [
          {'model':'ricaricaMinGenerazione','title':'Taglio Ricarica Min Generazione','type':'number',
            editable:true, required:true, maxlength:"10"},
          {'model':'ricaricaMaxGenerazione','title':'Taglio Ricarica Max Generazione','type':'number',
            editable:true, required:true,maxlength:"10"},
          {'model':'ricaricaTipoGenerazione','title':'Tipo Ricarica Generazione','type':'options',
            'options': lovService.getRicaricaTypes(),  editable:true,required:true},
          {'model':'ricaricaMinApplicazione','title':'Bonus','type':'number',
            editable:true,required:true,maxlength:"10"},
          {'model':'importoRicaricaBonus','title':'Taglio Ricarica Bonus','type':'number',
            editable:true,required:true,maxlength:"10"},
          {'model':'ricaricaTipoApplicazione','title':'Tipo Ricarica Bonus','type':'options',
            'options': lovService.getRicaricaTypes(), editable:true,required:true}
        ]
      }
    },
    pack:
    {

    }
  };
}]);
