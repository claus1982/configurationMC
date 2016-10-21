/**
 * Created by claudio.a.visco on 18-Oct-16.
 */

var express = require('express');
var app = express();

var json =
{
  "getWebResponse":{
    "header":{
      "result":"Fatal Error",
      "code":"1",
      "description":"operation failed"
    },
    "payload":[
      {
        "webDescription":"Tim Special",
        "longDescriptionWeb":"Tim Special",
        "joinedSeniorityConstraintWeb":["AL", "MNP", "CB"],
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
        "joinedSeniorityConstraintWeb":["AL", "MNP", "CB"],
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
        "joinedSeniorityConstraintWeb":["AL", "MNP", "CB"],
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
        "joinedSeniorityConstraintWeb":["AL", "MNP", "CB"],
        "isWebSellable":"true",
        "paymentMethodWeb":"Carta di Credito",
        "nomeOfferta":"Tim Niente",
        "nomeProdotto":"ODE133 - Internet MAI i giorni",
        "codiceCartaServizi":"11123",
        "defaultFlag":"false",
        "parentDisplayName":"Tim Niente"
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
        "code":"1",
        "description":"operation failed"
      }
    }
  };

  res.send(json);
});



app.listen(process.env.PORT || 4730);
