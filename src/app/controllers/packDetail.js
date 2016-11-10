angular.module('app')
  .controller('packDetailCtrl', function ($scope, $state, dataTableResources, getPackConditionService, deletePackConditionService) {
    $scope.model = $scope.model || {};
    //$scope.focusinControl = {};


    //callback richiamata nella direttiva per recupero dati
    $scope.getPackCondition = function (promise, params) {
      console.log("callback getItemsClbk called from directive");
      console.log(params);

      var input = {
        codicePack:  $scope.codicePack
      };

      getPackConditionService.getPackCondition(getPackConditionService.getPackConditionRequest(input)).then(
        function (response) {
          promise(response);
        },
        function (response) {
          promise(response);
        }
      );
    };

    $scope.addPackCondition = function(params)
    {
      console.log("params", params);
      $state.go('pack.addDetail',{
        'codicePack': $scope.codicePack
      });

    };

    $scope.deletePackCondition = function(promise,params)
    {
      console.log("callback deleteItemsClbk called from directive");
      console.log(params);

      angular.forEach(params, function(item){
        var input = {
          codicePack:  $scope.codicePack,
          idCondition:  item.idCondition
        };

        deletePackConditionService.deletePackCondition(deletePackConditionService.deletePackConditionRequest(input)).then(
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
      $scope.codicePack = $state.params.codicePack;
      console.log("codicePack", $scope.codicePack);

      $scope.currentState = $state.$current.name;
      console.log("current state:",$scope.currentState);
      $scope.title = $scope.codicePack;

      $scope.columns = dataTableResources[$scope.currentState].columns;

      $scope.options = {
        addMode: true,
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



