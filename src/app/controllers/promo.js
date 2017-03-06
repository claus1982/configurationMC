angular.module('app')
  .controller('promoCtrl', function ($scope, $state, dataTableResources) {
    $scope.model = $scope.model || {};
    //$scope.focusinControl = {};


    $scope.options = {
      addMode: false,
      editMode: false,
      forwardMode: false,
      isEditing: false,
      deleteMode: false,
      copyMode: false,
      showFilters: false,
      rowSelection: false,
      multiSelect: false,
      autoSelect: false,
      decapitate: false,
      largeEditDialog: false,
      boundaryLinks: false,
      limitSelect: true,
      pageSelect: true,
      limit: 10,
      page: 1,
      showTableAlways: true
    }

    $scope.currentState = $state.$current.name;
    console.log("current state:",$scope.currentState);
    $scope.title = dataTableResources[$scope.currentState].title;

    $scope.columns = dataTableResources[$scope.currentState].columns;

    $scope.orderBy = $scope.columns[0].model;

    $scope.items = dataTableResources[$scope.currentState].items;


    $scope.promoTypeSelected = function(params)
    {
      console.log("params", params);
      $state.go('promo.list',{
        'tipoPromo' : params.tipoPromo
      });
    }
  });



