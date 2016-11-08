angular.module('app')
  .controller('promoDetailCtrl', function ($scope, $state, dataTableResources, getConditionService, deleteConditionService) {
    $scope.model = $scope.model || {};
    //$scope.focusinControl = {};


    //callback richiamata nella direttiva per recupero dati
    $scope.getCondition = function (promise, params) {
      console.log("callback getItemsClbk called from directive");
      console.log(params);

      var input = {
        tipoPromo:  $scope.tipoPromo,
        codicePromo:  $scope.codicePromo

      };

      getConditionService.getCondition(getConditionService.getConditionRequest(input)).then(
        function (response) {
          promise(response);
        },
        function (response) {
          promise(response);
        }
      );
    };

    $scope.addCondition = function(params)
    {
      console.log("params", params);
      $state.go('promo.addDetail',{
        'tipoPromo' : $scope.tipoPromo,
        'codicePromo': $scope.codicePromo,
        'isBatch':$scope.isBatch
      });

    };

    $scope.deleteCondition = function(promise,params)
    {
      console.log("callback deleteItemsClbk called from directive");
      console.log(params);

      angular.forEach(params, function(item){
        var input = {
          codicePromo:  $scope.codicePromo,
          idCondition:  item.idCondition
        };

        deleteConditionService.deleteCondition(deleteConditionService.deleteConditionRequest(input)).then(
          function (response) {
            promise(response);
          },
          function (response) {
            promise(response);
          }
        );

      })



    };

    function init() {
      $scope.tipoPromo = $state.params.tipoPromo;
      $scope.codicePromo = $state.params.codicePromo;
      $scope.isBatch = $state.params.isBatch;
      console.log("tipoPromo", $scope.tipoPromo);
      console.log("codicePromo", $scope.codicePromo);

      $scope.currentState = $state.$current.name;
      console.log("current state:",$scope.currentState);
      $scope.title = $scope.tipoPromo+" - "+$scope.codicePromo;

      $scope.columns = dataTableResources[$scope.currentState][$scope.tipoPromo].columns;
      var addEnabled =
        $scope.isBatch == "true" && dataTableResources[$scope.currentState][$scope.tipoPromo].addDisabledIfBatch
        ? false: true;


      $scope.options = {
        addMode: addEnabled,
        editMode: false,
        forwardMode: false,
        isEditing: false,
        deleteMode: true,
        copyMode: false,
        showFilters: false,
        rowSelection: true,
        multiSelect: true,
        autoSelect: false,
        decapitate: false,
        largeEditDialog: false,
        boundaryLinks: false,
        limitSelect: true,
        pageSelect: true
      };

    }

    init();

  })



