angular.module('app')
  .controller('promoAddDetailCtrl',
    function ($scope, $state, dataTableResources, $mdDialog, getWebService,createConditionService, Notification,promoParamsService) {
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
      pageSelect: false,
      showTableAlways: true
    };


    //per resettare i campi
    $scope.reset = function () {
      reset();
    }

    //funzione per gestire la disibilitazione dei campi da popolare
    $scope.isRequired = function (col, item) {
      if (col.required)
        return true;
      if (col.orRequired && $scope.forms.myForm[col.orRequired]) {
        return (!$scope.forms.myForm[col.orRequired].$viewValue)
      }
      if (col.mutuallyExclusive && $scope.forms.myForm && $scope.forms.myForm[col.mutuallyExclusive]) {
        return (!$scope.forms.myForm[col.mutuallyExclusive].$viewValue)
      }
    };
    //funzione per gestire la disibilitazione dei campi da popolare
    $scope.isDisabled = function (col, item) {
      if (!col.editable)
        return true;
      if (col.mutuallyExclusive && $scope.forms.myForm && $scope.forms.myForm[col.mutuallyExclusive]) {
        return (!!$scope.forms.myForm[col.mutuallyExclusive].$viewValue)
      }
      return false;
    };

      $scope.isMultiple = function(col)
      {
        return col.multiple;
      };

    $scope.buttonDisabled = function (button) {
      var disable = true;
      if (button.columns) {
        angular.forEach(button.columns, function (column) {
          disable = disable && $scope.newItem[column.model];
        });
        if (disable) return true;
      }
      disable = true;
      if (button.mutuallyExclusive) {
        var mutualButton = $scope.buttons.find(function (mbutton) {
          return mbutton.model === button.mutuallyExclusive;
        });
        angular.forEach(mutualButton.columns, function (column) {
          disable = disable && $scope.newItem[column.model];
        });
        if (disable) return true;
      }
      return false;
    };

    //TODO funzione di conferma aggiunta condizione
    $scope.addCondition = function (item) {
      $scope.loading = true;

      angular.forEach($scope.columns, function (column) {
        console.log("field name: ", column.model);
        console.log("field value: ", item[column.model]);
      });
      var input = {};
      angular.forEach($scope.columns, function (column) {

        /*inizio trasformazione array to pipe*/
        if (angular.isArray($scope.newItem[column.model])) {
          if (column.model && $scope.newItem[column.model]) {
            input[column.model] = $scope.newItem[column.model].join('|');
          }
        }
        /*fine trasformazione array to pipe*/
        else if ($scope.newItem[column.model]) {
          input[column.model] = $scope.newItem[column.model];
        }

      });

      //aggiunge il tipo Promo e codice Promo
      input["tipoPromo"] = $scope.tipoPromo;
      angular.extend(input,$scope.promoParams);

      createConditionService.createCondition(createConditionService.createConditionRequest(input)).then(
        function (response) {
          $state.go('promo.detail', {
            'tipoPromo': $scope.tipoPromo
          });
          $scope.loading = false;

        },
        function (response) {
          Notification.error({message: response.error});
          $scope.loading = false;
        }
      );
    };

    $scope.openDialog = function (button) {

      var params = {};
      params.title = dataTableResources[button.reference].title;
      params.searchParams = dataTableResources[button.reference].searchParams;
      params.columns = dataTableResources[button.reference].columns;


      //verifica se c'è un campo su cui è necessario un confronto
      var compareColumn = button.columns.find(function (column) {
          return column.compare
        });

      //in caso ci sia setta il nome e il valore del campo (value eventualmente undefined)
      if (compareColumn && compareColumn.refModel) {
        params.comparingField = {
          model: compareColumn.refModel,
          value: $scope.newItem[compareColumn.model]
        };
      }


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
        multiSelect: button.multiple ? true : false,
        autoSelect: false,
        decapitate: false,
        largeEditDialog: false,
        boundaryLinks: false,
        limitSelect: true,
        pageSelect: true
      };

      $mdDialog.show({
        clickOutsideToClose: true,
        controller: function ($mdDialog, $scope, Notification,dataTableResources, params) {


          $scope.params = params;
          var isAlreadyComparingFieldValued = params.comparingField && params.comparingField.value ? true: false;

          //dismiss the modal
          function cancel(){
            $mdDialog.cancel()
          }

          this.cancel = cancel;

          function success(items) {

            //variabile che determina se all'accesso alla pop-up vi era già un campo di paragone con un valore definito


            //determina se abilitare il pulsante "AGGIUNGI" verificando che tutte le righe selezionate abbiano
            //1)lo stesso campo di paragone in comune se esiste ma non ancora valorizzato
            //2) siano coerenti con l'eventuale campo di paragone se esiste e già valorizzato

            //a) se il campo di paragone esiste ma non è stato ancora valorizzato

            if (params.comparingField && !params.comparingField.value) {
             //a.1)recupera il primo record selezionato che abbia quel campo valorizzato facendolo diventare il riferimento
              params.comparingField.value = items.find
              (function(item){return !!item[params.comparingField.model]})[params.comparingField.model];

            console.log("comparingField", params.comparingField.model);
            console.log("comparingField Value", params.comparingField.value);
            }
              if (
                //se non c'è alcun campo su cui effettuare paragoni
                  !params.comparingField
                     ||
                    //oppure il campo di paragone c'è e tutti i record che sono stati selezionati hanno quel valore
                (params.comparingField.value  &&
                items.filter(function (item) {
                  return item[params.comparingField.model] === params.comparingField.value;
                }).length === items.length)
              ) {
                //filtra il contenuto dei record selezionati per inviare alla pagina le sole colonne
                // che sono necessarie per popolare il newItem
                var filteredItems = items.map(function (item) {
                  var filteredItem = [];
                  angular.forEach(button.columns, function (column) {
                    if (item[column.refModel]) {
                        filteredItem.push(
                          {
                            model: column.model,
                            value: item[column.refModel],
                            append: column.append ? true: false,
                            type: column.type
                          }
                        );
                    }
                  });
                  return filteredItem;
                });
               $mdDialog.hide(filteredItems);
              }
              //se non tutti i record selezionati hanno il campo di paragone coincidente con quello atteso
              else {
                console.log("selezione errata");
                var error;
                error = (isAlreadyComparingFieldValued)
                  ? "Attenzione: sono selezionabili solo i record che hanno "
                    +dataTableResources[button.reference].columns.find(function(column){return column.model ===params.comparingField.model}).title+
                    " pari a \""+params.comparingField.value+"\""
                  : "Attenzione: i record selezionati devono avere lo stesso "
                    +dataTableResources[button.reference].columns.find(function(column){return column.model ===params.comparingField.model}).title;
                Notification.error({message: error});

              }

          }

          this.faToolbar = [
            {
              name: 'CONFERMA SELEZIONE',
              clbk: function(){ success($scope.selected);},
              align:'left',
              hide: function(){return !$scope.selected.length;}
            }
           /* ,{
              name: 'ANNULLA',
              clbk: function(){ cancel()},
              align:'right',
              hide: function(){return false;}
            }*/
          ];

          //callback richiamata nella direttiva
          this.getWeb = function (promise, params) {
            console.log("callback getItemsClbk called from directive");
            console.log(params);

            var input = {};
            angular.forEach(params, function (param) {
              input[param.name] = param.model;
            });
            input["operation"] = dataTableResources[button.reference].getOperation;

            getWebService.getWeb(getWebService.getWebRequest(input)).then(
              function (response) {

                if (response && response.payload) {
                  /*inizio trasformazione pipe | to array*/
                  response.payload = response.payload.map(function (obj) {

                    angular.forEach($scope.columns, function (column) {
                      if (column.multiple) {
                        if (column.model && obj[column.model]) {
                          obj[column.model] = obj[column.model].split("|");
                          obj[column.model] = obj[column.model].clean("").clean(undefined).clean(null);
                        }
                      }
                    });
                    return obj;
                  });
                  /*fine trasformazione*/
                }
                promise(response);
              },
              function (response) {
                promise(response);
              }
            );
          };

        },
        controllerAs: 'ctrl',
        focusOnOpen: true,
        targetEvent: event,
        templateUrl: 'app/templates/commons/add-detail-dialog.html',
        locals: {
          params: params
        }

      }).then(function (filteredItems) {
        console.log("$dialog closed, filteredItems:", filteredItems);
        angular.forEach(filteredItems, function (fItem) {

          angular.forEach(fItem, function (field) {
            if (!field.append) {
              if (field.type==="number")
              {
                $scope.newItem[field.model] = Number(field.value);
              }
              else
              {
                $scope.newItem[field.model] = field.value;
              }
            }
            else
            {
              if($scope.newItem[field.model])
              $scope.newItem[field.model] += " AND "+field.value;
              else
                $scope.newItem[field.model] = field.value;
            }
          });

        });

      });

    };//fine dialog


    function init() {
      $scope.currentState = $state.$current.name;
      console.log("current state:", $scope.currentState);
      if (!dataTableResources["promo.detail"][$state.params.tipoPromo])
      {
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

          $scope.title = $scope.tipoPromo + " - " + $scope.codicePromo + ":Add Condition";


          if ($scope.promoBatch == "N") {
            $scope.columns = dataTableResources["promo.detail"][$scope.tipoPromo].columns;
            $scope.buttons = dataTableResources["promo.detail"][$scope.tipoPromo].buttons;
          }
          //in caso sia batch esclude alcune colonne e pulsanti come da configurazione
          else {
            $scope.columns = dataTableResources["promo.detail"][$scope.tipoPromo].columns.filter(function (col) {
              return !col.batchDisabled;
            });
            if (dataTableResources["promo.detail"][$scope.tipoPromo].buttons) {
              $scope.buttons = dataTableResources["promo.detail"][$scope.tipoPromo].buttons.filter(function (col) {
                return !col.batchDisabled;
              });
            }
          }


          //nuovo item
          $scope.items = [];
          $scope.newItem = {};
          $scope.items.push($scope.newItem);
        }
      }
    }

    function reset() {
      $scope.items = [];
      $scope.newItem = {};
      $scope.items.push($scope.newItem);
    }

    init();

  });



