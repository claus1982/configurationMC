angular.module('app').factory('dataTableResources', ['lovService','regexService', function (lovService, regexService) {
  'use strict';
  var today = moment();
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
        {'model': 'nomeOfferta', 'title': 'Nome Gamma', 'type': 'text',
          validators:{'ng-required': true, 'ng-minlength': '1', 'md-maxlength': '40'}},
        {'model': 'nomeProdotto', 'title': 'Nome Carta Servizi', 'type': 'text',
          validators:{'ng-required': true, 'ng-minlength': '1', 'md-maxlength': '40'}},
        {'model': 'codiceCartaServizi', 'title': 'Codice Carta Servizi', 'type': 'text',
          validators:{'ng-required': true, 'ng-minlength': '1', 'md-maxlength': '5'}},
        {
          'model': 'defaultFlag',
          'title': 'defaultFlag',
          'type': 'options',
          'options': lovService.getBooleanTypes(),
          'editable': true
        },
        {'model': 'parentDisplayName', 'title': 'parentDisplayName', 'type': 'text', 'editable': true,
          validators:{'ng-required': true, 'ng-minlength': '1', 'md-maxlength': '100'}},
        {'model': 'webDescription', 'title': 'webDescription', 'type': 'text', 'editable': true,
          validators:{'ng-required': true, 'ng-minlength': '1', 'md-maxlength': '100'}},
        {'model': 'longDescriptionWeb', 'title': 'longDescriptionWeb', 'type': 'text', 'editable': true,
          validators:{'ng-required': true, 'ng-minlength': '1', 'md-maxlength': '100'}},
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
        {'model':'nomeProdotto','title':'Nome Prodotto','type':'text',
          validators:  {'ng-required': true, 'ng-minlength': '1', 'md-maxlength': '40'}
        },
        {'model':'nmu','title':'NMU','type':'text',
          validators:  {'ng-required': true, 'ng-minlength': '6', 'md-maxlength': '6'}},
        {'model':'descrizioneModello','title':'Descrizione Modello','type':'text',
          validators:  {'ng-required': true, 'ng-minlength': '1', 'md-maxlength': '100'}},
        {'model':'prezzo','title':'Prezzo','type':'number',
          validators:  {'ng-required': true, 'min':'0', 'max': '999999999', 'maxlength': '9'}},
        {'model':'descrizioneBrand','title':'Descrizione Brand','type':'text',
          validators:{'ng-required': true, 'ng-minlength': '1', 'md-maxlength': '100'}},
        {'model':'nmuPadre','title':'NMU Padre','type':'text',
          validators:  {'ng-required': true, 'ng-minlength': '6', 'md-maxlength': '6'}},
        {'model':'webDescription','title':'webDescription','type':'text','editable': true,
          validators:{'ng-required': true, 'ng-minlength': '1', 'md-maxlength': '100'}},
        {'model':'longDescriptionWeb','title':'longDescriptionWeb','type':'text','editable': true,
          validators:{'ng-required': true, 'ng-minlength': '1', 'md-maxlength': '100'}},
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
        {'model':'pianoTariffarioWeb','title':'pianoTariffarioWeb','type':'text','editable': true,
          validators:{'ng-required': true, 'ng-minlength': 1, 'md-maxlength': 100}},
        {'model':'tidWeb','title':'tidWeb','type':'text','editable': true,
          validators:{'ng-required': true, 'ng-minlength': 1, 'md-maxlength': 100}},
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
        {'model':'nomeProdotto','title':'Nome Prodotto','type':'text',
          validators:{'ng-required': true, 'ng-minlength': '1', 'md-maxlength': '100'}},
        {'model':'webDescription','title':'webDescription','type':'text','editable': true,
          validators:{'ng-required': true, 'ng-minlength': '1', 'md-maxlength': '100'}},
        {'model':'longDescriptionWeb','title':'longDescriptionWeb','type':'text','editable': true,
          validators:{'ng-required': true, 'ng-minlength': '1', 'md-maxlength': '100'}},
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
        {'model':'pianoTariffarioWeb','title':'pianoTariffarioWeb','type':'text','editable': true,
          validators:{'ng-required': true, 'ng-minlength': '1', 'md-maxlength': '100'}},
        {'model':'tidWeb','title':'tidWeb','type':'text','editable': true,
          validators:{'ng-required': true, 'ng-minlength': '1', 'md-maxlength': '100'}},
      ]
    },
    "attributi.ricarica":
    {
      title: "Attributi Ricarica",
      getOperation: "getRicaricaWeb",
      setOperation: "setRicaricaWeb",
      searchParams : [
        {'name': 'nomeProdotto', 'title': 'Nome Prodotto', 'type': 'text','model':"Ricarica",minlength:'4'}
      ],


      columns: [
        {'model':'nomeProdotto','title':'Nome Prodotto','type':'text',
          validators:{'ng-required': true, 'ng-minlength': '1', 'md-maxlength': '40'}},
        {'model':'webDescription','title':'webDescription','type':'text','editable': true,
          validators:{'ng-required': true, 'ng-minlength': '1', 'md-maxlength': '100'}},
        {'model':'longDescriptionWeb','title':'longDescriptionWeb','type':'text','editable': true,
          validators:{'ng-required': true, 'ng-minlength': '1', 'md-maxlength': '100'}},
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
          "tipoPromo" :"promo id1",
          "promo":"PROMO ID1 Bene Fisico",
          "description": "Promo che sconta, da canale Web ed in un determinato periodo, un Bene Fisico in vendita diretta con uno sconto a valore assoluto o in percentuale"
        },
        {
          "tipoPromo" :"promo id2",
          "promo":"PROMO ID2 Carta Servizi",
          "description": "Promo che sconta, da canale Web ed in un determinato periodo, il costo a pagare (attivazione + 1° canone) di una Carta Servizi con uno sconto a valore assoluto o in percentuale"
        },
        {
          "tipoPromo" :"promo id3",
          "promo":"PROMO ID3 Combinazione Item",
          "description": "Promo che aggiunge a carrello, da canale Web ed in un determinato periodo, una Carta Servizi se presente un'altra nel carrello"
        },
        {
          "tipoPromo" :"promo id4",
          "promo":"PROMO ID4 GiftWithPurchase",
          "description": "Promo che sconta, da canale Web ed in un determinato periodo, un Bene Fisico in vendita diretta con uno sconto a valore assoluto o in percentuale"
        },
        {
          "tipoPromo" :"promo id5",
          "promo":"PROMO ID5 SIM CARD",
          "description": "Promo che sconta, da canale Web ed in un determinato periodo, la SIM Card con uno sconto a valore assoluto o a percentuale"
        },
        {
          "tipoPromo" :"promo id6.1",
          "promo":"PROMO ID6.1 Coupon per BF/CS",
          "description": "Promo che fornisce in fase di vendita, da canale Web ed in un determinato periodo, un Coupon che elargirà uno sconto in una successiva post-vendita (su base BF/CS)"
        },
        {
          "tipoPromo" :"promo id6.2",
          "promo":"PROMO ID6.2 Coupon carrello",
          "description": "Promo che fornisce in fase di vendita, da canale Web ed in un determinato periodo, un Coupon che elargirà uno sconto in una successiva post-vendita (su base totale a carrello)"
        },
        {
          "tipoPromo" :"promo id7",
          "promo":"PROMO ID7 Ricarica",
          "description": "Promo che fornisce in fase di vendita, da canale Web ed in un determinato periodo, un Coupon che elargirà un bonus aggiuntivo di ricarica alla prossima ricarica. Il coupon verrà erogato solo se la ricarica è effettuata in un determinato periodo e con un determinato taglio; il bonus sarà erogato solo se la successiva ricarica sarà effettuata in un determinato periodo e con un determinato taglio"
        }
      ]
    },
    "promo.list": {
      title: "Promo List",
      /*
      model--> model del campo
      title-->nome del campo
      type-->tipo, 'text', 'number', 'options', 'selections', 'date'
      editable-->modificabile
      required-->obbligatorio
      min-date-->data minima selezionabile
      max-date-->data massima selezionabile
      locale-->lingua (en, it, fr. etc.)
      format-->valido per le date, indica il formato (fare riferimento formati moment.js)..es. DD/MM/YYYY
      orderBy -->determina il campo su cui effettuare l'ordine
      maxLength-->valido per text e number, numero massimo caratteri
       */
      "promo id1": {
        title:'ID 1',
        columns: [
          {'model': 'codicePromo', 'title': 'Codice Promo', 'type': 'text'},
          {'model': 'nomePromo', 'title': 'Nome Promo', 'type': 'text',editable:true, required:true, maxlength:"30"},
          {'model': 'descrizionePromo', 'title': 'Descrizione Promo', 'type': 'text',editable:true, required:true,maxlength:"100"},
          {'model':'inizioValidita','title':'Inizio Validita','type':'date',editable:true,required:true,
            'min-date':today, 'max-date':'31/12/2050',locale:"it",format:"DD/MM/YYYY"},
          {'model':'fineValidita','title':'Fine Validita','type':'date',editable:true,required:true,
            'min-date-ref-col':'inizioValidita','max-date':'31/12/2050',locale:"it",format:"DD/MM/YYYY", orderBy:true}
        ]
      },
      "promo id2": {
        title:'ID 2',
        columns: [
          {'model': 'codicePromo', 'title': 'Codice Promo', 'type': 'text'},
          {'model': 'nomePromo', 'title': 'Nome Promo', 'type': 'text',editable:true, required:true, maxlength:"30"},
          {'model': 'descrizionePromo', 'title': 'Descrizione Promo', 'type': 'text',editable:true, required:true,maxlength:"100"},
          {'model':'inizioValidita','title':'Inizio Validita','type':'date',editable:true,required:true,
            'min-date':today, 'max-date':'31/12/2050',locale:"it",format:"DD/MM/YYYY"},
          {'model':'fineValidita','title':'Fine Validita','type':'date',editable:true,required:true,
            'min-date-ref-col':'inizioValidita','max-date':'31/12/2050',locale:"it",format:"DD/MM/YYYY", orderBy:true}
        ]
      },
      "promo id3": {
        title:'ID 3',
        columns: [
          {'model': 'codicePromo', 'title': 'Codice Promo', 'type': 'text'},
          {'model': 'nomePromo', 'title': 'Nome Promo', 'type': 'text',editable:true, required:true, maxlength:"30"},
          {'model': 'descrizionePromo', 'title': 'Descrizione Promo', 'type': 'text',editable:true, required:true,maxlength:"100"},
          {'model':'inizioValidita','title':'Inizio Validita','type':'date',editable:true,required:true,
            'min-date':today, 'max-date':'31/12/2050',locale:"it",format:"DD/MM/YYYY"},
          {'model':'fineValidita','title':'Fine Validita','type':'date',editable:true,required:true,
            'min-date-ref-col':'inizioValidita','max-date':'31/12/2050',locale:"it",format:"DD/MM/YYYY", orderBy:true}
        ]
      },
      "promo id4": {
        title:'ID 4',
        columns: [
          {'model': 'codicePromo', 'title': 'Codice Promo', 'type': 'text'},
          {'model': 'nomePromo', 'title': 'Nome Promo', 'type': 'text',editable:true, required:true, maxlength:"30"},
          {'model': 'descrizionePromo', 'title': 'Descrizione Promo', 'type': 'text',editable:true, required:true,maxlength:"100"},
          {'model':'inizioValidita','title':'Inizio Validita','type':'date',editable:true,required:true,
            'min-date':today, 'max-date':'31/12/2050',locale:"it",format:"DD/MM/YYYY"},
          {'model':'fineValidita','title':'Fine Validita','type':'date',editable:true,required:true,
            'min-date-ref-col':'inizioValidita','max-date':'31/12/2050',locale:"it",format:"DD/MM/YYYY", orderBy:true}
        ]
      },
      "promo id5": {
        title:'ID 5',
        columns: [
          {'model': 'codicePromo', 'title': 'Codice Promo', 'type': 'text'},
          {'model': 'nomePromo', 'title': 'Nome Promo', 'type': 'text',editable:true, required:true, maxlength:"30"},
          {'model': 'descrizionePromo', 'title': 'Descrizione Promo', 'type': 'text',editable:true, required:true,maxlength:"100"},
          {'model':'inizioValidita','title':'Inizio Validita','type':'date',editable:true,required:true,
            'min-date':today, 'max-date':'31/12/2050',locale:"it",format:"DD/MM/YYYY"},
          {'model':'fineValidita','title':'Fine Validita','type':'date',editable:true,required:true,
            'min-date-ref-col':'inizioValidita','max-date':'31/12/2050',locale:"it",format:"DD/MM/YYYY", orderBy:true}
        ]
      },
      "promo id6.1": {
        title:'ID 6.1',
        columns: [
          {'model':'codicePromo','title':'Codice promo','type':'text',color: 'green'},
          {'model':'promoBatch','title':'Promo Batch','type':'options', 'options': lovService.getBooleanTypes(),
            editable:true,required:true,'batchEnabler': true,color: 'green',value:lovService.getBooleanTypes()[0]},
          {'model':'descrizionePromo','title':'Descrizione promo','type':'text',editable:true, required:true,
            'batchDisabled':true,color: 'green', maxlength:"100"},
          {'model':'inizioGenerazione','title':'Inizio Generazione','type':'date',editable:true, required:true,
            'batchDisabled':true, 'min-date':today, 'max-date':'31/12/2050',
            locale:"it",format:"DD/MM/YYYY",color: 'green'},
          {'model':'fineGenerazione','title':'Fine Generazione','type':'date',editable:true, required:true,
            'batchDisabled':true,'min-date-ref-col':'inizioGenerazione', 'max-date':'31/12/2050',
            locale:"it",format:"DD/MM/YYYY",color: 'green'},
          {'model':'inizioValidita','title':'Inizio Validita','type':'date',editable:true,required:true,
            'batchDisabled':true,'min-date':today, 'max-date':'31/12/2050',locale:"it",format:"DD/MM/YYYY",color: 'orange'},
          {'model':'fineValidita','title':'Fine Validita','type':'date',editable:true,required:true,
            'batchDisabled':true,'min-date-ref-col':'inizioValidita','max-date':'31/12/2050',locale:"it",
            format:"DD/MM/YYYY", color: 'orange',orderBy:true},
          {'model':'codiceTemplateSMS','title':'Codice Template SMS','type':'text', editable:true,required:true,
            'batchDisabled':true, color: 'orange', maxlength:"40"},
          {'model':'codiceTemplateMAIL','title':'Codice Template Mail','type':'text',editable:true,required:true,
            'batchDisabled':true, color: 'orange',maxlength:"40"},
          {'model':'flagLinea','title':'FlagLinea','type':'options',
            'options': lovService.getBooleanTypes(), editable:true,required:true, 'batchDisabled':true, color: 'orange'},
          {'model':'limiteUtilizzoCoupon','title':'Limite Utilizzo Coupon','type':'number',editable:true, required:true,
            'batchDisabled':true, color: 'orange',maxlength:"9"}
        ]
      },
      "promo id6.2": {
        title:'ID 6.2',
        columns: [
          {'model':'codicePromo','title':'Codice promo','type':'text',color: 'green'},
          {'model':'promoBatch','title':'Promo Batch','type':'options', 'options': lovService.getBooleanTypes(),
            editable:true,required:true,'batchEnabler': true,color: 'green',value:lovService.getBooleanTypes()[0]},
          {'model':'descrizionePromo','title':'Descrizione promo','type':'text',editable:true, required:true,
            'batchDisabled':true,color: 'green',maxlength:"100"},
          {'model':'inizioGenerazione','title':'Inizio Generazione','type':'date',editable:true, required:true,
            'batchDisabled':true, 'min-date':today, 'max-date':'31/12/2050'
            ,locale:"it",format:"DD/MM/YYYY",color: 'green'},
          {'model':'fineGenerazione','title':'Fine Generazione','type':'date',editable:true, required:true,
            'batchDisabled':true,'min-date-ref-col':'inizioGenerazione',
            'max-date':'31/12/2050', locale:"it",format:"DD/MM/YYYY",color: 'green'},
          {'model':'inizioValidita','title':'Inizio Validita','type':'date',editable:true,required:true,
            'batchDisabled':true,'min-date':today, 'max-date':'31/12/2050',locale:"it",
            format:"DD/MM/YYYY", color: 'orange'},
          {'model':'fineValidita','title':'Fine Validita','type':'date',editable:true,required:true,
            'batchDisabled':true,'min-date-ref-col':'inizioValidita',
            'max-date':'31/12/2050',locale:"it",format:"DD/MM/YYYY", color: 'orange', orderBy:true},
  {'model':'codiceTemplateSMS','title':'Codice Template SMS','type':'text',editable:true, required:true,
    'batchDisabled':true, color: 'orange', maxlength:"40"},
  {'model':'codiceTemplateMAIL','title':'Codice Template Mail','type':'text',editable:true, required:true,
    'batchDisabled':true, color: 'orange', maxlength:"40"},
  {'model':'flagLinea','title':'FlagLinea','type':'options', 'options': lovService.getBooleanTypes()
    ,editable:true, required:true,'batchDisabled':true, color: 'orange'},
  {'model':'limiteUtilizzoCoupon','title':'Limite Utilizzo Coupon','type':'number',editable:true, required:true,
    'batchDisabled':true, color: 'orange',maxlength:"9"}
  ]
},
  "promo id7": {
    title:'ID 7',
    columns: [
      {'model':'codicePromo','title':'Codice promo','type':'text',color: 'green'},
      {'model':'promoBatch','title':'Promo Batch','type':'options', 'options': lovService.getBooleanTypes(),
        editable:true,required:true,'batchEnabler': true,color: 'green',value:lovService.getBooleanTypes()[0]},
      {'model':'descrizionePromo','title':'Descrizione promo','type':'text',editable:true, required:true,
        'batchDisabled':true,color: 'green'},
      {'model':'inizioGenerazione','title':'Inizio Generazione','type':'date',editable:true, required:true,
        'batchDisabled':true, 'min-date':today, 'max-date':'31/12/2050',locale:"it",format:"DD/MM/YYYY",color: 'green'},
      {'model':'fineGenerazione','title':'Fine Generazione','type':'date',editable:true, required:true,
        'batchDisabled':true,'min-date-ref-col':'inizioGenerazione', 'max-date':'31/12/2050',
        locale:"it",format:"DD/MM/YYYY",color: 'green'},
      {'model':'inizioValidita','title':'Inizio Validita','type':'date',editable:true,required:true,
        'batchDisabled':true,'min-date':today, 'max-date':'31/12/2050',locale:"it",
        format:"DD/MM/YYYY", color: 'orange'},
      {'model':'fineValidita','title':'Fine Validita','type':'date',editable:true,required:true,
        'batchDisabled':true,'min-date-ref-col':'inizioValidita',
        'max-date':'31/12/2050',locale:"it",format:"DD/MM/YYYY", color: 'orange', orderBy:true},
      {'model':'codiceTemplateSMS','title':'Codice Template SMS','type':'text',editable:true, required:true,
        'batchDisabled':true, color: 'orange'},
      {'model':'codiceTemplateMAIL','title':'Codice Template Mail','type':'text',editable:true, required:true,
        'batchDisabled':true, color: 'orange'},
      {'model':'flagLinea','title':'FlagLinea','type':'options', 'options': lovService.getBooleanTypes()
        ,editable:true, required:true,'batchDisabled':true, color: 'orange'},
      {'model':'limiteUtilizzoCoupon','title':'Limite Utilizzo Coupon','type':'number',editable:true, required:true,
        'batchDisabled':true, color: 'orange',maxlength:"9"}
    ]
      }
    },
    "promo.detail": {
      title: "Condition List",
      "promo id1":
      {
        title: "PROMO ID1",
        buttons:
          [
            {
              'label': 'Ricerca BF',
              'model': 'BF',
              'reference': 'attributi.BF',
              'columns': [{model:'bf2purchase', 'refModel': 'nmu'}]
            }
          ],
        columns: [
          {'model':'bf2purchase','title':'NMU','type':'text',required:true},
          {'model':'isPadreBf2purchase','title':'IsPadre','type':'options',
            'options': lovService.getBooleanTypes(),  editable:true,required:true},
          {'model':'prezzoAttivazione','title':'Prezzo','type':'number', editable:true, required:true},
          {'model':'scontoValore','title':'Sconto a Valore',
            'type':'number', 'step':'0.01', pattern:regexService.scontoValore,maxlength:"10",
            editable:true, mutuallyExclusive: 'scontoPercentuale'},
          {'model':'scontoPercentuale', 'title':'Sconto a Percentuale',
            'type':'number', 'step':'0.01', pattern:regexService.percentuale, maxlength:"5",
            editable: true, mutuallyExclusive: 'scontoValore'}
        ]
      },
      "promo id2":
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
                {model:'cs2purchase', 'refModel': 'codiceCartaServizi'}]
            }
          ],
        columns: [
          {'model':'offerta','title':'Offerta','type':'text'},
          {'model':'cs2purchase','title':'Carta Servizi','type':'text'},
          {'model':'scontoValore','title':'Sconto a Valore',
            'type':'number', 'step':'0.01', pattern:regexService.scontoValore,maxlength:"10",
            editable:true, mutuallyExclusive: 'scontoPercentuale'},
          {'model':'scontoPercentuale', 'title':'Sconto a Percentuale',
            'type':'number', 'step':'0.01', pattern:regexService.percentuale, maxlength:"5",
            editable: true, mutuallyExclusive: 'scontoValore'}
        ]
      },
      "promo id3":
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
                {model:'cs2purchase', 'refModel': 'codiceCartaServizi', append: true}]
            },
            {
              'label': 'Ricerca BF2P',
              'model': 'BF2P',
              required: true,
              'multiple': true,
              'reference': 'attributi.BF',
              'columns': [
                {model:'bf2purchase', 'refModel': 'nmu',append: true}]
            },
            {
              'label': 'Ricerca CSBonus',
              'model': 'CSBonus',
              mutuallyExclusive: 'BFBonus',
              'reference': 'attributi.CS',
              'columns': [
                {model: 'offerta', 'refModel': 'nomeOfferta', compare: true},
                {model:'csWithBonus', 'refModel': 'codiceCartaServizi'}]
            },
            {
              'label': 'Ricerca BFBonus',
              'model': 'BFBonus',
              mutuallyExclusive: 'CSBonus',
              'reference': 'attributi.BF',
              'columns': [
                {model:'bfwithBonus', 'refModel': 'nmu'}]
            }
          ],
        columns: [
          {'model':'tipologiaVendita','title':'Tipologia Vendita','type':'options',
            'options': lovService.getSeniorityConstraintWebType(), multiple: true,
            editable:true,required:true, color: 'green'},
          {'model':'taglioRicarica','title':'Taglio Ricarica','type':'number',editable:true,
            required:true, color: 'green'},
          {'model':'offerta','title':'Offerta','type':'text', color: 'green'},
          {'model':'cs2purchase','title':'cs2purchase','type':'text', orRequired:'bf2purchase', color: 'green'},
          {'model':'bf2purchase','title':'bf2purchase','type':'text', orRequired:'cs2purchase', color: 'green'},
          {'model':'isPadreBf2purchase','title':'IsPadre','type':'options',
            'options': lovService.getBooleanTypes(), editable:true,required:true, color: 'green'},
          {'model':'offerta','title':'Offerta','type':'text', color: 'orange'},
          {'model':'csWithBonus','title':'csWithBonus','type':'text', mutuallyExclusive: 'bfwithBonus', color: 'orange'},
          {'model':'bfwithBonus','title':'bfwithBonus','type':'text', mutuallyExclusive: 'csWithBonus', color: 'orange'},
          {'model':'scontoValore','title':'Sconto a Valore',
            'type':'number', 'step':'0.01', pattern:regexService.scontoValore,maxlength:"10",
            editable:true, mutuallyExclusive: 'scontoPercentuale', color: 'orange'},
          {'model':'scontoPercentuale', 'title':'Sconto a Percentuale',
            'type':'number', 'step':'0.01', pattern:regexService.percentuale, maxlength:"5",
            editable: true, mutuallyExclusive: 'scontoValore', color: 'orange'}
        ]
      },
      "promo id4":
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
                {model:'cs2purchase', 'refModel': 'codiceCartaServizi'}]
            },
            {
              'label': 'Ricerca CSBonus',
              'model': 'CSBonus',
              required: true,
              'reference': 'attributi.CS',
              'columns': [
                {model: 'offerta', 'refModel': 'nomeOfferta', compare: true},
                {model:'csWithBonus', 'refModel': 'codiceCartaServizi'}]
            }
          ],
        columns: [
          {'model':'offerta','title':'Offerta','type':'text', required: true},
          {'model':'cs2purchase','title':'cs2purchase','type':'text',required: true},
          {'model':'offerta','title':'Offerta','type':'text', required: true},
          {'model':'csWithBonus','title':'csWithBonus','type':'text',required: true}
        ]
      },
      "promo id5":
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
      "promo id6.1":
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
                {model:'cs2purchase', 'refModel': 'codiceCartaServizi'}],
              'batchDisabled':true
            },
            {
              'label': 'Ricerca BF2P',
              'model': 'BF2P',
              orRequired: 'CS2P',
              mutuallyExclusive: 'CS2P',
              'reference': 'attributi.BF',
              'columns': [{model:'bf2purchase', 'refModel': 'nmu'}],
              'batchDisabled':true
            },
            {
              'label': 'Ricerca CSBonus',
              'model': 'CSBonus',
              mutuallyExclusive: 'BFBonus',
              'reference': 'attributi.CS',
              'columns': [
                {model: 'offerta', 'refModel': 'nomeOfferta',compare: true},
                {model:'csWithBonus','refModel': 'codiceCartaServizi'}]
            },
            {
              'label': 'Ricerca BFBonus',
              'model': 'BFBonus',
              mutuallyExclusive: 'CSBonus',
              'reference': 'attributi.BF',
              'columns': [{model:'bfwithBonus', 'refModel': 'nmu'}]
            }
          ],
        columns: [
          {'model':'offerta','title':'Offerta','type':'text', required: true, 'batchDisabled':true, color: 'green'},
          {'model':'cs2purchase','title':'cs2purchase','type':'text', orRequired:'bf2purchase',
            'batchDisabled':true, color: 'green'},
          {'model':'bf2purchase','title':'bf2purchase','type':'text', orRequired:'cs2purchase',
            'batchDisabled':true, color: 'green'},
          {'model':'isPadreBf2purchase','title':'IsPadre','type':'options', 'options': lovService.getBooleanTypes(),
            editable:true,required:true, 'batchDisabled':true, color: 'green'},
          {'model':'offerta','title':'Offerta','type':'text', color: 'orange'},
          {'model':'csWithBonus','title':'csWithBonus','type':'text',  mutuallyExclusive: 'bfwithBonus', color: 'orange'},
          {'model':'bfwithBonus','title':'bfwithBonus','type':'text', mutuallyExclusive: 'csWithBonus', color: 'orange'},
          {'model':'scontoValore','title':'Sconto a Valore',
            'type':'number', 'step':'0.01', pattern:regexService.scontoValore,maxlength:"10",
            editable:true, mutuallyExclusive: 'scontoPercentuale', color: 'orange'},
          {'model':'scontoPercentuale', 'title':'Sconto a Percentuale',
            'type':'number', 'step':'0.01', pattern:regexService.percentuale, maxlength:"5",
            editable: true, mutuallyExclusive: 'scontoValore', color: 'orange'}

        ]
      },
      "promo id6.2":
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
                {model:'csWithBonus','refModel': 'codiceCartaServizi'}]

            },
            {
              'label': 'Ricerca BFBonus',
              'model': 'BFBonus',
              mutuallyExclusive: 'CSBonus',
              orRequired: 'CSBonus',
              'reference': 'attributi.BF',
              'columns': [
                {model: 'offerta', 'refModel': 'nomeOfferta',compare: true},
                {model:'bfwithBonus','refModel': 'codiceCartaServizi'}]

            }
          ],
        columns: [
          {'model':'totaleCarrello','title':'Totale Carrello','type':'number',
            maxlength:"10", editable:true, required:true, 'batchDisabled':true, color: 'green'},
          {'model':'offerta','title':'Offerta','type':'text', color: 'orange'},
          {'model':'csWithBonus','title':'csWithBonus','type':'text', color: 'orange'},
          {'model':'bfwithBonus','title':'bfwithBonus','type':'text', color: 'orange'},
          {'model':'scontoValore','title':'Sconto a Valore',
            'type':'number', 'step':'0.01', pattern:regexService.scontoValore,maxlength:"10",
            editable:true, mutuallyExclusive: 'scontoPercentuale', color: 'orange'},
          {'model':'scontoPercentuale', 'title':'Sconto a Percentuale',
            'type':'number', 'step':'0.01', pattern:regexService.percentuale, maxlength:"5",
            editable: true, mutuallyExclusive: 'scontoValore', color: 'orange'}
        ]
      },
      "promo id7":
      {
        title: "PROMO ID7",
        addDisabledIfBatch:true,
        columns: [
          {'model':'ricaricaMinGenerazione','title':'Taglio Ricarica Min Generazione','type':'number',
            editable:true, required:true, maxlength:"10", color: 'green'},
          {'model':'ricaricaMaxGenerazione','title':'Taglio Ricarica Max Generazione','type':'number',
            editable:true, required:true,maxlength:"10", color: 'green'},
          {'model':'ricaricaTipoGenerazione','title':'Tipo Ricarica Generazione','type':'options',
            'options': lovService.getRicaricaTypes(),  editable:true,required:true, color: 'green'},
          {'model':'ricaricaMinApplicazione','title':'Bonus','type':'number',
            editable:true,required:true,maxlength:"10", color: 'orange'},
          {'model':'importoRicaricaBonus','title':'Taglio Ricarica Bonus','type':'number',
            editable:true,required:true,maxlength:"10", color: 'orange'},
          {'model':'ricaricaTipoApplicazione','title':'Tipo Ricarica Bonus','type':'options',
            'options': lovService.getRicaricaTypes(), editable:true,required:true, color: 'orange'}
        ]
      }
    },
    "pack.list":
    {
      title: "Pack List",
        columns: [
          {'model': 'codicePack', 'title': 'Codice Pack', 'type': 'text'},
          {'model': 'nomePack', 'title': 'Nome Pack Breve', 'type': 'text',editable:true, required:true},
          {'model': 'descrizionePack', 'title': 'Descrizione Pack', 'type': 'text',editable:true, required:true},
          {'model':'inizioValidita','title':'Inizio Validita','type':'date',editable:true,required:true,
            'min-date':today, 'max-date':'31/12/2050',locale:"it",format:"DD/MM/YYYY"},
          {'model':'fineValidita','title':'Fine Validita','type':'date',editable:true,required:true,
            'min-date-ref-col':'inizioValidita','max-date':'31/12/2050',locale:"it",format:"DD/MM/YYYY", orderBy:true}
        ]
    },
    "pack.detail": {
      title: "Condition List",
        buttons: [
          {
            'label': 'Ricerca BF',
            'model': 'BF',
            orRequired: 'CS',
            mutuallyExclusive: 'CS',
            'reference': 'attributi.BF',
            'columns': [{model: 'bf2purchase', 'refModel': 'nmu'}]
          },
          {
            'label': 'Ricerca CS2P',
            'model': 'CS',
            orRequired: 'BF',
            mutuallyExclusive: 'BF',
            'reference': 'attributi.CS',
            'columns': [
              {model: 'offerta', 'refModel': 'nomeOfferta', compare: true},
              {model: 'cs2purchase', 'refModel': 'codiceCartaServizi'}]
          }
        ],
        columns: [
          {'model': 'offerta', 'title': 'Offerta', 'type': 'text'},
          {'model': 'cs2purchase', 'title': 'Carta Servizi', 'type': 'text', orRequired: 'bf2purchase'},
          {'model': 'bf2purchase', 'title': 'NMU', 'type': 'text', orRequired: 'cs2purchase'},
          {'model':'vincolo','title':'Vincolo','type':'options',
            'options': lovService.getVincoloTypes(),  editable:true,required:true, value:lovService.getVincoloTypes()[0]}

        ]
    }
  };
}]);
