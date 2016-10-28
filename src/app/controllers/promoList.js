angular.module('app')
  .controller('promoListCtrl', function ($scope, $state, dataTableResources, getPromoService,createPromoService) {
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

          if (response && response.header) {
            promise(response.header, response.payload);
          }
          else
          {
            promise();
          }

        },
        function (res) {
          promise();
        }
      );
    };


    //callback richiamata nella direttiva per aggiungere una nuova promo
    $scope.addPromo = function (promise, params) {
      console.log("callback addItemClbk called from directive");
      console.log(params);



      angular.forEach(params, function (item) {
        var input = {};
        angular.forEach($scope.columns, function (column) {
          /*inizio trasformazione array to pipe*/
          if (angular.isArray(item[column.model])) {

            if (column.model && item[column.model]) {
              input[column.model] = item[column.model].join('|');
            }
          }
          /*fine trasformazione array to pipe*/
          else {
            input[column.model] = item[column.model];
          }
        });

       // input["operation"] = dataTableResources[$state.$current.name].getOperation;

        createPromoService.createPromo(createPromoService.createPromoRequest(input)).then(
          function (res) {
            var response = res.data.createPromoResponse;
            promise(response.header);

          },
          function (res) {
            promise();
            // Message with custom delay
          }
        );
      });
    };

    //move from list to Details
    $scope.promoSelected = function(params)
    {
        console.log("params", params);
        $state.go('promo.detail',{
          'tipoPromo' : $scope.tipoPromo,
          'codicePromo': params[0].codicePromo
        });
    };

    function init() {

      $scope.currentState = $state.$current.name;
      console.log("current state:",$scope.currentState);

      $scope.title = $scope.tipoPromo = $state.params.tipoPromo;

      $scope.columns = dataTableResources[$scope.currentState][$scope.tipoPromo].columns;

      console.log("tipoPromo (promo.list)", $scope.tipoPromo);
    }

    init();

  });



