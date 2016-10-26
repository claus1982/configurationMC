/**
 * Created by claudio.a.visco on 18-Oct-16.
 */

var express = require('express');
var app = express();

//attribute CS
var json =
{
  "getWebResponse":{
    "header":{
      "result":"Fatal Error",
      "code":"0",
      "description":"operation failed"
    },
    "payload":[
      {
        "webDescription":"Tim Special",
        "longDescriptionWeb":"Tim Special",
        "seniorityConstraintWeb":"AL",
        "isWebSellable":"true",
        "paymentMethodWeb":"Carta di Credito",
        "nomeOfferta":"Tim Special",
        "nomeProdotto":"ODE46 - Internet 7 giorni",
        "codiceCartaServizi":"12345",
        "defaultFlag":"true",
        "parentDisplayName":"Tim Special"
      },
      {
        "webDescription":"Tim Young",
        "longDescriptionWeb":"Tim Young",
        "seniorityConstraintWeb":"AL|MNP",
        "isWebSellable":"true",
        "paymentMethodWeb":"Carta di Credito",
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODE46 - Internet 7 giorni",
        "codiceCartaServizi":"12345",
        "defaultFlag":"true",
        "parentDisplayName":"Tim Young"
      },
      {
        "webDescription":"Tim Tutto",
        "longDescriptionWeb":"Tim Tutto",
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"true",
        "paymentMethodWeb":"Carta di Credito",
        "nomeOfferta":"Tim Tutto",
        "nomeProdotto":"ODE543 - Internet TUTTI i giorni",
        "codiceCartaServizi":"12143",
        "defaultFlag":"false",
        "parentDisplayName":"Tim Tutto"
      },
      {
        "webDescription":"Tim Niente",
        "longDescriptionWeb":"Tim Niente",
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"true",
        "paymentMethodWeb":"Carta di Credito|PAY PAL",
        "nomeOfferta":"Tim Niente",
        "nomeProdotto":"ODE133 - Internet MAI i giorni",
        "codiceCartaServizi":"11123",
        "defaultFlag":"false",
        "parentDisplayName":"Tim Niente"
      }
    ]
  }
};


/*//Attributi SIM
 var json =
 {
 "getWebResponse":{
 "header":{
 "result":"Fatal Error",
 "code":"0",
 "description":"operation failed"
 },
 "payload":[
 {
 "nomeProdotto": "nomeProdotto1",
 "webDescription": "webDescription1",
 "longDescriptionWeb": "longDescriptionWeb1",
 "seniorityConstraintWeb": "SeniorityConstraintWeb1",
 "isWebSellable": "true",
 "paymentMethodWeb": "Carta di Credito",
 "pianoTariffarioWeb": "pianoTariffarioWeb1",
 "TIDweb": "TIDweb1"
 },
   {
     "nomeProdotto": "nomeProdotto2",
     "webDescription": "webDescription2",
     "longDescriptionWeb": "longDescriptionWeb2",
     "seniorityConstraintWeb": "SeniorityConstraintWeb2",
     "isWebSellable": "true",
     "paymentMethodWeb": "Carta di Credito",
     "pianoTariffarioWeb": "pianoTariffarioWeb2",
     "TIDweb": "TIDweb2"
   },
   {
     "nomeProdotto": "nomeProdotto3",
     "webDescription": "webDescription3",
     "longDescriptionWeb": "longDescriptionWeb3",
     "seniorityConstraintWeb": "SeniorityConstraintWeb3",
     "isWebSellable": "true",
     "paymentMethodWeb": "Carta di Credito",
     "pianoTariffarioWeb": "pianoTariffarioWeb3",
     "TIDweb": "TIDweb3"
   },
   {
     "nomeProdotto": "nomeProdotto4",
     "webDescription": "webDescription4",
     "longDescriptionWeb": "longDescriptionWeb4",
     "seniorityConstraintWeb": "SeniorityConstraintWeb4",
     "isWebSellable": "true",
     "paymentMethodWeb": "Carta di Credito",
     "pianoTariffarioWeb": "pianoTariffarioWeb4",
     "TIDweb": "TIDweb4"
   }
 ]
 }
};*/

