angular.module('app')
  .controller('promoDetailCtrl',
    function ($scope, $state, dataTableResources, $sessionStorage,
              getConditionService, deleteConditionService, promoParamsService) {
      $scope.model = $scope.model || {};
      //$scope.focusinControl = {};


      //callback richiamata nella direttiva per recupero dati
      $scope.getCondition = function (promise, params) {
        console.log("callback getItemsClbk called from directive");
        console.log(params);

        var input = {
          tipoPromo: $scope.tipoPromo,
          codicePromo: $scope.codicePromo

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

      $scope.addCondition = function (params) {
        console.log("params", params);
        $state.go('promo.addDetail', {
          'tipoPromo': $scope.tipoPromo,
          'codicePromo': $scope.codicePromo,
          'promoBatch': $scope.promoBatch
        });

      };

      $scope.deleteCondition = function (promise, params) {
        console.log("callback deleteItemsClbk called from directive");
        console.log(params);

        angular.forEach(params, function (item) {
          var input = {
            tipoPromo: $scope.tipoPromo,
            codicePromo: $scope.codicePromo,
            idCondition: item.idCondition
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

        $scope.currentState = $state.$current.name;
        if (!dataTableResources[$scope.currentState][$state.params.tipoPromo]) {
          $state.go('promo.categories');
        }
        else {

          $scope.tipoPromo = $state.params.tipoPromo;
          $scope.promoParams = promoParamsService.getPromoParams();

          if (!$scope.promoParams || !$scope.promoParams.codicePromo) {
            $state.go('promo.list', {
              'tipoPromo': $scope.tipoPromo
            });
          }
          else {
            $scope.codicePromo = $scope.promoParams.codicePromo;
            $scope.promoBatch = $scope.promoParams.promoBatch || 'N';


            $scope.title = $scope.tipoPromo + " - " + $scope.codicePromo;

            $scope.columns = dataTableResources[$scope.currentState][$scope.tipoPromo].columns;
            var isAddEnabled =
              $scope.promoBatch == "Y" &&
              dataTableResources[$scope.currentState][$scope.tipoPromo].addDisabledIfBatch
                ? false : true;


            $scope.options = {
              addMode: isAddEnabled,
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
              pageSelect: true,
              showTableAlways: true
            };
          }
        }

      }

      init();

    })



