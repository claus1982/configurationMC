/**
 * Created by claudio.a.visco on 18-Oct-16.
 */

var express = require('express');
var app = express();

//attribute CS
var nmu = "453331";
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
        "isWebSellable":"Y",
        "paymentMethodWeb":"Carta di Credito",
        "nomeOfferta":"Tim Special",
        "nomeProdotto":"ODE46 - Internet 7 giorni",
        "codiceCartaServizi":"12345",
        "defaultFlag":"Y",
        "parentDisplayName":"Tim Special",
        "nmu": "453331",
        "descrizioneModello": "descrizioneModello1",
        "prezzo": "100",
        "descrizioneBrand": "descrizioneBrand1",
        "nmuPadre": "453314",
        "regalabile": "Y",
        "pianoTariffarioWeb": "pianoTariffarioWeb1",
        "tidWeb": "tidWeb1"
      },
      {
        "webDescription":"Tim Special",
        "longDescriptionWeb":"Tim Special",
        "seniorityConstraintWeb":"AL|MNP",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Carta di Credito",
        "nomeOfferta":"Tim Special",
        "nomeProdotto":"ODE46 - Internet 7 giorni",
        "codiceCartaServizi":"12345",
        "defaultFlag":"Y",
        "parentDisplayName":"Tim Special",
        "nmu": "453332",
        "descrizioneModello": "descrizioneModello2",
        "prezzo": "100",
        "descrizioneBrand": "descrizioneBrand2",
        "nmuPadre": "453334",
        "regalabile": "Y",
        "pianoTariffarioWeb": "pianoTariffarioWeb2",
        "tidWeb": "tidWeb2"
      },
      {
        "webDescription":"Tim Tutto",
        "longDescriptionWeb":"Tim Tutto",
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Carta di Credito",
        "nomeOfferta":"Tim Tutto",
        "nomeProdotto":"ODE543 - Internet TUTTI i giorni",
        "codiceCartaServizi":"12143",
        "defaultFlag":"N",
        "parentDisplayName":"Tim Tutto",
        "nmu": "453333",
        "descrizioneModello": "descrizioneModello3",
        "prezzo": "100",
        "descrizioneBrand": "descrizioneBrand3",
        "nmuPadre": "453334",
        "regalabile": "Y",
        "pianoTariffarioWeb": "pianoTariffarioWeb3",
        "tidWeb": "tidWeb3"

      },
      {
        "webDescription":"Tim Niente",
        "longDescriptionWeb":"Tim Niente",
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Carta di Credito|PAY PAL",
        "nomeOfferta":"Tim Niente",
        "nomeProdotto":"ODE133 - Internet MAI i giorni",
        "codiceCartaServizi":"11123",
        "defaultFlag":"N",
        "parentDisplayName":"Tim Niente",
        "nmu": "453333",
        "descrizioneModello": "descrizioneModello4",
        "prezzo": "100",
        "descrizioneBrand": "descrizioneBrand4",
        "nmuPadre": "453634",
        "regalabile": "Y",
        "pianoTariffarioWeb": "pianoTariffarioWeb4",
        "tidWeb": "tidWeb4"
      },
      {
        "webDescription":"Tim Special",
        "longDescriptionWeb":"Tim Special",
        "seniorityConstraintWeb":"AL",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Carta di Credito",
        "nomeOfferta":"Tim Special",
        "nomeProdotto":"ODE46 - Internet 7 giorni",
        "codiceCartaServizi":"12345",
        "defaultFlag":"Y",
        "parentDisplayName":"Tim Special",
        "nmu": "453331",
        "descrizioneModello": "descrizioneModello1",
        "prezzo": "100",
        "descrizioneBrand": "descrizioneBrand1",
        "nmuPadre": "463334",
        "regalabile": "Y",
        "pianoTariffarioWeb": "pianoTariffarioWeb1",
        "tidWeb": "tidWeb1"
      },
      {
        "webDescription":"Tim Special",
        "longDescriptionWeb":"Tim Special",
        "seniorityConstraintWeb":"AL|MNP",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Carta di Credito",
        "nomeOfferta":"Tim Special",
        "nomeProdotto":"ODE46 - Internet 7 giorni",
        "codiceCartaServizi":"12345",
        "defaultFlag":"Y",
        "parentDisplayName":"Tim Special",
        "nmu": "453337",
        "descrizioneModello": "descrizioneModello2",
        "prezzo": "100",
        "descrizioneBrand": "descrizioneBrand2",
        "nmuPadre": "413324",
        "regalabile": "Y",
        "pianoTariffarioWeb": "pianoTariffarioWeb2",
        "tidWeb": "tidWeb2"
      },
      {
        "webDescription":"Tim Tutto",
        "longDescriptionWeb":"Tim Tutto",
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Carta di Credito",
        "nomeOfferta":"Tim Tutto",
        "nomeProdotto":"ODE543 - Internet TUTTI i giorni",
        "codiceCartaServizi":"12143",
        "defaultFlag":"N",
        "parentDisplayName":"Tim Tutto",
        "nmu": "453324",
        "descrizioneModello": "descrizioneModello3",
        "prezzo": "100",
        "descrizioneBrand": "descrizioneBrand3",
        "nmuPadre": "453334",
        "regalabile": "Y",
        "pianoTariffarioWeb": "pianoTariffarioWeb3",
        "tidWeb": "tidWeb3"

      },
      {
        "webDescription":"Tim Niente",
        "longDescriptionWeb":"Tim Niente",
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Carta di Credito|PAY PAL",
        "nomeOfferta":"Tim Niente",
        "nomeProdotto":"ODE133 - Internet MAI i giorni",
        "codiceCartaServizi":"11123",
        "defaultFlag":"N",
        "parentDisplayName":"Tim Niente",
        "nmu": "453354",
        "descrizioneModello": "descrizioneModello4",
        "prezzo": "100",
        "descrizioneBrand": "descrizioneBrand4",
        "nmuPadre": "453351",
        "regalabile": "Y",
        "pianoTariffarioWeb": "pianoTariffarioWeb4",
        "tidWeb": "tidWeb4"
      },
      {
        "webDescription":"Tim Special",
        "longDescriptionWeb":"Tim Special",
        "seniorityConstraintWeb":"AL",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Carta di Credito",
        "nomeOfferta":"Tim Special",
        "nomeProdotto":"ODE46 - Internet 7 giorni",
        "codiceCartaServizi":"12345",
        "defaultFlag":"Y",
        "parentDisplayName":"Tim Special",
        "nmu": "453333",
        "descrizioneModello": "descrizioneModello1",
        "prezzo": "100",
        "descrizioneBrand": "descrizioneBrand1",
        "nmuPadre": "453334",
        "regalabile": "Y",
        "pianoTariffarioWeb": "pianoTariffarioWeb1",
        "tidWeb": "tidWeb1"
      },
      {
        "webDescription":"Tim Special",
        "longDescriptionWeb":"Tim Special",
        "seniorityConstraintWeb":"AL|MNP",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Carta di Credito",
        "nomeOfferta":"Tim Special",
        "nomeProdotto":"ODE46 - Internet 7 giorni",
        "codiceCartaServizi":"12345",
        "defaultFlag":"Y",
        "parentDisplayName":"Tim Special",
        "nmu": "453333",
        "descrizioneModello": "descrizioneModello2",
        "prezzo": "100",
        "descrizioneBrand": "descrizioneBrand2",
        "nmuPadre": "453331",
        "regalabile": "Y",
        "pianoTariffarioWeb": "pianoTariffarioWeb2",
        "tidWeb": "tidWeb2"
      },
      {
        "webDescription":"Tim Tutto",
        "longDescriptionWeb":"Tim Tutto",
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Carta di Credito",
        "nomeOfferta":"Tim Tutto",
        "nomeProdotto":"ODE543 - Internet TUTTI i giorni",
        "codiceCartaServizi":"12143",
        "defaultFlag":"N",
        "parentDisplayName":"Tim Tutto",
        "nmu": "453323",
        "descrizioneModello": "descrizioneModello3",
        "prezzo": "100",
        "descrizioneBrand": "descrizioneBrand3",
        "nmuPadre": "453334",
        "regalabile": "Y",
        "pianoTariffarioWeb": "pianoTariffarioWeb3",
        "tidWeb": "tidWeb3"

      },
      {
        "webDescription":"Tim Niente",
        "longDescriptionWeb":"Tim Niente",
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Carta di Credito|PAY PAL",
        "nomeOfferta":"Tim Niente",
        "nomeProdotto":"ODE133 - Internet MAI i giorni",
        "codiceCartaServizi":"11123",
        "defaultFlag":"N",
        "parentDisplayName":"Tim Niente",
        "nmu": "444312",
        "descrizioneModello": "descrizioneModello4",
        "prezzo": "100",
        "descrizioneBrand": "descrizioneBrand4",
        "nmuPadre": "554123",
        "regalabile": "Y",
        "pianoTariffarioWeb": "pianoTariffarioWeb4",
        "tidWeb": "tidWeb4"
      },
      {
        "webDescription":"Tim Special",
        "longDescriptionWeb":"Tim Special",
        "seniorityConstraintWeb":"AL",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Carta di Credito",
        "nomeOfferta":"Tim Special",
        "nomeProdotto":"ODE46 - Internet 7 giorni",
        "codiceCartaServizi":"12345",
        "defaultFlag":"Y",
        "parentDisplayName":"Tim Special",
        "nmu": "551324",
        "descrizioneModello": "descrizioneModello1",
        "prezzo": "100",
        "descrizioneBrand": "descrizioneBrand1",
        "nmuPadre": "564431",
        "regalabile": "Y",
        "pianoTariffarioWeb": "pianoTariffarioWeb1",
        "tidWeb": "tidWeb1"
      },
      {
        "webDescription":"Tim Special",
        "longDescriptionWeb":"Tim Special",
        "seniorityConstraintWeb":"AL|MNP",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Carta di Credito",
        "nomeOfferta":"Tim Special",
        "nomeProdotto":"ODE46 - Internet 7 giorni",
        "codiceCartaServizi":"12345",
        "defaultFlag":"Y",
        "parentDisplayName":"Tim Special",
        "nmu": "565234",
        "descrizioneModello": "descrizioneModello2",
        "prezzo": "100",
        "descrizioneBrand": "descrizioneBrand2",
        "nmuPadre": "554123",
        "regalabile": "Y",
        "pianoTariffarioWeb": "pianoTariffarioWeb2",
        "tidWeb": "tidWeb2"
      },
      {
        "webDescription":"Tim Tutto",
        "longDescriptionWeb":"Tim Tutto",
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Carta di Credito",
        "nomeOfferta":"Tim Tutto",
        "nomeProdotto":"ODE543 - Internet TUTTI i giorni",
        "codiceCartaServizi":"12143",
        "defaultFlag":"N",
        "parentDisplayName":"Tim Tutto",
        "nmu": "676542",
        "descrizioneModello": "descrizioneModello3",
        "prezzo": "100",
        "descrizioneBrand": "descrizioneBrand3",
        "nmuPadre": "554432",
        "regalabile": "Y",
        "pianoTariffarioWeb": "pianoTariffarioWeb3",
        "tidWeb": "tidWeb3"

      },
      {
        "webDescription":"Tim Niente",
        "longDescriptionWeb":"Tim Niente",
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Carta di Credito|PAY PAL",
        "nomeOfferta":"Tim Niente",
        "nomeProdotto":"ODE133 - Internet MAI i giorni",
        "codiceCartaServizi":"11123",
        "defaultFlag":"N",
        "parentDisplayName":"Tim Niente",
        "nmu": "455412",
        "descrizioneModello": "descrizioneModello4",
        "prezzo": "100",
        "descrizioneBrand": "descrizioneBrand4",
        "nmuPadre": "665434",
        "regalabile": "Y",
        "pianoTariffarioWeb": "pianoTariffarioWeb4",
        "tidWeb": "tidWeb4"
      }
    ]
  }
};




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
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo0",
          "periodoValidita":"10/07/2012 - 10/01/2020",
          "periodoGenerazione":"10/07/2012 - 4/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS0",
          "codiceTemplateMAIL":"codiceTemplateMAIL0",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon0",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo1",
          "nomePromo":"nomePromo1",
          "promoBatch":"Y",
          "descrizionePromo":"descrizionePromo1",
          "periodoValidita":"10/07/2012 - 10/01/2020",
          "periodoGenerazione":"10/07/2012 - 4/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS1",
          "codiceTemplateMAIL":"codiceTemplateMAIL1",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon1",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo2",
          "nomePromo":"nomePromo2",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo2",
          "periodoValidita":"10/07/2012 - 10/01/2020",
          "periodoGenerazione":"10/07/2012 - 4/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS2",
          "codiceTemplateMAIL":"codiceTemplateMAIL2",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon2",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo3",
          "nomePromo":"nomePromo3",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo3",
          "periodoValidita":"10/07/2012 - 10/01/2020",
          "periodoGenerazione":"10/07/2012 - 4/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS3",
          "codiceTemplateMAIL":"codiceTemplateMAIL3",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon3",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo2",
          "nomePromo":"nomePromo2",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo2",
          "periodoValidita":"10/07/2012 - 10/01/2020",
          "periodoGenerazione":"10/07/2012 - 4/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS2",
          "codiceTemplateMAIL":"codiceTemplateMAIL2",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon2",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo3",
          "nomePromo":"nomePromo3",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo3",
          "periodoValidita":"10/07/2012 - 10/01/2020",
          "periodoGenerazione":"10/07/2012 - 4/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS3",
          "codiceTemplateMAIL":"codiceTemplateMAIL3",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon3",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo2",
          "nomePromo":"nomePromo2",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo2",
          "periodoValidita":"10/07/2012 - 10/01/2020",
          "periodoGenerazione":"10/07/2012 - 4/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS2",
          "codiceTemplateMAIL":"codiceTemplateMAIL2",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon2",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo3",
          "nomePromo":"nomePromo3",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo3",
          "periodoValidita":"10/07/2012 - 10/01/2020",
          "periodoGenerazione":"10/07/2012 - 4/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS3",
          "codiceTemplateMAIL":"codiceTemplateMAIL3",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon3",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo2",
          "nomePromo":"nomePromo2",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo2",
          "periodoValidita":"10/07/2012 - 10/01/2020",
          "periodoGenerazione":"10/07/2012 - 4/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS2",
          "codiceTemplateMAIL":"codiceTemplateMAIL2",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon2",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo3",
          "nomePromo":"nomePromo3",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo3",
          "periodoValidita":"10/07/2012 - 10/01/2020",
          "periodoGenerazione":"10/07/2012 - 4/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS3",
          "codiceTemplateMAIL":"codiceTemplateMAIL3",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon3",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo2",
          "nomePromo":"nomePromo2",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo2",
          "periodoValidita":"10/07/2012 - 10/01/2020",
          "periodoGenerazione":"10/07/2012 - 4/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS2",
          "codiceTemplateMAIL":"codiceTemplateMAIL2",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon2",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo3",
          "nomePromo":"nomePromo3",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo3",
          "periodoValidita":"10/07/2012 - 10/01/2020",
          "periodoGenerazione":"10/07/2012 - 4/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS3",
          "codiceTemplateMAIL":"codiceTemplateMAIL3",
          "flagLinea":"Y",
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
    "createPromoResponse":{
      "header":{
        "result":"Fatal Error",
        "code":"0",
        "description":"operation failed"
      },
      "payload":
        {
          "codicePromo": "cod_001"
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
            "scontoValore":"100",
            "scontoPercentuale":"10",
            "priceActivation":"1000",
            "offerta":"offerta1",
            "tipologiaVendita":"tipologiaVendita1",
            "CS2Purchase":"CS2Purchase1",
            "BF2Purchase":"BF2Purchase1",
            "isPadreBF2Purchase":"isPadreBF2Purchase1",
            "CSwithBonus":"CSwithBonus1",
            "BFwithBonus":"BFwithBonus1",
            "taglioRicarica":"taglioRicarica1",
            "totaleCarrello":"totaleCarrello1",
            "ricaricaMinGenerazione":"ricaricaMinGenerazione1",
            "ricaricaMaxGenerazione":"ricaricaMaxGenerazione1",
            "ricaricaTipoGenerazione":"ricaricaTipoGenerazione1",
            "ricaricaMinApplicazione":"ricaricaMinApplicazione1",
            "importoRicaricaBonus":"10000",
            "ricaricaTipoApplicazione":"RICARICA",
            "codicePromo":"codicePromo1",
            "IdCondition":"IdCondition1"
          },
          {
            "scontoValore":"200",
            "scontoPercentuale":"20",
            "priceActivation":"2000",
            "offerta":"offerta2",
            "tipologiaVendita":"tipologiaVendita2",
            "CS2Purchase":"CS2Purchase2",
            "BF2Purchase":"BF2Purchase2",
            "isPadreBF2Purchase":"isPadreBF2Purchase2",
            "CSwithBonus":"CSwithBonus2",
            "BFwithBonus":"BFwithBonus2",
            "taglioRicarica":"taglioRicarica2",
            "totaleCarrello":"totaleCarrello2",
            "ricaricaMinGenerazione":"ricaricaMinGenerazione2",
            "ricaricaMaxGenerazione":"ricaricaMaxGenerazione2",
            "ricaricaTipoGenerazione":"ricaricaTipoGenerazione2",
            "ricaricaMinApplicazione":"ricaricaMinApplicazione2",
            "importoRicaricaBonus":"20000",
            "ricaricaTipoApplicazione":"RICARICA",
            "codicePromo":"codicePromo2",
            "IdCondition":"IdCondition2"
          }, {
            "scontoValore":"300",
            "scontoPercentuale":"30",
            "priceActivation":"3000",
            "offerta":"offerta3",
            "tipologiaVendita":"tipologiaVendita3",
            "CS2Purchase":"CS2Purchase3",
            "BF2Purchase":"BF2Purchase3",
            "isPadreBF2Purchase":"isPadreBF2Purchase3",
            "CSwithBonus":"CSwithBonus3",
            "BFwithBonus":"BFwithBonus3",
            "taglioRicarica":"taglioRicarica3",
            "totaleCarrello":"totaleCarrello3",
            "ricaricaMinGenerazione":"ricaricaMinGenerazione3",
            "ricaricaMaxGenerazione":"ricaricaMaxGenerazione3",
            "ricaricaTipoGenerazione":"ricaricaTipoGenerazione3",
            "ricaricaMinApplicazione":"ricaricaMinApplicazione3",
            "importoRicaricaBonus":"30000",
            "ricaricaTipoApplicazione":"RICARICA",
            "codicePromo":"codicePromo3",
            "IdCondition":"IdCondition3"
          }, {
            "scontoValore":"400",
            "scontoPercentuale":"40",
            "priceActivation":"4000",
            "offerta":"offerta4",
            "tipologiaVendita":"tipologiaVendita4",
            "CS2Purchase":"CS2Purchase4",
            "BF2Purchase":"BF2Purchase4",
            "isPadreBF2Purchase":"isPadreBF2Purchase4",
            "CSwithBonus":"CSwithBonus4",
            "BFwithBonus":"BFwithBonus4",
            "taglioRicarica":"taglioRicarica4",
            "totaleCarrello":"totaleCarrello4",
            "ricaricaMinGenerazione":"ricaricaMinGenerazione4",
            "ricaricaMaxGenerazione":"ricaricaMaxGenerazione4",
            "ricaricaTipoGenerazione":"ricaricaTipoGenerazione4",
            "ricaricaMinApplicazione":"ricaricaMinApplicazione4",
            "importoRicaricaBonus":"40000",
            "ricaricaTipoApplicazione":"RICARICA",
            "codicePromo":"codicePromo4",
            "IdCondition":"IdCondition4"
          },
          {
            "scontoValore":"500",
            "scontoPercentuale":"50",
            "priceActivation":"5000",
            "offerta":"offerta5",
            "tipologiaVendita":"tipologiaVendita5",
            "CS2Purchase":"CS2Purchase5",
            "BF2Purchase":"BF2Purchase5",
            "isPadreBF2Purchase":"isPadreBF2Purchase5",
            "CSwithBonus":"CSwithBonus5",
            "BFwithBonus":"BFwithBonus5",
            "taglioRicarica":"taglioRicarica5",
            "totaleCarrello":"totaleCarrello5",
            "ricaricaMinGenerazione":"ricaricaMinGenerazione5",
            "ricaricaMaxGenerazione":"ricaricaMaxGenerazione5",
            "ricaricaTipoGenerazione":"ricaricaTipoGenerazione5",
            "ricaricaMinApplicazione":"ricaricaMinApplicazione5",
            "importoRicaricaBonus":"50000",
            "ricaricaTipoApplicazione":"RICARICA",
            "codicePromo":"codicePromo5",
            "IdCondition":"IdCondition5"
          },
          {
            "scontoValore":"600",
            "scontoPercentuale":"60",
            "priceActivation":"6000",
            "offerta":"offerta6",
            "tipologiaVendita":"tipologiaVendita6",
            "CS2Purchase":"CS2Purchase6",
            "BF2Purchase":"BF2Purchase6",
            "isPadreBF2Purchase":"isPadreBF2Purchase6",
            "CSwithBonus":"CSwithBonus6",
            "BFwithBonus":"BFwithBonus6",
            "taglioRicarica":"taglioRicarica6",
            "totaleCarrello":"totaleCarrello6",
            "ricaricaMinGenerazione":"ricaricaMinGenerazione6",
            "ricaricaMaxGenerazione":"ricaricaMaxGenerazione6",
            "ricaricaTipoGenerazione":"ricaricaTipoGenerazione6",
            "ricaricaMinApplicazione":"ricaricaMinApplicazione6",
            "importoRicaricaBonus":"60000",
            "ricaricaTipoApplicazione":"RICARICA",
            "codicePromo":"codicePromo6",
            "IdCondition":"IdCondition6"
          },
          {
            "scontoValore":"600",
            "scontoPercentuale":"60",
            "priceActivation":"6000",
            "offerta":"offerta6",
            "tipologiaVendita":"tipologiaVendita6",
            "CS2Purchase":"CS2Purchase6",
            "BF2Purchase":"BF2Purchase6",
            "isPadreBF2Purchase":"isPadreBF2Purchase6",
            "CSwithBonus":"CSwithBonus6",
            "BFwithBonus":"BFwithBonus6",
            "taglioRicarica":"taglioRicarica6",
            "totaleCarrello":"totaleCarrello6",
            "ricaricaMinGenerazione":"ricaricaMinGenerazione6",
            "ricaricaMaxGenerazione":"ricaricaMaxGenerazione6",
            "ricaricaTipoGenerazione":"ricaricaTipoGenerazione6",
            "ricaricaMinApplicazione":"ricaricaMinApplicazione6",
            "importoRicaricaBonus":"60000",
            "ricaricaTipoApplicazione":"RICARICA",
            "codicePromo":"codicePromo6",
            "IdCondition":"IdCondition6"
          },
          {
            "scontoValore":"700",
            "scontoPercentuale":"70",
            "priceActivation":"7000",
            "offerta":"offerta7",
            "tipologiaVendita":"tipologiaVendita7",
            "CS2Purchase":"CS2Purchase7",
            "BF2Purchase":"BF2Purchase7",
            "isPadreBF2Purchase":"isPadreBF2Purchase7",
            "CSwithBonus":"CSwithBonus7",
            "BFwithBonus":"BFwithBonus7",
            "taglioRicarica":"taglioRicarica7",
            "totaleCarrello":"totaleCarrello7",
            "ricaricaMinGenerazione":"ricaricaMinGenerazione7",
            "ricaricaMaxGenerazione":"ricaricaMaxGenerazione7",
            "ricaricaTipoGenerazione":"ricaricaTipoGenerazione7",
            "ricaricaMinApplicazione":"ricaricaMinApplicazione7",
            "importoRicaricaBonus":"70000",
            "ricaricaTipoApplicazione":"RICARICA",
            "codicePromo":"codicePromo7",
            "IdCondition":"IdCondition7"
          }
        ]
      }
    };

  res.send(json); // send text response
});

app.post('/createCondition', function(req, res) {

  var json =
  {
    "createConditionResponse": {
      "header": {
        "result": "Fatal Error",
        "code": "0",
        "description": "operation failed"
      },
      "payload": {
        "idCondition": "id_cod_001"

      }
    }
  };
  res.send(json); // send text response
});


app.post('/deletePromo', function(req, res) {

  var json =
  {
    "deletePromoResponse": {
      "header": {
        "result": "Fatal Error",
        "code": "0",
        "description": "operation failed"
      }
    }
  };
  res.send(json); // send text response
});


app.post('/deleteCondition', function(req, res) {

  var json =
  {
    "deleteConditionResponse": {
      "header": {
        "result": "Fatal Error",
        "code": "0",
        "description": "operation failed"
      }
    }
  };
  res.send(json); // send text response
});




app.listen(process.env.PORT || 4730);
