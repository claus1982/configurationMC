angular.module('app')
  .controller('attributeCtrl', function ($scope, $timeout) {
  $scope.model = $scope.model || {};
    $scope.focusinControl = {};


    //todo qui va richiamato il servizio di GET
    $scope.submit = function()
    {
      //call getItems (GET SERVICE) from directive
      $scope.focusinControl.getItems();
      console.log("form submitted...loading");

      //CS Attribute Table columns

        $scope.columns = [
          {'model':'nomeOfferta','title':'Nome Offerta','type':'text'},
          {'model':'nomeProdotto','title':'Nome Prodotto','type':'text'},
          {'model':'codiceCartaServizi','title':'Codice Carta Servizi','type':'text'},
          {'model':'defaultFlag','title':'defaultFlag','type':'options'},
          {'model':'parentDisplayName','title':'parentDisplayName','type':'text'},
          {'model':'webDescription','title':'webDescription','type':'text'},
          {'model':'longDescriptionWeb','title':'longDescriptionWeb','type':'text'},
          {'model':'joinedSeniorityConstraintWEB','title':'joinedSeniorityConstraintWEB','type':'text'},
          {'model':'isWebSellable','title':'isWebSellable','type':'options'},
          {'model':'paymentMethodWeb','title':'paymentMethodWeb','type':'text'}
        ];

    };







});

