angular.module('app')
  .controller('attributeCtrl', function ($scope, $timeout) {
  $scope.model = $scope.model || {};


    //todo qui va richiamato il servizio di GET
    $scope.submit = function()
    {
      delete $scope.tableData;
      console.log("form submitted...loading");
      $scope.loading = true;
      //CS Attribute Table columns
      $timeout(function() {
        $scope.tableData = [
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
        $scope.loading = false;
      }, 1500);

    };







});

