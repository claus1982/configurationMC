angular.module('app').factory('dataTableResources', ['lovService','regexService', function (lovService, regexService) {
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
          {'model': 'nomePromo', 'title': 'Nome Promo', 'type': 'text',editable:true, required:true},
          {'model': 'descrizionePromo', 'title': 'Descrizione Promo', 'type': 'text',editable:true, required:true},
          {'model': 'periodoValidita', 'title': 'Periodo Validita', 'type': 'text',editable:true, required:true}
        ]
      },
      PROMO_ID2: {
        columns: [
          {'model': 'codicePromo', 'title': 'Codice Promo', 'type': 'text'},
          {'model': 'nomePromo', 'title': 'Nome Promo', 'type': 'text',editable:true, required:true},
          {'model': 'descrizionePromo', 'title': 'Descrizione Promo', 'type': 'text',editable:true, required:true},
          {'model': 'periodoValidita', 'title': 'Periodo Validita', 'type': 'text',editable:true, required:true}
        ]
      },
      PROMO_ID3: {
        columns: [
          {'model': 'codicePromo', 'title': 'Codice Promo', 'type': 'text'},
          {'model': 'nomePromo', 'title': 'Nome Promo', 'type': 'text',editable:true, required:true},
          {'model': 'descrizionePromo', 'title': 'Descrizione Promo', 'type': 'text',editable:true, required:true},
          {'model': 'periodoValidita', 'title': 'Periodo Validita', 'type': 'text',editable:true, required:true}
        ]
      },
      PROMO_ID4: {
        columns: [
          {'model': 'codicePromo', 'title': 'Codice Promo', 'type': 'text'},
          {'model': 'nomePromo', 'title': 'Nome Promo', 'type': 'text',editable:true, required:true},
          {'model': 'descrizionePromo', 'title': 'Descrizione Promo', 'type': 'text',editable:true, required:true},
          {'model': 'periodoValidita', 'title': 'Periodo Validita', 'type': 'text',editable:true, required:true}
        ]
      },
      PROMO_ID5: {
        columns: [
          {'model': 'codicePromo', 'title': 'Codice Promo', 'type': 'text'},
          {'model': 'nomePromo', 'title': 'Nome Promo', 'type': 'text',editable:true, required:true},
          {'model': 'descrizionePromo', 'title': 'Descrizione Promo', 'type': 'text',editable:true, required:true},
          {'model': 'periodoValidita', 'title': 'Periodo Validita', 'type': 'text',editable:true, required:true}
        ]
      },
      PROMO_ID6_1: {
        columns: [
          {'model':'codicePromo','title':'Codice promo','type':'text'},
          {'model':'promoBatch','title':'Promo Batch','type':'options',
            'options': lovService.getBooleanTypes(), editable:true,required:true, 'batchEnabler': true},
          {'model':'descrizionePromo','title':'Descrizione promo','type':'text',editable:true, required:true,
            'batchDisabled':true},
          {'model':'periodoGenerazione','title':'Periodo Generazione','type':'text',editable:true,required:true,
            'batchDisabled':true},
          {'model':'periodoValidita','title':'Periodo Validita','type':'text',editable:true,required:true,
            'batchDisabled':true},
          {'model':'codiceTemplateSMS','title':'Codice Template SMS','type':'text', editable:true,required:true,
            'batchDisabled':true},
          {'model':'codiceTemplateMAIL','title':'Codice Template Mail','type':'text',editable:true,required:true,
            'batchDisabled':true},
          {'model':'flagLinea','title':'FlagLinea','type':'options',
            'options': lovService.getBooleanTypes(), editable:true,required:true, 'batchDisabled':true},
          {'model':'limiteUtilizzoCoupon','title':'Limite Utilizzo Coupon','type':'text',editable:true,required:true,
            'batchDisabled':true}
        ]
      },
      PROMO_ID6_2: {
        columns: [
          {'model':'codicePromo','title':'Codice promo','type':'text'},
          {'model':'promoBatch','title':'Promo Batch','type':'options',
            'options': lovService.getBooleanTypes(), editable:true,required:true,'batchEnabler': true},
          {'model':'descrizionePromo','title':'Descrizione promo','type':'text',editable:true, required:true,
            'batchDisabled':true},
          {'model':'periodoGenerazione','title':'Periodo Generazione','type':'text',editable:true, required:true,
            'batchDisabled':true},
          {'model':'periodoValidita','title':'Periodo Validita','type':'text',editable:true,required:true,
            'batchDisabled':true},
          {'model':'codiceTemplateSMS','title':'Codice Template SMS','type':'text',editable:true, required:true,
            'batchDisabled':true},
          {'model':'codiceTemplateMAIL','title':'Codice Template Mail','type':'text',editable:true, required:true,
            'batchDisabled':true},
          {'model':'flagLinea','title':'FlagLinea','type':'options', 'options': lovService.getBooleanTypes()
            ,editable:true, required:true,'batchDisabled':true},
          {'model':'limiteUtilizzoCoupon','title':'Limite Utilizzo Coupon','type':'text',editable:true, required:true,
            'batchDisabled':true}
        ]
      },
      PROMO_ID7: {
        columns: [
          {'model':'codicePromo','title':'Codice promo','type':'text'},
          {'model':'promoBatch','title':'Promo Batch','type':'options',
            'options': lovService.getBooleanTypes(), editable:true,required:true,'batchEnabler': true},
          {'model':'descrizionePromo','title':'Descrizione promo','type':'text',editable:true, required:true,
            'batchDisabled':true},
          {'model':'periodoGenerazione','title':'Periodo Generazione','type':'text',editable:true, required:true,
            'batchDisabled':true},
          {'model':'periodoValidita','title':'Periodo Validita','type':'text',editable:true,required:true,
            'batchDisabled':true},
          {'model':'codiceTemplateSMS','title':'Codice Template SMS','type':'text',editable:true, required:true,
            'batchDisabled':true},
          {'model':'codiceTemplateMAIL','title':'Codice Template Mail','type':'text',editable:true, required:true,
            'batchDisabled':true},
          {'model':'flagLinea','title':'FlagLinea','type':'options', 'options': lovService.getBooleanTypes()
            ,editable:true, required:true,'batchDisabled':true},
          {'model':'limiteUtilizzoCoupon','title':'Limite Utilizzo Coupon','type':'text',editable:true, required:true,
            'batchDisabled':true}
        ]
      }
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
              'columns': [{model:'BF2Purchase', 'refModel': 'nmu'}]
            }
          ],
        columns: [
          {'model':'BF2Purchase','title':'NMU','type':'text',required:true},
          {'model':'isPadreBF2Purchase','title':'IsPadre','type':'options',
            'options': lovService.getBooleanTypes(),  editable:true,required:true},
          {'model':'priceActivation','title':'Prezzo','type':'number', editable:true, required:true},
          {'model':'scontoValore','title':'Sconto a Valore',
            'type':'number', 'step':'0.01', pattern:regexService.scontoValore,maxlength:"10",
            editable:true, mutuallyExclusive: 'scontoPercentuale'},
          {'model':'scontoPercentuale', 'title':'Sconto a Percentuale',
            'type':'number', 'step':'0.01', pattern:regexService.percentuale, maxlength:"5",
            editable: true, mutuallyExclusive: 'scontoValore'}
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
              'reference': 'attributi.CS',
              'columns': [
                {model: 'offerta', 'refModel': 'nomeOfferta', compare: true},
                {model:'CS2Purchase', 'refModel': 'codiceCartaServizi'}]
            }
          ],
        columns: [
          {'model':'offerta','title':'Offerta','type':'text'},
          {'model':'CS2Purchase','title':'Carta Servizi','type':'text'},
          {'model':'scontoValore','title':'Sconto a Valore',
            'type':'number', 'step':'0.01', pattern:regexService.scontoValore,maxlength:"10",
            editable:true, mutuallyExclusive: 'scontoPercentuale'},
          {'model':'scontoPercentuale', 'title':'Sconto a Percentuale',
            'type':'number', 'step':'0.01', pattern:regexService.percentuale, maxlength:"5",
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
              'reference': 'attributi.CS',
              'columns': [
                {model: 'offerta', 'refModel': 'nomeOfferta', compare: true},
                {model:'CS2Purchase', 'refModel': 'codiceCartaServizi', append: true}]
            },
            {
              'label': 'Ricerca BF2P',
              'model': 'BF2P',
              required: true,
              'multiple': true,
              'reference': 'attributi.BF',
              'columns': [
                {model:'BF2Purchase', 'refModel': 'nmu',append: true}]
            },
            {
              'label': 'Ricerca CSBonus',
              'model': 'CSBonus',
              mutuallyExclusive: 'BFBonus',
              'reference': 'attributi.CS',
              'columns': [
                {model: 'offerta', 'refModel': 'nomeOfferta', compare: true},
                {model:'CSwithBonus', 'refModel': 'codiceCartaServizi'}]
            },
            {
              'label': 'Ricerca BFBonus',
              'model': 'BFBonus',
              mutuallyExclusive: 'CSBonus',
              'reference': 'attributi.BF',
              'columns': [
                {model:'BFwithBonus', 'refModel': 'nmu'}]
            }
          ],
        columns: [
          {'model':'tipologiaVendita','title':'Tipologia Vendita','type':'options',
            'options': lovService.getSeniorityConstraintWebType(), multiple: true, editable:true,required:true},
          {'model':'taglioRicarica','title':'Taglio Ricarica','type':'number',editable:true,required:true},
          {'model':'offerta','title':'Offerta','type':'text'},
          {'model':'CS2Purchase','title':'CS2Purchase','type':'text', orRequired:'BF2Purchase'},
          {'model':'BF2Purchase','title':'BF2Purchase','type':'text', orRequired:'CS2Purchase'},
          {'model':'isPadreBF2Purchase','title':'IsPadre','type':'options',
            'options': lovService.getBooleanTypes(), editable:true,required:true},
          {'model':'offerta','title':'Offerta','type':'text'},
          {'model':'CSwithBonus','title':'CSwithBonus','type':'text', mutuallyExclusive: 'BFwithBonus'},
          {'model':'BFwithBonus','title':'BFwithBonus','type':'text', mutuallyExclusive: 'CSwithBonus'},
          {'model':'scontoValore','title':'Sconto a Valore',
            'type':'number', 'step':'0.01', pattern:regexService.scontoValore,maxlength:"10",
            editable:true, mutuallyExclusive: 'scontoPercentuale'},
          {'model':'scontoPercentuale', 'title':'Sconto a Percentuale',
            'type':'number', 'step':'0.01', pattern:regexService.percentuale, maxlength:"5",
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
              'reference': 'attributi.CS',
              'columns': [
                {model: 'offerta', 'refModel': 'nomeOfferta', compare: true},
                {model:'CS2Purchase', 'refModel': 'codiceCartaServizi'}]
            },
            {
              'label': 'Ricerca CSBonus',
              'model': 'CSBonus',
              required: true,
              'reference': 'attributi.CS',
              'columns': [
                {model: 'offerta', 'refModel': 'nomeOfferta', compare: true},
                {model:'CSwithBonus', 'refModel': 'codiceCartaServizi'}]
            }
          ],
        columns: [
          {'model':'offerta','title':'Offerta','type':'text', required: true},
          {'model':'CS2Purchase','title':'CS2Purchase','type':'text',required: true},
          {'model':'offerta','title':'Offerta','type':'text', required: true},
          {'model':'CSwithBonus','title':'CSwithBonus','type':'text',required: true}
        ]
      },
      PROMO_ID5:
      {
        title: "PROMO ID5",
        columns: [
          {'model':'tipologiaVendita','title':'Tipologia Vendita','type':'options',
            'options': lovService.getSeniorityConstraintWebType(), multiple: true, editable:true,required:true},
          {'model':'scontoValore','title':'Sconto a Valore',
            'type':'number', 'step':'0.01', pattern:regexService.scontoValore,maxlength:"10",
            editable:true, mutuallyExclusive: 'scontoPercentuale'},
          {'model':'scontoPercentuale', 'title':'Sconto a Percentuale',
            'type':'number', 'step':'0.01', pattern:regexService.percentuale, maxlength:"5",
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
            //batchDisabled: indica se il pulsante va disabilitato in caso di promoBatch

            {
              'label': 'Ricerca CS2P',
              'model': 'CS2P',
              orRequired: 'BF2P',
              mutuallyExclusive: 'BF2P',
              'reference': 'attributi.CS',
              //compare: in caso di selezioni multiple si verifica che abbiano tutti lo stesso campo
              //append: indica se il campo va aggiunto in append al contenuto esistente
              //model: indica il nome del campo così come viene recuperato dagli attributi
              //refModel: indica il nome del campo mappato sulla condition
              'columns': [
                {model: 'offerta', 'refModel': 'nomeOfferta', compare: true},
                {model:'CS2Purchase', 'refModel': 'codiceCartaServizi'}],
              'batchDisabled':true
            },
            {
              'label': 'Ricerca BF2P',
              'model': 'BF2P',
              orRequired: 'CS2P',
              mutuallyExclusive: 'CS2P',
              'reference': 'attributi.BF',
              'columns': [{model:'BF2Purchase', 'refModel': 'nmu'}],
              'batchDisabled':true
            },
            {
              'label': 'Ricerca CSBonus',
              'model': 'CSBonus',
              mutuallyExclusive: 'BFBonus',
              'reference': 'attributi.CS',
              'columns': [
                {model: 'offerta', 'refModel': 'nomeOfferta',compare: true},
                {model:'CSwithBonus','refModel': 'codiceCartaServizi'}]
            },
            {
              'label': 'Ricerca BFBonus',
              'model': 'BFBonus',
              mutuallyExclusive: 'CSBonus',
              'reference': 'attributi.BF',
              'columns': [{model:'BFwithBonus', 'refModel': 'nmu'}]
            }
          ],
        columns: [
          {'model':'offerta','title':'Offerta','type':'text', required: true, 'batchDisabled':true},
          {'model':'CS2Purchase','title':'CS2Purchase','type':'text', orRequired:'BF2Purchase', 'batchDisabled':true},
          {'model':'BF2Purchase','title':'BF2Purchase','type':'text', orRequired:'CS2Purchase', 'batchDisabled':true},
          {'model':'isPadreBF2Purchase','title':'IsPadre','type':'options',
            'options': lovService.getBooleanTypes(),  editable:true,required:true, 'batchDisabled':true},
          {'model':'offerta','title':'Offerta','type':'text'},
          {'model':'CSwithBonus','title':'CSwithBonus','type':'text',  mutuallyExclusive: 'BFwithBonus'},
          {'model':'BFwithBonus','title':'BFwithBonus','type':'text', mutuallyExclusive: 'CSwithBonus'},
          {'model':'scontoValore','title':'Sconto a Valore',
            'type':'number', 'step':'0.01', pattern:regexService.scontoValore,maxlength:"10",
            editable:true, mutuallyExclusive: 'scontoPercentuale'},
          {'model':'scontoPercentuale', 'title':'Sconto a Percentuale',
            'type':'number', 'step':'0.01', pattern:regexService.percentuale, maxlength:"5",
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
                {model: 'offerta', 'refModel': 'nomeOfferta',compare: true},
                {model:'CSwithBonus','refModel': 'codiceCartaServizi'}]

            },
            {
              'label': 'Ricerca BFBonus',
              'model': 'BFBonus',
              mutuallyExclusive: 'CSBonus',
              orRequired: 'CSBonus',
              'reference': 'attributi.BF',
              'columns': [
                {model: 'offerta', 'refModel': 'nomeOfferta',compare: true},
                {model:'BFwithBonus','refModel': 'codiceCartaServizi'}]

            }
          ],
        columns: [
          {'model':'totaleCarrello','title':'Totale Carrello','type':'number',
            maxlength:"10", editable:true, required:true, 'batchDisabled':true},
          {'model':'offerta','title':'Offerta','type':'text'},
          {'model':'CSwithBonus','title':'CSwithBonus','type':'text'},
          {'model':'BFwithBonus','title':'BFwithBonus','type':'text'},
          {'model':'scontoValore','title':'Sconto a Valore',
            'type':'number', 'step':'0.01', pattern:regexService.scontoValore,maxlength:"10",
            editable:true, mutuallyExclusive: 'scontoPercentuale'},
          {'model':'scontoPercentuale', 'title':'Sconto a Percentuale',
            'type':'number', 'step':'0.01', pattern:regexService.percentuale, maxlength:"5",
            editable: true, mutuallyExclusive: 'scontoValore'}
        ]
      },
      PROMO_ID7:
      {
        title: "PROMO ID7",
        addDisabledIfBatch:true,
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
