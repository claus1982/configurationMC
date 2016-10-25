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
        "joinedSeniorityConstraintWeb":"AL",
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
        "joinedSeniorityConstraintWeb":"AL|MNP",
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
        "joinedSeniorityConstraintWeb":"AL|MNP|CB",
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
        "joinedSeniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"true",
        "paymentMethodWeb":"Carta di Credito|Pay Pal",
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
 "joinedSeniorityConstraintWeb": "SeniorityConstraintWeb1",
 "isWebSellable": "true",
 "paymentMethodWeb": "Carta di Credito",
 "pianoTariffarioWeb": "pianoTariffarioWeb1",
 "TIDweb": "TIDweb1"
 },
   {
     "nomeProdotto": "nomeProdotto2",
     "webDescription": "webDescription2",
     "longDescriptionWeb": "longDescriptionWeb2",
     "joinedSeniorityConstraintWeb": "SeniorityConstraintWeb2",
     "isWebSellable": "true",
     "paymentMethodWeb": "Carta di Credito",
     "pianoTariffarioWeb": "pianoTariffarioWeb2",
     "TIDweb": "TIDweb2"
   },
   {
     "nomeProdotto": "nomeProdotto3",
     "webDescription": "webDescription3",
     "longDescriptionWeb": "longDescriptionWeb3",
     "joinedSeniorityConstraintWeb": "SeniorityConstraintWeb3",
     "isWebSellable": "true",
     "paymentMethodWeb": "Carta di Credito",
     "pianoTariffarioWeb": "pianoTariffarioWeb3",
     "TIDweb": "TIDweb3"
   },
   {
     "nomeProdotto": "nomeProdotto4",
     "webDescription": "webDescription4",
     "longDescriptionWeb": "longDescriptionWeb4",
     "joinedSeniorityConstraintWeb": "SeniorityConstraintWeb4",
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
 "joinedSeniorityConstraintWeb": "SeniorityConstraintWeb1",
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
 "joinedSeniorityConstraintWeb": "SeniorityConstraintWeb1",
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
 "joinedSeniorityConstraintWeb": "SeniorityConstraintWeb1",
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
 "joinedSeniorityConstraintWeb": "SeniorityConstraintWeb1",
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
          "codicePromo": "Promo1",
          "nomePromo": "NomePromo1",
          "descrizionePromo": "DescrizionePromo1",
          "periodoValidita": "10/07/2012 - 10/07/2020"
        },
        {
          "codicePromo": "Promo2",
          "nomePromo": "NomePromo2",
          "descrizionePromo": "DescrizionePromo2",
          "periodoValidita": "20/07/2022 - 20/07/2020"
        },
        {
          "codicePromo": "Promo3",
          "nomePromo": "NomePromo3",
          "descrizionePromo": "DescrizionePromo3",
          "periodoValidita": "30/07/2032 - 30/07/2020"
        },
        {
          "codicePromo": "Promo4",
          "nomePromo": "NomePromo4",
          "descrizionePromo": "DescrizionePromo4",
          "periodoValidita": "40/07/2042 - 40/07/2020"
        }

      ]
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
            "NMU": "NMU1",
            "isPadre": "true",
            "price": "200",
            "scontoValore": "100",
            "scontoPercentuale": "50"
          },
          {
            "NMU": "NMU1",
            "isPadre": "true",
            "price": "200",
            "scontoValore": "100",
            "scontoPercentuale": "50"
          },
          {
            "NMU": "NMU1",
            "isPadre": "true",
            "price": "200",
            "scontoValore": "100",
            "scontoPercentuale": "50"
          },
          {
            "NMU": "NMU1",
            "isPadre": "true",
            "price": "200",
            "scontoValore": "100",
            "scontoPercentuale": "50"
          }

        ]
      }
    };

  res.send(json); // send text response
});



app.listen(process.env.PORT || 4730);
