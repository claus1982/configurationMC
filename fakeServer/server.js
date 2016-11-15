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
          "inizioValidita":"10/07/2012",
          "fineValidita":"10/07/2012",
          "inizioGenerazione":"04/07/2020",
          "fineGenerazione":"04/07/2020",
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
          "inizioValidita":"10/07/2012",
          "fineValidita":"10/07/2012",
          "inizioGenerazione":"04/07/2021",
          "fineGenerazione":"04/07/2020",
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
          "inizioValidita":"25/12/2007",
          "fineValidita":"22/04/2012",
          "inizioGenerazione":"04/12/2022",
          "fineGenerazione":"04/07/2024",
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
          "inizioValidita":"10/07/2012",
          "fineValidita":"10/07/2012",
          "inizioGenerazione":"24/07/2023",
          "fineGenerazione":"04/07/2025",
          "codiceTemplateSMS":"codiceTemplateSMS3",
          "codiceTemplateMAIL":"codiceTemplateMAIL3",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon3",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo4",
          "nomePromo":"nomePromo2",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo2",
          "inizioValidita":"10/07/2012",
          "fineValidita":"10/07/2012",
          "inizioGenerazione":"04/07/2020",
          "fineGenerazione":"04/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS2",
          "codiceTemplateMAIL":"codiceTemplateMAIL2",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon2",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo5",
          "nomePromo":"nomePromo3",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo3",
          "inizioValidita":"09/07/2014",
          "fineValidita":"11/07/2013",
          "inizioGenerazione":"04/08/2020",
          "fineGenerazione":"03/12/2020",
          "codiceTemplateSMS":"codiceTemplateSMS3",
          "codiceTemplateMAIL":"codiceTemplateMAIL3",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon3",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo6",
          "nomePromo":"nomePromo2",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo2",
          "inizioValidita":"10/07/2012",
          "fineValidita":"10/07/2012",
          "inizioGenerazione":"04/07/2020",
          "fineGenerazione":"04/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS2",
          "codiceTemplateMAIL":"codiceTemplateMAIL2",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon2",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo7",
          "nomePromo":"nomePromo3",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo3",
          "inizioValidita":"10/07/2012",
          "fineValidita":"10/07/2012",
          "inizioGenerazione":"04/07/2020",
          "fineGenerazione":"04/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS3",
          "codiceTemplateMAIL":"codiceTemplateMAIL3",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon3",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo8",
          "nomePromo":"nomePromo2",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo2",
          "inizioValidita":"10/07/2012",
          "fineValidita":"10/07/2012",
          "inizioGenerazione":"04/07/2020",
          "fineGenerazione":"04/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS2",
          "codiceTemplateMAIL":"codiceTemplateMAIL2",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon2",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo9",
          "nomePromo":"nomePromo3",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo3",
          "inizioValidita":"10/07/2012",
          "fineValidita":"10/07/2012",
          "inizioGenerazione":"04/07/2020",
          "fineGenerazione":"04/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS3",
          "codiceTemplateMAIL":"codiceTemplateMAIL3",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon3",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo10",
          "nomePromo":"nomePromo2",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo2",
          "inizioValidita":"10/07/2012",
          "fineValidita":"10/07/2012",
          "inizioGenerazione":"01/01/2045",
          "fineGenerazione":"04/04/2046",
          "codiceTemplateSMS":"codiceTemplateSMS2",
          "codiceTemplateMAIL":"codiceTemplateMAIL2",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":"limiteUtilizzoCoupon2",
          "sysdate":"10/07/2012 12:34"
        },
        {
          "codicePromo":"codicePromo1",
          "nomePromo":"nomePromo3",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo3",
          "inizioValidita":"10/07/2012",
          "fineValidita":"10/07/2012",
          "inizioGenerazione":"01/10/2024",
          "fineGenerazione":"04/07/2030",
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
            "prezzoAttivazione":"1000",
            "offerta":"offerta1",
            "tipologiaVendita":"tipologiaVendita1",
            "cs2purchase":"CS2Purchase1",
            "bf2purchase":"BF2Purchase1",
            "isPadreBf2purchase":"isPadreBF2Purchase1",
            "csWithBonus":"CSwithBonus1",
            "bfwithBonus":"BFwithBonus1",
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
            "prezzoAttivazione":"2000",
            "offerta":"offerta2",
            "tipologiaVendita":"tipologiaVendita2",
            "cs2purchase":"CS2Purchase2",
            "bf2purchase":"BF2Purchase2",
            "isPadreBf2purchase":"isPadreBF2Purchase2",
            "csWithBonus":"CSwithBonus2",
            "bfwithBonus":"BFwithBonus2",
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
            "prezzoAttivazione":"3000",
            "offerta":"offerta3",
            "tipologiaVendita":"tipologiaVendita3",
            "cs2purchase":"CS2Purchase3",
            "bf2purchase":"BF2Purchase3",
            "isPadreBf2purchase":"isPadreBF2Purchase3",
            "csWithBonus":"CSwithBonus3",
            "bfwithBonus":"BFwithBonus3",
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
            "prezzoAttivazione":"4000",
            "offerta":"offerta4",
            "tipologiaVendita":"tipologiaVendita4",
            "cs2purchase":"CS2Purchase4",
            "bf2purchase":"BF2Purchase4",
            "isPadreBf2purchase":"isPadreBF2Purchase4",
            "csWithBonus":"CSwithBonus4",
            "bfwithBonus":"BFwithBonus4",
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
            "prezzoAttivazione":"5000",
            "offerta":"offerta5",
            "tipologiaVendita":"tipologiaVendita5",
            "cs2purchase":"CS2Purchase5",
            "bf2purchase":"BF2Purchase5",
            "isPadreBf2purchase":"isPadreBF2Purchase5",
            "csWithBonus":"CSwithBonus5",
            "bfwithBonus":"BFwithBonus5",
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
            "prezzoAttivazione":"6000",
            "offerta":"offerta6",
            "tipologiaVendita":"tipologiaVendita6",
            "cs2purchase":"CS2Purchase6",
            "bf2purchase":"BF2Purchase6",
            "isPadreBf2purchase":"isPadreBF2Purchase6",
            "csWithBonus":"CSwithBonus6",
            "bfwithBonus":"BFwithBonus6",
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
            "prezzoAttivazione":"6000",
            "offerta":"offerta6",
            "tipologiaVendita":"tipologiaVendita6",
            "cs2purchase":"CS2Purchase6",
            "bf2purchase":"BF2Purchase6",
            "isPadreBf2purchase":"isPadreBF2Purchase6",
            "csWithBonus":"CSwithBonus6",
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
            "prezzoAttivazione":"7000",
            "offerta":"offerta7",
            "tipologiaVendita":"tipologiaVendita7",
            "cs2purchase":"CS2Purchase7",
            "bf2purchase":"BF2Purchase7",
            "isPadreBf2purchase":"isPadreBF2Purchase7",
            "csWithBonus":"CSwithBonus7",
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


app.post('/getPack', function(req, res) {

  var json =
  {
    "getPackResponse":{
      "header":{
        "result":"Fatal Error",
        "code":"0",
        "description":"operation failed"
      },
      "payload":[
        {
          "codicePack":"codicePack0",
          "nomePack":"nomePack0",
          "inizioValidita":"10/01/2012",
          "fineValidita":"10/07/2013",
          "descrizionePack":"descpack0"
        },
        {
          "codicePack":"codicePack1",
          "nomePack":"nomePack1",
          "inizioValidita":"09/03/2013",
          "fineValidita":"10/04/2015",
          "descrizionePack":"descpack1"
        },
        {
          "codicePack":"codicePack2",
          "nomePack":"nomePack2",
          "inizioValidita":"10/05/2014",
          "fineValidita":"10/03/2015",
          "descrizionePack":"descpack2"
        },
        {
          "codicePack":"codicePack3",
          "nomePack":"nomePack3",
          "inizioValidita":"10/02/2015",
          "fineValidita":"10/05/2016",
          "descrizionePack":"descpack3"
        }
      ]
    }
  };

  res.send(json); // send text response
});
app.post('/createPack', function(req, res) {

  var json =
  {
    "createPackResponse":{
      "header":{
        "result":"Fatal Error",
        "code":"0",
        "description":"operation failed"
      },
      "payload":
      {
        "codicePack": "cod_001"
      }
    }
  };

  res.send(json); // send text response
});
app.post('/getPackCondition', function(req, res) {

  var json =
  {
    "getPackConditionResponse":{
      "header":{
        "result":"Fatal Error",
        "code":"0",
        "description":"operation failed"
      },
      "payload":[
        {
          "offerta":"offerta0",
          "cs2purchase":"CS2Purchase0",
          "bf2purchase":"BF2Purchase0",
          "codicePack":"codicePack0",
          "IdPackCondition":"IdPackCondition0",
          "vincolo":"Soft"
        },
        {
          "offerta":"offerta1",
          "cs2purchase":"CS2Purchase1",
          "bf2purchase":"BF2Purchase1",
          "codicePack":"codicePack1",
          "IdPackCondition":"IdPackCondition1",
          "vincolo":"Hard"
        }
      ]
    }
  };

  res.send(json); // send text response
});
app.post('/createPackCondition', function(req, res) {

  var json =
  {
    "createPackConditionResponse": {
      "header": {
        "result": "Fatal Error",
        "code": "0",
        "description": "operation failed"
      },
      "payload": {
        "idPackCondition": "id_cod_001"

      }
    }
  };
  res.send(json); // send text response
});
app.post('/deletePack', function(req, res) {

  var json =
  {
    "deletePackResponse": {
      "header": {
        "result": "Fatal Error",
        "code": "0",
        "description": "operation failed"
      }
    }
  };
  res.send(json); // send text response
});
app.post('/deletePackCondition', function(req, res) {

  var json =
  {
    "deletePackConditionResponse": {
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
