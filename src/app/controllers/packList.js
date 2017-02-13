angular.module('app')
  .controller('packListCtrl', function ($scope, $state, dataTableResources, getPackService, createPackService,deletePackService) {
    $scope.model = $scope.model || {};
    //$scope.focusinControl = {};





    //callback richiamata nella direttiva per recupero dati
    $scope.getPack = function (promise, params) {
      console.log("callback getItemsClbk called from directive");
      console.log(params);

     // var input = {tipoPack: $scope.tipoPack};

      getPackService.getPack(getPackService.getPackRequest()).then(
        function (response) {
          promise(response);
        },
        function (response) {
          promise(response);
        }
      );
    };


    //callback richiamata nella direttiva per aggiungere una nuova pack
    $scope.addPack = function (promise, params) {
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


      createPackService.createPack(createPackService.createPackRequest(input)).then(
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
    $scope.packSelected = function (params) {
      console.log("params", params);

      $state.go('pack.detail', {
        'codicePack': params[0].codicePack
      });
    };

    $scope.deletePack = function(promise,params) {
      console.log("callback deleteItemsClbk called from directive");
      console.log(params);

      angular.forEach(params, function (item) {
        var input = {
          codicePack: item.codicePack
        };

        deletePackService.deletePack(deletePackService.deletePackRequest(input)).then(
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


      $scope.columns = dataTableResources[$scope.currentState].columns;

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
        showTableAlways: true,
        orderBy: "-"+dataTableResources[$scope.currentState]
                     .columns.find(function(col){return col.orderBy}) || {}.model
    };
    }

    init();

  });