/*//Attributi BF
 var json =
 {
 "getWebResponse":{
 "header":{
 "result":"Fatal Error",
 "code":"0",
 "description":"operation failed"
 },
 "payload":[
 {
 "nomeProdotto": "nomeProdotto1",
 "NMU": "NMU1",
 "descrizioneModello": "descrizioneModello1",
 "price": "100",
 "descrizioneBrand": "descrizioneBrand1",
 "NMUPadre": "NMUPadre1",
 "webDescription": "webDescription1",
 "longDescriptionWeb": "longDescriptionWeb1",
 "seniorityConstraintWeb": "SeniorityConstraintWeb1",
 "isWebSellable": "true",
 "paymentMethodWeb": "Carta di Credito",
 "REGALABILE": "true",
 "pianoTariffarioWeb": "pianoTariffarioWeb1",
 "TIDweb": "TIDweb1"

 },
 {
 "nomeProdotto": "nomeProdotto1",
 "NMU": "NMU1",
 "descrizioneModello": "descrizioneModello1",
 "price": "100",
 "descrizioneBrand": "descrizioneBrand1",
 "NMUPadre": "NMUPadre1",
 "webDescription": "webDescription1",
 "longDescriptionWeb": "longDescriptionWeb1",
 "seniorityConstraintWeb": "SeniorityConstraintWeb1",
 "isWebSellable": "true",
 "paymentMethodWeb": "Carta di Credito",
 "REGALABILE": "true",
 "pianoTariffarioWeb": "pianoTariffarioWeb1",
 "TIDweb": "TIDweb1"

 },
 {
 "nomeProdotto": "nomeProdotto1",
 "NMU": "NMU1",
 "descrizioneModello": "descrizioneModello1",
 "price": "100",
 "descrizioneBrand": "descrizioneBrand1",
 "NMUPadre": "NMUPadre1",
 "webDescription": "webDescription1",
 "longDescriptionWeb": "longDescriptionWeb1",
 "seniorityConstraintWeb": "SeniorityConstraintWeb1",
 "isWebSellable": "true",
 "paymentMethodWeb": "Carta di Credito",
 "REGALABILE": "true",
 "pianoTariffarioWeb": "pianoTariffarioWeb1",
 "TIDweb": "TIDweb1"

 },
 {
 "nomeProdotto": "nomeProdotto1",
 "NMU": "NMU1",
 "descrizioneModello": "descrizioneModello1",
 "price": "100",
 "descrizioneBrand": "descrizioneBrand1",
 "NMUPadre": "NMUPadre1",
 "webDescription": "webDescription1",
 "longDescriptionWeb": "longDescriptionWeb1",
 "seniorityConstraintWeb": "SeniorityConstraintWeb1",
 "isWebSellable": "true",
 "paymentMethodWeb": "Carta di Credito",
 "REGALABILE": "true",
 "pianoTariffarioWeb": "pianoTariffarioWeb1",
 "TIDweb": "TIDweb1"

 }
 ]
 }
 };*/

/*//Attributi Ricarica
var json =
{
  "getWebResponse":{
    "header":{
      "result":"Fatal Error",
      "code":"0",
      "description":"operation failed"
    },
    "payload":[
      {
        "nomeProdotto": "nomeProdotto1",
        "webDescription": "webDescription1",
        "longDescriptionWeb": "longDescriptionWeb1",
        "isWebSellable": "true",
        "paymentMethodWeb": "Carta di Credito"
      },
      {
        "nomeProdotto": "nomeProdotto2",
        "webDescription": "webDescription2",
        "longDescriptionWeb": "longDescriptionWeb2",
        "isWebSellable": "true",
        "paymentMethodWeb": "Carta di Credito"
      },
      {
        "nomeProdotto": "nomeProdotto3",
        "webDescription": "webDescription3",
        "longDescriptionWeb": "longDescriptionWeb3",
        "isWebSellable": "true",
        "paymentMethodWeb": "Carta di Credito"
      },
      {
        "nomeProdotto": "nomeProdotto4",
        "webDescription": "webDescription4",
        "longDescriptionWeb": "longDescriptionWeb4",
        "isWebSellable": "true",
        "paymentMethodWeb": "Carta di Credito"
      }
    ]
  }
};*/


app.post('/getWeb', function(req, res) {

  res.send(json); // send text response
});


app.post('/setWeb', function(req, res) {

  var json = {
    "setWebResponse":{
      "header":{
        "result":"Fatal Error",
        "code":"0",
        "description":"operation failed"
      }
    }
  };

  res.send(json);
});
app.post('/getPromo', function(req, res) {

  var json =
  {
    "getPromoResponse":{
      "header":{
        "result":"Fatal Error",
        "code":"0",
        "description":"operation failed"
      },
      "payload":[
        {
          "codicePromo":"codicePromo0",
          "nomePromo":"nomePromo0",
          "descrizionePromo":"descrizionePromo0",
          "periodoValidita":"10/07/2012 - 10/01/2020",
          "periodoGenerazione":"10/07/2012 - 4/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS0",
          "codiceTemplateMAIL":"codiceTemplateMAIL0",
          "flagLinea":"true",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon0",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo1",
          "nomePromo":"nomePromo1",
          "descrizionePromo":"descrizionePromo1",
          "periodoValidita":"10/07/2012 - 10/01/2020",
          "periodoGenerazione":"10/07/2012 - 4/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS1",
          "codiceTemplateMAIL":"codiceTemplateMAIL1",
          "flagLinea":"true",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon1",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo2",
          "nomePromo":"nomePromo2",
          "descrizionePromo":"descrizionePromo2",
          "periodoValidita":"10/07/2012 - 10/01/2020",
          "periodoGenerazione":"10/07/2012 - 4/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS2",
          "codiceTemplateMAIL":"codiceTemplateMAIL2",
          "flagLinea":"true",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon2",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo3",
          "nomePromo":"nomePromo3",
          "descrizionePromo":"descrizionePromo3",
          "periodoValidita":"10/07/2012 - 10/01/2020",
          "periodoGenerazione":"10/07/2012 - 4/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS3",
          "codiceTemplateMAIL":"codiceTemplateMAIL3",
          "flagLinea":"true",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon3",
          "sysdate":"10/07/2012 12:34"
        }
      ]
    }
  };

  res.send(json); // send text response
});


