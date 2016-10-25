angular.module('app')
  .controller('promoListCtrl', function ($scope, $state, dataTableResources, getPromoService) {
    $scope.model = $scope.model || {};
    //$scope.focusinControl = {};


    $scope.options = {
      addMode: true,
      editMode: false,
      forwardMode: true,
      isEditing: false,
      deleteMode: true,
      copyMode: true,
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
    $scope.getPromo = function (promise, params) {
      console.log("callback getItemsClbk called from directive");
      console.log(params);

      var input = {tipoPromo:  $scope.tipoPromo};

      getPromoService.getPromo(getPromoService.getPromoRequest(input)).then(
        function (res) {
          var response = res.data.getPromoResponse;

          promise(response.payload, response.header);

        },
        function (res) {
          promise();
        }
      );
    };

    $scope.promoSelected = function(params)
    {
      {
        console.log("params", params);
        $state.go('promoListDetail',{
          'tipoPromo' : $scope.tipoPromo,
          'codicePromo': params[0].codicePromo
        });
      }
    };

    function init() {

      $scope.currentState = $state.$current.name;
      console.log("current state:",$scope.currentState);

      $scope.tipoPromo = $state.params.tipoPromo;

      $scope.columns = dataTableResources[$scope.currentState][$scope.tipoPromo].columns;

      console.log("tipoPromo (PromoList)", $scope.tipoPromo);
    }

    init();

  });



