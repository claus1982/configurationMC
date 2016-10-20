/**
 * Created by claudio.a.visco on 18-Oct-16.
 */

var express = require('express');
var app = express();

var json =
{
  "getWebResponse":{
    "header":{
      "result":"0",
      "errorCode":"KO",
      "description":"operation completed"
    },
    "payload":[
      {
        "webDescription":"Tim Special",
        "longDescriptionWeb":"Tim Special",
        "joinedSeniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":true,
        "paymentMethodWeb":"Carta di Credito",
        "nomeOfferta":"Tim Special",
        "nomeProdotto":"ODE46 - Internet 7 giorni",
        "codiceCartaServizi":12345,
        "defaultFlag":true,
        "parentDisplayName":"Tim Special"
      },
      {
        "webDescription":"Tim Young",
        "longDescriptionWeb":"Tim Young",
        "joinedSeniorityConstraintWeb":"AL|MNP|CB",
        "isWebSellable":true,
        "paymentMethodWeb":"Carta di Credito",
        "nomeOfferta":"Tim Young",
        "nomeProdotto":"ODE46 - Internet 7 giorni",
        "codiceCartaServizi":12345,
        "defaultFlag":true,
        "parentDisplayName":"Tim Young"
      }
    ]
  }
};


var quotes = json.getWebResponse.payload;

app.post('/getWeb', function(req, res) {

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