app.post('/createPromo', function(req, res) {

  var json =
  {
    "getPromoResponse":{
      "header":{
        "result":"Fatal Error",
        "code":"0",
        "description":"operation failed"
      }
    }
  };

  res.send(json); // send text response
});


app.post('/getCondition', function(req, res) {

    var json =
    {
      "getConditionResponse":{
        "header":{
          "result":"Fatal Error",
          "code":"0",
          "description":"operation failed"
        },
        "payload":[
          {
            "offerta":"offerta1",
            "scontoValore":"scontoValore1",
            "scontoPercentuale":"scontoPercentuale1",
            "cartaServizi":"cartaServizi1",
            "tipologiaVendita":"tipologiaVendita1",
            "CS2Purchase":"CS2Purchase1",
            "BF2Purchase":"BF2Purchase1",
            "isPadreBF2Purchase":"isPadreBF2Purchase1",
            "CSwithBonus":"CSwithBonus1",
            "BFwithBonus":"BFwithBonus1",
            "isPadreBFwithBonus":"isPadreBFwithBonus1",
            "tagliaRicaricaGenerazione":"1000",
            "taglioRicaricaBonus":"10",
            "importoRicaricaBonus":"50",
            "sysdate":"sysdate",
            "codicePromo":"codicePromo1"

          },
          {
            "offerta":"offerta2",
            "scontoValore":"scontoValore2",
            "scontoPercentuale":"scontoPercentuale2",
            "cartaServizi":"cartaServizi2",
            "tipologiaVendita":"tipologiaVendita2",
            "CS2Purchase":"CS2Purchase2",
            "BF2Purchase":"BF2Purchase2",
            "isPadreBF2Purchase":"isPadreBF2Purchase2",
            "CSwithBonus":"CSwithBonus2",
            "BFwithBonus":"BFwithBonus2",
            "isPadreBFwithBonus":"isPadreBFwithBonus2",
            "tagliaRicaricaGenerazione":"2000",
            "taglioRicaricaBonus":"20",
            "importoRicaricaBonus":"50",
            "sysdate":"sysdate",
            "codicePromo":"codicePromo2"

          }, {
            "offerta":"offerta3",
            "scontoValore":"scontoValore3",
            "scontoPercentuale":"scontoPercentuale3",
            "cartaServizi":"cartaServizi3",
            "tipologiaVendita":"tipologiaVendita3",
            "CS2Purchase":"CS2Purchase3",
            "BF2Purchase":"BF2Purchase3",
            "isPadreBF2Purchase":"isPadreBF2Purchase3",
            "CSwithBonus":"CSwithBonus3",
            "BFwithBonus":"BFwithBonus3",
            "isPadreBFwithBonus":"isPadreBFwithBonus3",
            "tagliaRicaricaGenerazione":"3000",
            "taglioRicaricaBonus":"30",
            "importoRicaricaBonus":"50",
            "sysdate":"sysdate",
            "codicePromo":"codicePromo3"
          }, {
            "offerta":"offerta4",
            "scontoValore":"scontoValore4",
            "scontoPercentuale":"scontoPercentuale4",
            "cartaServizi":"cartaServizi4",
            "tipologiaVendita":"tipologiaVendita4",
            "CS2Purchase":"CS2Purchase4",
            "BF2Purchase":"BF2Purchase4",
            "isPadreBF2Purchase":"isPadreBF2Purchase4",
            "CSwithBonus":"CSwithBonus4",
            "BFwithBonus":"BFwithBonus4",
            "isPadreBFwithBonus":"isPadreBFwithBonus4",
            "tagliaRicaricaGenerazione":"4000",
            "taglioRicaricaBonus":"40",
            "importoRicaricaBonus":"50",
            "sysdate":"sysdate",
            "codicePromo":"codicePromo4"
          }
        ]
      }
    };

  res.send(json); // send text response
});



app.listen(process.env.PORT || 4730);
