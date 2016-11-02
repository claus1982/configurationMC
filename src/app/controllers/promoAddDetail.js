angular.module('app')
  .controller('promoAddDetailCtrl', function ($scope, $state, dataTableResources, $mdDialog, getWebService) {
    $scope.model = $scope.model || {};
    $scope.forms = {};



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


    //per resettare i campi
    $scope.reset = function()
    {
      reset();
    }

    //funzione per gestire la disibilitazione dei campi da popolare
    $scope.isRequired = function(col, item)
    {
      if (col.required)
        return true;
      if (col.orRequired && $scope.forms.myForm[col.orRequired])
      {
        return (!$scope.forms.myForm[col.orRequired].$viewValue)
      }
      if (col.mutuallyExclusive && $scope.forms.myForm && $scope.forms.myForm[col.mutuallyExclusive])
      {
        return (!$scope.forms.myForm[col.mutuallyExclusive].$viewValue)
      }
    };
    //funzione per gestire la disibilitazione dei campi da popolare
    $scope.isDisabled = function(col, item)
    {
      if (!col.editable)
        return true;
      if (col.mutuallyExclusive && $scope.forms.myForm && $scope.forms.myForm[col.mutuallyExclusive])
      {
        return (!!$scope.forms.myForm[col.mutuallyExclusive].$viewValue)
      }
      return false;
    };

    $scope.buttonDisabled = function(button)
    {
      var disable = true;
      if (button.columns)
      {
        angular.forEach(button.columns, function(column){
        disable = disable && $scope.newItem[column.model];
        });
        if (disable) return true;
      }
      disable = true;
      if (button.mutuallyExclusive)
      {
       var mutualButton =  $scope.buttons.find(function(mbutton){
         return mbutton.model === button.mutuallyExclusive;
       });
        angular.forEach(mutualButton.columns, function(column){
          disable = disable && $scope.newItem[column.model];
        });
        if (disable) return true;
      }
     return false;
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

            //determina se abilitare il pulsante "AGGIUNGI" verificando che tutte le righe selezionate abbiano
            //la stessa offerta
            if (length > 1)
            {
              var comparingColumn = button.columns.find(function(column){
                return column.compare === true;
              }).refModel;
              var comparingItem = items[0][comparingColumn];
            }
            if (items.filter(function(item){
                return item[comparingColumn] === comparingItem;
              }).length===items.length)
            {
              //item con le sole colonne da popolare in newItem
              var filteredItems = items.map(function(item){
                var filteredItem = {};
                angular.forEach(button.columns, function(column)
                {
                  if (item[column.refModel])
                  {filteredItem[column.model] = item[column.refModel];}
                });
                return filteredItem;
              });
            $mdDialog.hide(filteredItems);}
            else
            {console.log("selezione errata");}
          }

          this.addItem = function (items) {
              success(items);

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

      }).then(function(filteredItems){
        console.log("$dialog closed, filteredItems:",filteredItems);
        angular.forEach(filteredItems, function(fItem){

          angular.forEach(fItem, function(value,key){
            $scope.newItem[key] = value;
          });

        });

      });

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
      $scope.items = [];
      $scope.newItem = {};
      $scope.items.push($scope.newItem);
    }

    function reset()
    {
      $scope.items = [];
      $scope.newItem = {};
      $scope.items.push($scope.newItem);
    }


    init();

  });



