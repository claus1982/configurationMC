angular.module('app')
  .controller('promoCtrl', function ($scope, $state, dataTableResources) {
    $scope.model = $scope.model || {};
    //$scope.focusinControl = {};



    $scope.currentState = $state.$current.name;
    console.log("current state:",$scope.currentState);
    $scope.title = dataTableResources[$scope.currentState].title;

    $scope.columns = dataTableResources[$scope.currentState].columns;

    $scope.items = dataTableResources[$scope.currentState].items;


    $scope.promoTypeSelected = function(params)
    {
      console.log("params", params);
      $state.go('promo.list',{
        'tipoPromo' : params.tipoPromo
      });
    }
  });



