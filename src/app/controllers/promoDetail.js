angular.module('app')
  .controller('promoDetailCtrl', function ($scope, $state, dataTableResources, getConditionService) {
    $scope.model = $scope.model || {};
    //$scope.focusinControl = {};

    $scope.options = {
      addMode: false,
      editMode: false,
      forwardMode: false,
      isEditing: false,
      deleteMode: true,
      copyMode: false,
      showFilters: false,
      rowSelection: true,
      multiSelect: false,
      autoSelect: false,
      decapitate: false,
      largeEditDialog: false,
      boundaryLinks: false,
      limitSelect: true,
      pageSelect: true
    };



    //callback richiamata nella direttiva per recupero dati
    $scope.getCondition = function (promise, params) {
      console.log("callback getItemsClbk called from directive");
      console.log(params);

      var input = {
        tipoPromo:  $scope.tipoPromo,
        codicePromo:  $scope.codicePromo

      };

      getConditionService.getCondition(getConditionService.getConditionRequest(input)).then(
        function (res) {
          var response = res.data.getConditionResponse;

          promise(response.payload, response.header);

        },
        function (res) {
          promise();
        }
      );
    };

    function init() {
      $scope.tipoPromo = $state.params.tipoPromo;
      $scope.codicePromo = $state.params.codicePromo;
      console.log("tipoPromo", $scope.tipoPromo);
      console.log("codicePromo", $scope.codicePromo);

      $scope.currentState = $state.$current.name;
      console.log("current state:",$scope.currentState);
      $scope.title = $scope.codicePromo;

      $scope.columns = dataTableResources[$scope.currentState][$scope.tipoPromo].columns;
      $scope.buttons = dataTableResources[$scope.currentState][$scope.tipoPromo].buttons;

    }

    init();

  })



