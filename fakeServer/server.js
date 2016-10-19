/**
 * Created by claudio.a.visco on 18-Oct-16.
 */

var express = require('express');
var app = express();

var json = {
  "count": "6",
  "payload":[{
    "columns":[
      {"name":"Nome Offerta","orderBy":"nomeOfferta"},
      {"name":"Nome Prodotto ","orderBy":"nomeProdotto "},
      {"name":"Codice Carta Servizi","orderBy":"codiceCartaServizi"},
      {"name":"Default Flag","orderBy":"defaultFlag"},
      {"name":"Parent Display Name","orderBy":"parentDisplayName"},
      {"name":"Web Description","orderBy":"webDescription"},
      {"name":"Long Description Web","orderBy":"longDescriptionWeb"},
      {"name":"Joined Seniority Constraint WEB","orderBy":"joinedSeniorityConstraintWEB"},
      {"name":"Is Web Sellable","orderBy":"isWebSellable"},
      {"name":"Payment Method Web","orderBy":"paymentMethodWeb"}
    ],
    "data": [
      {
        "nomeOfferta"                 :  "nomeOfferta1"                ,
        "nomeProdotto"                :  "nomeProdotto1"               ,
        "codiceCartaServizi"         :  "codiceCartaServizi1"        ,
        "defaultFlag"                  :  "defaultFlag1"                 ,
        "parentDisplayName"            :  "parentDisplayName1"           ,
        "webDescription"               :  "webDescription1"              ,
        "longDescriptionWeb"           :  "longDescriptionWeb1"          ,
        "joinedSeniorityConstraintWEB" :  "joinedSeniorityConstraintWEB1",
        "isWebSellable"                :  "SI"               ,
        "paymentMethodWeb"             :  "paymentMethodWeb1"
      },
      {
        "nomeOfferta"                 :  "nomeOfferta2"                ,
        "nomeProdotto"                :  "nomeProdotto2"               ,
        "codiceCartaServizi"         :  "codiceCartaServizi2"        ,
        "defaultFlag"                  :  "defaultFlag2"                 ,
        "parentDisplayName"            :  "parentDisplayName2"           ,
        "webDescription"               :  "webDescription2"              ,
        "longDescriptionWeb"           :  "longDescriptionWeb2"          ,
        "joinedSeniorityConstraintWEB" :  "joinedSeniorityConstraintWEB2",
        "isWebSellable"                :  "NO"               ,
        "paymentMethodWeb"             :  "paymentMethodWeb2"
      },
      {
        "nomeOfferta"                 :  "nomeOfferta3"                ,
        "nomeProdotto"                :  "nomeProdotto3"               ,
        "codiceCartaServizi"         :  "codiceCartaServizi3"        ,
        "defaultFlag"                  :  "defaultFlag3"                 ,
        "parentDisplayName"            :  "parentDisplayName3"           ,
        "webDescription"               :  "webDescription3"              ,
        "longDescriptionWeb"           :  "longDescriptionWeb3"          ,
        "joinedSeniorityConstraintWEB" :  "joinedSeniorityConstraintWEB3",
        "isWebSellable"                :  "SI"               ,
        "paymentMethodWeb"             :  "paymentMethodWeb3"
      },
      {
        "nomeOfferta"                 :  "nomeOfferta4"                ,
        "nomeProdotto"                :  "nomeProdotto4"               ,
        "codiceCartaServizi"         :  "codiceCartaServizi4"        ,
        "defaultFlag"                  :  "defaultFlag4"                 ,
        "parentDisplayName"            :  "parentDisplayName4"           ,
        "webDescription"               :  "webDescription4"              ,
        "longDescriptionWeb"           :  "longDescriptionWeb4"          ,
        "joinedSeniorityConstraintWEB" :  "joinedSeniorityConstraintWEB4",
        "isWebSellable"                :  "SI"               ,
        "paymentMethodWeb"             :  "paymentMethodWeb4"
      },
      {
        "nomeOfferta"                 :  "nomeOfferta5"                ,
        "nomeProdotto"                :  "nomeProdotto5"               ,
        "codiceCartaServizi"         :  "codiceCartaServizi5"        ,
        "defaultFlag"                  :  "defaultFlag5"                 ,
        "parentDisplayName"            :  "parentDisplayName5"           ,
        "webDescription"               :  "webDescription5"              ,
        "longDescriptionWeb"           :  "longDescriptionWeb5"          ,
        "joinedSeniorityConstraintWEB" :  "joinedSeniorityConstraintWEB5",
        "isWebSellable"                :  "NO"               ,
        "paymentMethodWeb"             :  "paymentMethodWeb5"
      },
      {
        "nomeOfferta"                 :  "nomeOfferta6"                ,
        "nomeProdotto"                :  "nomeProdotto6"               ,
        "codiceCartaServizi"         :  "codiceCartaServizi6"        ,
        "defaultFlag"                  :  "defaultFlag6"                 ,
        "parentDisplayName"            :  "parentDisplayName6"           ,
        "webDescription"               :  "webDescription6"              ,
        "longDescriptionWeb"           :  "longDescriptionWeb6"          ,
        "joinedSeniorityConstraintWEB" :  "joinedSeniorityConstraintWEB6",
        "isWebSellable"                :  "SI"               ,
        "paymentMethodWeb"             :  "paymentMethodWeb6"
      }
    ]
  }]
};

var quotes = json.payload[0].data;

app.get('/attribute/CS', function(req, res) {

  res.send(json); // send text response
});


app.get('/attribute/CS/:nomeOfferta', function(req, res) {
  var q = quotes.filter(function(obj){
    return obj.nomeOfferta === req.params.nomeOfferta;
  });

  if(q.length === 0) {
    res.statusCode = 404;
    return res.send('Error 404: No Offer found');
  }
  res.json(res.statusCode);
});

app.get('/attribute/CS/:nomeProdotto', function(req, res) {
  var q = quotes.filter(function(obj){
    return obj.nomeProdotto === req.params.nomeProdotto;
  });

  if(q.length === 0) {
    res.statusCode = 404;
    return res.send('Error 404: No Offer found');
  }
  res.json(q);
});

app.get('/attribute/CS/:nomeOfferta/:nomeProdotto', function(req, res) {
  var q = quotes.filter(function(obj){
    return (obj.nomeOfferta === req.params.nomeOfferta &&  obj.nomeProdotto === req.params.nomeProdotto);
  });

  if(q.length === 0) {
    res.statusCode = 404;
    return res.send('Error 404: No Offer found');
  }
  res.json(q);
});

app.listen(process.env.PORT || 4730);
