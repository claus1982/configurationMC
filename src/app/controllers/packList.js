angular.module('app')
  .controller('promoListCtrl', function ($scope, $state, dataTableResources, getPromoService, createPromoService,deletePromoService) {
    $scope.model = $scope.model || {};
    //$scope.focusinControl = {};





    //callback richiamata nella direttiva per recupero dati
    $scope.getPromo = function (promise, params) {
      console.log("callback getItemsClbk called from directive");
      console.log(params);

      var input = {tipoPromo: $scope.tipoPromo};

      getPromoService.getPromo(getPromoService.getPromoRequest(input)).then(
        function (response) {
          promise(response);
        },
        function (response) {
          promise(response);
        }
      );
    };


    //callback richiamata nella direttiva per aggiungere una nuova promo
    $scope.addPromo = function (promise, params) {
      console.log("callback addItemClbk called from directive");
      console.log(promise);
      console.log(params);

      var input = {},
        items = params.items;
      angular.forEach(params.columns, function (column) {

          /*inizio trasformazione array to pipe*/
          if (angular.isArray(items[column.model])) {
            if (column.model && items[column.model]) {
              input[column.model] = items[column.model].join('|');
            }
          }
          /*fine trasformazione array to pipe*/
          else if (items[column.model]) {
            input[column.model] = items[column.model];
          }

      });

      // input["operation"] = dataTableResources[$state.$current.name].getOperation;

      createPromoService.createPromo(createPromoService.createPromoRequest(input)).then(
        function (response) {
          promise(response);
        },
        function (response) {
          promise(response);
          $scope.error = response.error;
          Notification.error({message: $scope.error});
   y
        }
      );
    };


    //move from list to Details
    $scope.promoSelected = function (params) {
      console.log("params", params);


      var isBatchField = $scope.columns.find(function(col){return col.batchEnabler}),
        isBatch = isBatchField && isBatchField.model && params[0][isBatchField.model] === 'Y' ? true: false;

      $state.go('promo.detail', {
        'tipoPromo': $scope.tipoPromo,
        'codicePromo': params[0].codicePromo,
        'isBatch':isBatch
      });
    };

    $scope.deletePromo = function(promise,params) {
      console.log("callback deleteItemsClbk called from directive");
      console.log(params);

      angular.forEach(params, function (item) {
        var input = {
          codicePromo: item.codicePromo
        };

        deletePromoService.deletePromo(deletePromoService.deletePromoRequest(input)).then(
          function (response) {
            promise(response);
          },
          function (response) {
            promise(response);
          }
        );
      });
    }

    function init() {

      $scope.currentState = $state.$current.name;
      console.log("current state:", $scope.currentState);

      $scope.title = $scope.tipoPromo = $state.params.tipoPromo;

      $scope.columns = dataTableResources[$scope.currentState][$scope.tipoPromo].columns;

      console.log("tipoPromo (promo.list)", $scope.tipoPromo);

      $scope.options = {
        addMode: true,
        editMode: false,
        forwardMode: true,
        isEditing: false,
        deleteMode: true,
        copyMode: true,
        showFilters: false,
        rowSelection: true,
        multiSelect: true,
        autoSelect: false,
        decapitate: false,
        largeEditDialog: false,
        boundaryLinks: false,
        limitSelect: true,
        pageSelect: true,
        orderBy: "-"+dataTableResources[$scope.currentState][$scope.tipoPromo]
                     .columns.find(function(col){return col.orderBy}).model
    };
    }

    init();

  });



