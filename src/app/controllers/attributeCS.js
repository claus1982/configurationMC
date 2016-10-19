angular.module('app')
  .controller('attributeCSCtrl', function ($scope) {
  $scope.model = $scope.model || {};

    //CS Attribute Table columns
    $scope.CSTable = [
      {'model':'nomeOfferta','title':'nomeOfferta','type':'text'},
      {'model':'nomeProdotto','title':'nomeProdotto','type':'text'},
      {'model':'codiceCartaServizi','title':'codiceCartaServizi','type':'text'},
      {'model':'defaultFlag','title':'defaultFlag','type':'options'},
      {'model':'parentDisplayName','title':'parentDisplayName','type':'text'},
      {'model':'webDescription','title':'webDescription','type':'text'},
      {'model':'longDescriptionWeb','title':'longDescriptionWeb','type':'text'},
      {'model':'joinedSeniorityConstraintWEB','title':'joinedSeniorityConstraintWEB','type':'text'},
      {'model':'isWebSellable','title':'isWebSellable','type':'options'},
      {'model':'paymentMethodWeb','title':'paymentMethodWeb','type':'text'}
    ];

    $scope.BFTable = [

    ];

});

