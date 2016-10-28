angular.module('app')
  .controller('promoSearchCtrl', function ($scope, $state, dataTableResources, getWebService) {
    $scope.model = $scope.model || {};
    //$scope.focusinControl = {};


    $scope.title = $state.params.type;

    $scope.searchParams = dataTableResources[$state.params.type].searchParams;

    $scope.columns = dataTableResources[$state.params.type].columns;

   $scope.options = {
      addMode: false,  //add item with dialog
      editMode: false,
      forwardMode: false,
      confirmSearchSelectionMode: true,
      isEditing: false,
      deleteMode: false,
      copyMode: false,
      showFilters: true,
      rowSelection: true,
      multiSelect: true,
      autoSelect: true,
      decapitate: false,
      largeEditDialog: false,
      boundaryLinks: false,
      limitSelect: true,
      pageSelect: true
    };


    //callback from directive
    $scope.confirmSelected = function(params){
      console.log("confirmSelection called-->params:", params);
      $state.go("promo.confirmed",{
        'type'      : $state.params.type,
        'tipoPromo' : $state.params.tipoPromo,
        'codicePromo': $state.params.codicePromo,
        'items': params
      });

    };


    //callback richiamata nella direttiva
    $scope.getWeb = function (promise, params) {
      console.log("callback getItemsClbk called from directive");
      console.log(params);

      var input = {};
      angular.forEach(params, function (param) {
        input[param.name] = param.model;
      });
      input["operation"] = dataTableResources[$state.$current.name].getOperation;

      getWebService.getWeb(getWebService.getWebRequest(input)).then(
        function (res) {
          var response = res.data.getWebResponse;



          if (response && response.header && response.payload) {

            /*inizio trasformazione pipe | to array*/
            response.payload = response.payload.map(function (obj) {

              angular.forEach($scope.columns, function (column) {
                if (column.multiple) {
                  if (column.model && obj[column.model]) {
                    obj[column.model] = obj[column.model].split("|");
                  }
                }
              });
              return obj;
            });

            /*fine trasformazione*/

            promise(response.header, response.payload);
          }

          else if (response && response.header) {
            promise(response.header);
          }
          else {promise();}

        },
        function (res) {
          promise();
        }
      );
    };
  });

