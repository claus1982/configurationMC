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
      "result":"Success",
      "code":"0",
      "description":"operation completed"
    },
    "payload":[
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"FF056 - NUMERO AMICO PER TIM YOUNG",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":null,
        "codiceCartaServizi":"FF056",
        "defaultFlag":"Y",
        "prezzo": "100.5",
        "parentDisplayName":"Numero Amico per TIM YOUNG"
      },
      {
        "nomeOfferta":"Tim Young Junior",
        "nomeProdotto":"FF058 - TIM YOUNG JR",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":null,
        "codiceCartaServizi":"FF058",
        "defaultFlag":"Y",
        "prezzo": 101.5,
        "parentDisplayName":"TIM Young Junior"
      },
      {
        "nomeOfferta":"Tim Young Junior",
        "nomeProdotto":"FF067 - TIM Young Junior Plus",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"AL",
        "isWebSellable":"Y",
        "paymentMethodWeb":null,
        "codiceCartaServizi":"FF067",
        "defaultFlag":null,
        "prezzo": 0,
        "parentDisplayName":null
      },
      {
        "nomeOfferta":"Tim Young Junior",
        "nomeProdotto":"FF068 - TIM Young Junior",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"AL",
        "isWebSellable":"Y",
        "paymentMethodWeb":null,
        "codiceCartaServizi":"FF068",
        "defaultFlag":null,
        "prezzo": "0",
        "parentDisplayName":null
      },
      {
        "nomeOfferta":"Offerte per te",
        "nomeProdotto":"ODE60 - TIM YOUNG x TE",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Credito Residuo",
        "codiceCartaServizi":"ODE60",
        "defaultFlag":null,
        "parentDisplayName":null
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODI06 - 1GB con TIM YOUNG",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":null,
        "codiceCartaServizi":"ODI06",
        "defaultFlag":"N",
        "parentDisplayName":"Default Product Servizio Mobile"
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODL62 - TIM YOUNG XL POWERED",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":null,
        "codiceCartaServizi":"ODL62",
        "defaultFlag":"N",
        "parentDisplayName":"Default Product Servizio Mobile"
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODL63 - 200 MINUTI CON TIM YOUNG",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":null,
        "codiceCartaServizi":"ODL63",
        "defaultFlag":"N",
        "parentDisplayName":"Default Product Servizio Mobile"
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODO89 - TIM YOUNG AND MUSIC NEW CB",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":null,
        "codiceCartaServizi":"ODO89",
        "defaultFlag":"N",
        "parentDisplayName":"TIM YOUNG & Music"
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODO90 - TIM YOUNG AND MUSIC NEW AL/MNP",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"AL|MNP",
        "isWebSellable":"Y",
        "paymentMethodWeb":null,
        "codiceCartaServizi":"ODO90",
        "defaultFlag":"Y",
        "parentDisplayName":"TIM YOUNG & Music"
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODO91 - MINUTI per TIM YOUNG",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":null,
        "codiceCartaServizi":"ODO91",
        "defaultFlag":"Y",
        "parentDisplayName":"Opzione Minuti"
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODP35 - SOCIAL LTE per TIM YOUNG",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":null,
        "codiceCartaServizi":"ODP35",
        "defaultFlag":"Y",
        "parentDisplayName":"Opzione Social"
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODQ07 - TIM YOUNG AND MUSIC 13E",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"AL|MNP",
        "isWebSellable":"Y",
        "paymentMethodWeb":null,
        "codiceCartaServizi":"ODQ07",
        "defaultFlag":"Y",
        "parentDisplayName":"TIM YOUNG & Music Web Edition"
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODQ09 - 500 MINUTI per TIM YOUNG",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":null,
        "codiceCartaServizi":"ODQ09",
        "defaultFlag":"N",
        "parentDisplayName":"Default Product Servizio Mobile"
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODQ10 - 2GB 4G LTE per TIM YOUNG",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":null,
        "codiceCartaServizi":"ODQ10",
        "defaultFlag":"Y",
        "parentDisplayName":"Opzione Internet 2GB 4G"
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODQ11 - 1GB 4G LTE per TIM YOUNG",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":null,
        "codiceCartaServizi":"ODQ11",
        "defaultFlag":"Y",
        "parentDisplayName":"Opzione Internet  1 GB 4G"
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODR56 - TIM YOUNG MUSIC DGT CB",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":null,
        "codiceCartaServizi":"ODR56",
        "defaultFlag":"N",
        "parentDisplayName":"TIM YOUNG & MUSIC DIGITAL"
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODR58 - TIM YOUNG MUSIC DGT AL/MNP",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"AL|MNP",
        "isWebSellable":"Y",
        "paymentMethodWeb":null,
        "codiceCartaServizi":"ODR58",
        "defaultFlag":"N",
        "parentDisplayName":"TIM YOUNG & MUSIC DIGITAL"
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODR59 - TIM YOUNG MUSIC FULL DGT CB",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":null,
        "codiceCartaServizi":"ODR59",
        "defaultFlag":"N",
        "parentDisplayName":"TIM  YOUNG & MUSIC FULL DIGITAL"
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODR61 - TIM YOUNG MUSIC",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":null,
        "codiceCartaServizi":"ODR61",
        "defaultFlag":"Y",
        "parentDisplayName":"TIM YOUNG & MUSIC"
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODS98 - TIM YOUNG XL POWERED WEEK",
        "webDescription":null,
        "longDescriptionWeb":"ODS98 TIM YOUNG XL POWERED WEEK 200 min illimitato vs TIM 1000sms 2GB LTE250E ogni 7gg x 4 week poi 9E/28 ggTIMmusic incluso",
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Credito Residuo|Carta di Credito|Contrassegno|PAY PAL|Passepartout Offerte",
        "codiceCartaServizi":"ODS98",
        "defaultFlag":"N",
        "parentDisplayName":"Default Product Servizio Mobile"
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODT00 - TIM YOUNG XL POWERED NEW",
        "webDescription":null,
        "longDescriptionWeb":"ODT00 TIM YOUNG XL POWERED NEW200 min illimitato vs TIM 1000sms 2GB LTE  9E/ 28 gg costo att. gratuito. TIMmusic incluso",
        "seniorityConstraintWeb":"AL|MNP",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Credito Residuo|Carta di Credito|PAY PAL|Passepartout Offerte",
        "codiceCartaServizi":"ODT00",
        "defaultFlag":"N",
        "parentDisplayName":"Default Product Servizio Mobile"
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODT23 - TIM YOUNG MUSIC PLUS CB",
        "webDescription":null,
        "longDescriptionWeb":"ODT23 TIM YOUNG MUSIC PLUS CB1000sms vs tutti 5 GBLTE 9E/28 gg-TIMmusic-Costo disatt.se cx prima 12 rinnovi-solo CdC/cc bancario",
        "seniorityConstraintWeb":"CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Contanti|Carta di Credito|PAY PAL|Passepartout Offerte",
        "codiceCartaServizi":"ODT23",
        "defaultFlag":"Y",
        "parentDisplayName":"TIM YOUNG & MUSIC DIGITAL"
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODT24 - TIM YOUNG MUSIC PLUS AL/MNP",
        "webDescription":null,
        "longDescriptionWeb":"ODT24 TIM YOUNG MUSIC PLUS AL/MNP 1000sms vs tutti 5 GBLTE 9E/28 gg-TIMmusic-Costo disatt.se cx prima 12 rinnovi-solo CdC/cc bancario",
        "seniorityConstraintWeb":"AL|MNP",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Contanti|Carta di Credito|PAY PAL|Passepartout Offerte",
        "codiceCartaServizi":"ODT24",
        "defaultFlag":"N",
        "parentDisplayName":"Default Product Servizio Mobile"
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODT92 - TIM YOUNG Junior Plus",
        "webDescription":"ODT92 TIM YOUNG Junior Plus",
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"AL",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Contanti|Credito Residuo",
        "codiceCartaServizi":"ODT92",
        "defaultFlag":null,
        "parentDisplayName":null
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODT93 - TIM Young Junior",
        "webDescription":"ODT93 TIM YOUNG Junior",
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"AL",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Credito Residuo",
        "codiceCartaServizi":"ODT93",
        "defaultFlag":null,
        "parentDisplayName":null
      },
      {
        "nomeOfferta":"Tim Young Junior",
        "nomeProdotto":"ODT9W - TIM YOUNG Junior Plus",
        "webDescription":"ODT9W TIM YOUNG JUNIOR PLUS",
        "longDescriptionWeb":"ODT9W TIM YOUNG JUNIOR PLUS 60min60smsNumAmico1GBLTE TIMPROTECT eTIMGAMES jr8E/28gg-no costo attivaz. solo cdc-rid bancario",
        "seniorityConstraintWeb":"AL",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Carta di Credito|PAY PAL|Passepartout Offerte CC",
        "codiceCartaServizi":"ODT9W",
        "defaultFlag":null,
        "parentDisplayName":null
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODTAJ - TIM YOUNG MUSIC FULL DGT AL/MNP NEW",
        "webDescription":"ODTAJ - TIM YOUNG MUSIC FULL DGT AL/MNP NEW",
        "longDescriptionWeb":"ODTAJ: TIM YOUNG&MUSIC FULL DGT AL/MNP NEW500 min 500sms vs tutti 3GB LTE   12E/28 gg costo att. 3E. TIMmusic incluso",
        "seniorityConstraintWeb":"AL|MNP",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Credito Residuo|Carta di Credito|PAY PAL|Passepartout Offerte",
        "codiceCartaServizi":"ODTAJ",
        "defaultFlag":null,
        "parentDisplayName":null
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODTAK - TIM YOUNG MUSIC FULL NEW",
        "webDescription":"ODTAK - TIM YOUNG MUSIC FULL NEW",
        "longDescriptionWeb":"ODTAK: TIM YOUNG&MUSIC FULL NEW500 min 500sms vs tutti 3GB LTE   15E/28 gg costo att. 19E. TIMmusic incluso",
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":"Credito Residuo|Carta di Credito|PAY PAL|Passepartout Offerte",
        "codiceCartaServizi":"ODTAK",
        "defaultFlag":null,
        "parentDisplayName":null
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODTAL - TIM YOUNG MUSIC FULL PLUS CB NEW",
        "webDescription":"ODTAL - TIM YOUNG MUSIC FULL PLUS CB NEW",
        "longDescriptionWeb":"ODTAL: TIM YOUNG&MUSIC FULL PLUS CB NEW500 min 500sms vs tutti 5GB LTE   12E/28 gg Costo disatt.19E se cx prima 12 rinnovi",
        "seniorityConstraintWeb":"CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":"|Carta di Credito|PAY PAL|",
        "codiceCartaServizi":"ODTAL",
        "defaultFlag":null,
        "parentDisplayName":null
      },
      {
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODTAM - TIM YOUNG MUSIC FULL PLUS AL/MNP NEW",
        "webDescription":"ODTAM - TIM YOUNG MUSIC FULL PLUS AL/MNP NEW",
        "longDescriptionWeb":"ODTAM: TIM YOUNG&MUSIC FULL PLUS AL/MNP NEW500 min 500sms vs tutti 5GB LTE   12E/28 gg Costo disatt.19E se cx prima 12 rinnovi",
        "seniorityConstraintWeb":"AL|MNP",
        "isWebSellable":"Y",
        "paymentMethodWeb":"|Carta di Credito|PAY PAL|",
        "codiceCartaServizi":"ODTAM",
        "defaultFlag":null,
        "parentDisplayName":null
      },
      {
        "nomeOfferta":"Offerte per te",
        "nomeProdotto":"OF492 - Fit_TIM YOUNG AND MUSIC",
        "webDescription":null,
        "longDescriptionWeb":null,
        "seniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":"Y",
        "paymentMethodWeb":null,
        "codiceCartaServizi":"OF492",
        "defaultFlag":null,
        "parentDisplayName":null
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
          "inizioValidita":"10/07/2017",
          "fineValidita":"10/08/2017",
          "inizioGenerazione":"04/07/2020",
          "fineGenerazione":"04/08/2020",
          "codiceTemplateSMS":"codiceTemplateSMS0",
          "codiceTemplateMAIL":"codiceTemplateMAIL0",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":"0",
          "sysdate":"10/07/2017 12:34"
        },
        {
          "codicePromo":"codicePromo1",
          "nomePromo":"nomePromo1",
          "promoBatch":"Y",
          "descrizionePromo":"descrizionePromo1",
          "inizioValidita":"10/07/2017",
          "fineValidita":"10/08/2017",
          "inizioGenerazione":"04/07/2021",
          "fineGenerazione":"04/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS1",
          "codiceTemplateMAIL":"codiceTemplateMAIL1",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":1,
          "sysdate":"10/07/2017 12:34"
        },
        {
          "codicePromo":"codicePromo2",
          "nomePromo":"nomePromo2",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo2",
          "inizioValidita":"11/12/2017",
          "fineValidita":"22/12/2017",
          "inizioGenerazione":"04/12/2022",
          "fineGenerazione":"04/07/2024",
          "codiceTemplateSMS":"codiceTemplateSMS2",
          "codiceTemplateMAIL":"codiceTemplateMAIL2",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":2,
          "sysdate":"10/07/2017 12:34"
        },
        {
          "codicePromo":"codicePromo3",
          "nomePromo":"nomePromo3",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo3",
          "inizioValidita":"10/07/2016",
          "fineValidita":"10/07/2017",
          "inizioGenerazione":"24/07/2023",
          "fineGenerazione":"04/07/2025",
          "codiceTemplateSMS":"codiceTemplateSMS3",
          "codiceTemplateMAIL":"codiceTemplateMAIL3",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":3,
          "sysdate":"10/07/2017 12:34"
        },
        {
          "codicePromo":"codicePromo4",
          "nomePromo":"nomePromo2",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo2",
          "inizioValidita":"10/07/2017",
          "fineValidita":"10/07/2017",
          "inizioGenerazione":"04/07/2020",
          "fineGenerazione":"04/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS2",
          "codiceTemplateMAIL":"codiceTemplateMAIL2",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":2,
          "sysdate":"10/07/2017 12:34"
        },
        {
          "codicePromo":"codicePromo5",
          "nomePromo":"nomePromo3",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo3",
          "inizioValidita":"09/07/2017",
          "fineValidita":"11/07/2017",
          "inizioGenerazione":"04/08/2020",
          "fineGenerazione":"03/12/2020",
          "codiceTemplateSMS":"codiceTemplateSMS3",
          "codiceTemplateMAIL":"codiceTemplateMAIL3",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":3,
          "sysdate":"10/07/2017 12:34"
        },
        {
          "codicePromo":"codicePromo6",
          "nomePromo":"nomePromo2",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo2",
          "inizioValidita":"10/07/2017",
          "fineValidita":"10/07/2017",
          "inizioGenerazione":"04/07/2020",
          "fineGenerazione":"04/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS2",
          "codiceTemplateMAIL":"codiceTemplateMAIL2",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":2,
          "sysdate":"10/07/2017 12:34"
        },
        {
          "codicePromo":"codicePromo7",
          "nomePromo":"nomePromo3",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo3",
          "inizioValidita":"10/07/2017",
          "fineValidita":"10/07/2017",
          "inizioGenerazione":"04/07/2020",
          "fineGenerazione":"04/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS3",
          "codiceTemplateMAIL":"codiceTemplateMAIL3",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":3,
          "sysdate":"10/07/2017 12:34"
        },
        {
          "codicePromo":"codicePromo8",
          "nomePromo":"nomePromo2",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo2",
          "inizioValidita":"10/07/2017",
          "fineValidita":"10/07/2017",
          "inizioGenerazione":"04/07/2020",
          "fineGenerazione":"04/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS2",
          "codiceTemplateMAIL":"codiceTemplateMAIL2",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":2,
          "sysdate":"10/07/2017 12:34"
        },
        {
          "codicePromo":"codicePromo9",
          "nomePromo":"nomePromo3",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo3",
          "inizioValidita":"10/07/2017",
          "fineValidita":"10/07/2017",
          "inizioGenerazione":"04/07/2020",
          "fineGenerazione":"04/07/2020",
          "codiceTemplateSMS":"codiceTemplateSMS3",
          "codiceTemplateMAIL":"codiceTemplateMAIL3",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":3,
          "sysdate":"10/07/2017 12:34"
        },
        {
          "codicePromo":"codicePromo10",
          "nomePromo":"nomePromo2",
          "promoBatch":"N",
          "descrizionePromo":"descrizionePromo2",
          "inizioValidita":"10/07/2017",
          "fineValidita":"10/07/2017",
          "inizioGenerazione":"01/01/2045",
          "fineGenerazione":"04/04/2046",
          "codiceTemplateSMS":"codiceTemplateSMS2",
          "codiceTemplateMAIL":"codiceTemplateMAIL2",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":2,
          "sysdate":"10/07/2017 12:34"
        },
        {
          "codicePromo":"codicePromo11",
          "nomePromo":"nomePromo3",
          "promoBatch":"Y",
          "descrizionePromo":"descrizionePromo3",
          "inizioValidita":"10/07/2017",
          "fineValidita":"10/07/2017",
          "inizioGenerazione":"01/10/2024",
          "fineGenerazione":"04/07/2030",
          "codiceTemplateSMS":"codiceTemplateSMS3",
          "codiceTemplateMAIL":"codiceTemplateMAIL3",
          "flagLinea":"Y",
          "limiteUtilizzoCoupon":3,
          "sysdate":"10/07/2017 12:34"
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
          "inizioValidita":"10/01/2017",
          "fineValidita":"10/07/2017",
          "descrizionePack":"descpack0"
        },
        {
          "codicePack":"codicePack1",
          "nomePack":"nomePack1",
          "inizioValidita":"09/03/2017",
          "fineValidita":"10/04/2017",
          "descrizionePack":"descpack1"
        },
        {
          "codicePack":"codicePack2",
          "nomePack":"nomePack2",
          "inizioValidita":"10/05/2017",
          "fineValidita":"10/08/2017",
          "descrizionePack":"descpack2"
        },
        {
          "codicePack":"codicePack3",
          "nomePack":"nomePack3",
          "inizioValidita":"10/02/2017",
          "fineValidita":"10/05/2017",
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
