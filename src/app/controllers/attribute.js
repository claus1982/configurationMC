angular.module('app')
  .controller('attributeCtrl', function ($scope, $timeout, $dataTableResources, getWebService) {
    $scope.model = $scope.model || {};
    $scope.focusinControl = {};


    function success(res) {
      /*        $scope.columns = res.payload[0].columns;*/

      $scope.loading = false;
      $scope.items = res.payload[0];
      $scope.savedItems = JSON.parse(JSON.stringify($scope.items));

    }

    /*       function successSimpleData(res) {
     $scope.columnsSimpleData = res.payload[0].columns;
     $scope.itemsSimpleData = res.payload[0];
     }
     */

    //CS Attribute Table columns

    $scope.params = [
      {'name': 'nomeOfferta', 'title': 'Nome Offerta', 'type': 'text'},
      {'name': 'nomeProdotto', 'title': 'Nome Prodotto', 'type': 'text'}
    ];

    $scope.columns = [
      {'model': 'nomeOfferta', 'title': 'Nome Offerta', 'type': 'text'},
      {'model': 'nomeProdotto', 'title': 'Nome Prodotto', 'type': 'text'},
      {'model': 'codiceCartaServizi', 'title': 'Codice Carta Servizi', 'type': 'text'},
      {'model': 'defaultFlag', 'title': 'defaultFlag', 'type': 'options','editable':"true"},
      {'model': 'parentDisplayName', 'title': 'parentDisplayName', 'type': 'text','editable':"true"},
      {'model': 'webDescription', 'title': 'webDescription', 'type': 'text','editable':"true"},
      {'model': 'longDescriptionWeb', 'title': 'longDescriptionWeb', 'type': 'text','editable':"true"},
      {'model': 'joinedSeniorityConstraintWEB', 'title': 'joinedSeniorityConstraintWEB', 'type': 'text','editable':"true"},
      {'model': 'isWebSellable', 'title': 'isWebSellable', 'type': 'options','editable':"true"},
      {'model': 'paymentMethodWeb', 'title': 'paymentMethodWeb', 'type': 'text','editable':"true"}
    ];


    $scope.focusinControl.extGetItems = function ()
    {
      //return $dataTableResources.attribute.CS.items.get("").$promise;

      var input =
      {
       "operation": "",
        "productName": ""
      };

      var req = getWebService.getWebRequest(input);
      return getWebService.getWeb(req);

    }
  }





);

