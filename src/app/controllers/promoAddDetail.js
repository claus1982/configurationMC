angular.module('app')
  .controller('promoAddDetailCtrl', function ($scope, $state, dataTableResources, $mdDialog, getWebService) {
    $scope.model = $scope.model || {};



    $scope.options = {
      addMode: false,
      editMode: false,
      forwardMode: false,
      isEditing: false,
      deleteMode: true,
      copyMode: false,
      showFilters: false,
      hideSearchFilter: true,
      rowSelection: false,
      multiSelect: false,
      autoSelect: false,
      decapitate: false,
      largeEditDialog: false,
      boundaryLinks: false,
      limitSelect: false,
      pageSelect: false
    };



    //funzione per gestire la disibilitazione dei campi da popolare
    $scope.isRequired = function(col, item)
    {
      if (!col.required)
        return false;
      if (col.mutualExclusive)
      {
        return !item[col.mutualExclusive]
      }
    };
    //funzione per gestire la disibilitazione dei campi da popolare
    $scope.isDisabled = function(col, item)
    {
      if (!col.editable)
        return true;
      if (col.mutualExclusive)
      {
        return !!item[col.mutualExclusive]
      }
    };

    //TODO funzione di conferma aggiunta condizione
    $scope.confirmed = function (item)
    {
      angular.forEach($scope.columns,function(column){
        console.log("field name: ",column.model);
        console.log("field value: ",item[column.model]);
      });
    };

    $scope.openDialog = function(button)
    {

      params = {};
      params.title = dataTableResources[button.reference].title;
      params.searchParams = dataTableResources[button.reference].searchParams;
      params.columns = dataTableResources[button.reference].columns;
      params.options = {
        addMode: false,  //add item with dialog
        editMode: false,
        forwardMode: false,
        confirmSearchSelectionMode: false,
        isEditing: false,
        deleteMode: false,
        copyMode: false,
        showFilters: true,
        rowSelection: true,
        multiSelect: button.multiple ? true: false,
        autoSelect: false,
        decapitate: false,
        largeEditDialog: false,
        boundaryLinks: false,
        limitSelect: true,
        pageSelect: true
      };

      $mdDialog.show({
        clickOutsideToClose: true,
        controller: function ($mdDialog,  $scope, params) {
          this.cancel = $mdDialog.cancel;
          $scope.params = params;

          function success(items) {
            var length =  items.length;
            if (length > 1)
            {
              var comparingColumn = button.columns.find(function(column){
                return column.compare === true;
              }).name;
              var comparingItem = items[0][comparingColumn];
            }
            if (items.filter(function(item){
                return item[comparingColumn] === comparingItem;
              }).length===items.length)
            {
            $mdDialog.hide(items);}
            else
            {console.log("selezione errata");}
          }

          this.addItem = function (items) {
          success(items);
            console.log("selected",items);

          };
          //callback richiamata nella direttiva
          $scope.getWeb = function (promise, params) {
            console.log("callback getItemsClbk called from directive");
            console.log(params);

            var input = {};
            angular.forEach(params, function (param) {
              input[param.name] = param.model;
            });
            input["operation"] = dataTableResources[button.reference].getOperation;

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
        },
        controllerAs: 'ctrl',
        focusOnOpen: false,
        targetEvent: event,
        templateUrl: 'app/templates/promo/partials/add-detail-dialog.html',
        locals: {
          params: params
        }

      }).then($scope.getItems);

    };




    function init() {
      console.log("promoAddDetail started");
      $scope.tipoPromo = $state.params.tipoPromo;
      $scope.codicePromo = $state.params.codicePromo;
      console.log("tipoPromo", $scope.tipoPromo);
      console.log("codicePromo", $scope.codicePromo);

      $scope.currentState = $state.$current.name;
      console.log("current state:",$scope.currentState);

      $scope.title = $scope.tipoPromo+" - "+$scope.codicePromo+":Add Condition";

      $scope.columns = dataTableResources["promo.detail"][$scope.tipoPromo].columns;
      $scope.buttons = dataTableResources["promo.detail"][$scope.tipoPromo].buttons;



      //nuovo item
      $scope.items = []
      $scope.newItem = {};
      $scope.items.push($scope.newItem);

    }

    init();

  });



