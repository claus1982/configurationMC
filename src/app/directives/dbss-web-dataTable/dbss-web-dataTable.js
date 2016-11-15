(function () {
  'use strict';
  angular.module('app')
    .directive('dbssWebDataTable', function () {
      return {
        restrict : 'E',

        templateUrl: function(element, attrs) {
          var template = attrs.template || "advanced-table";
          return "app/directives/dbss-web-dataTable/html/" + template + ".html";
        },
        scope: {
          'loadOnStart': '=?',
          'title': '=?',
          'options': '=?',
          'columns': '=?',
          'searchParams': '=?',
          'control': '=?',
          'getItemsClbk': '&',
          'items': '=?',  //per passare direttamente i campi da visualizzare in tabella
          'setItemsClbk': '&',
          'addItemClbk': '&', //aggiungere un nuovo item
          'deleteItemsClbk': '&', //rimuovere uno o più items
          'addModeType': '@', //determina il tipo di dialog da mostrare in "addMode": '0': simple dialog + callback
                                                                      // '1' chiama dirrettamente external callback
          'rowClickClbk': '&',
          'goToDetailsClbk': '&',
          'confirmSelectedClbk': '&',
          'addConditionClbk': '&',
          'faToolbar': '=?',//aggiunge una nuova toolbar
          'selected': '=?', //record selezionati
          'orderBy': '=?'

        },

        controller: function ($http, $mdDialog, $mdEditDialog, $q, $timeout, $scope, Notification,regexService) {
          'use strict';

          /*utilities*/
          $scope.isArray = angular.isArray;

          $scope.angularCopy = function(item) {
           var copiedItem = {};
            angular.copy(item,copiedItem);
            return copiedItem;
          };

          /*end utilties*/

          if (!$scope.addModeType)
          {
            //simple dialog with columns copied from record
            $scope.addModeType = "0";
          }

          var initialOptions = {},
            defaultOptions = {
            addMode: false,  //add item with dialog
            editMode: true, //abilita la modalità di modifica
            forwardMode: false, //abilita il pulsante --> di avanzamento dopo aver selezionato un record
            confirmSearchSelectionMode: false,
            isEditing: false,
            deleteMode: false,
            copyMode: false,
            showFilters: true,
            rowSelection: true,
            multiSelect: false,
            autoSelect: false,
            decapitate: false,
            largeEditDialog: false,
            boundaryLinks: false,
            limitSelect: true,
            pageSelect: true
              //orderBy -->optionale, identifica il campo su cui effettuare l'ordinamento
          };

          if (!$scope.options) {
            $scope.options = defaultOptions;
          }

          //save initial options in order to reset the options
          initialOptions = JSON.parse(JSON.stringify($scope.options));

          $scope.query = {
            filter:  '',
            //se non è indicato un campo di ordinamento, l'ordinamento di default è sul primo campo discendente
            order: $scope.options.orderBy || $scope.orderBy || "-"+$scope.columns[0].model,
            sort: function () {
              return function (item) {
                var o = $scope.query.order;
                if (o.charAt(0) === '-') {
                  o = o.substring(1);
                }
                if (regexService.date.test(item[o])) {
                  return moment(item[o], 'DD/MM/YYYY');
                }
                return item[o];
              }
            },
            limit: 10,
            page: 1
          };

          function resetOptions () {
            $scope.options = JSON.parse(JSON.stringify(initialOptions));;
          }

          function resetTable(){
            delete $scope.items;
            delete $scope.savedItems;
            $scope.selected = [];
            delete $scope.error;
          }

          console.log("columns:"+$scope.columns);
        console.log("searchParams:"+$scope.searchParams);
          $scope.selected = [];
          $scope.limitOptions = [5, 10, 15, {
            label: 'All',
            value: function () {
              return $scope.items && $scope.items ? $scope.items.length : 0;
            }
          }];




          $scope.simpleTableRowClick = function(item){
            console.log("simple table row clicked");
            $scope.rowClickClbk({
              params: item});

          };


          //TODO qui va richiamato il servizio di GET
          $scope.submit = function()
          {
            console.log("form submitted...loading");
            $scope.getItems();


          };

          //determines if the search field is required
          $scope.isRequired = function(){
            return !($scope.searchParams.filter(function(obj){
              return (angular.isDefined(obj.model) && obj.model !== "");
            }).length > 0);
          };


          //restore last items saved
          $scope.restoreSavedItems = function () {
            resetOptions();
            $scope.items = JSON.parse(JSON.stringify($scope.savedItems));
          };

         $scope.confirmSearchSelection = function(event,selected) {
          console.log("confirm Search Selection selected",selected);
           $scope.confirmSelectedClbk({
             params: selected
           });
         };

          $scope.isItemsModified = function(){
            for (var i=0;i<$scope.items.length; i++)
            {
              if (!angular.equals($scope.items[i],$scope.savedItems[i]))
              {
                return true;
              }
            }
            return false;
          };

          function setItemsClbkHandler(response) {
            console.log("setItemsClbkHandler called");
            console.log("header:",response.header);
            if (response.error) {
              $scope.error = response.error;
              Notification.error({message: $scope.error});
              resetTable();
            }
            else {
              $scope.header = response.header;
                $scope.savedItems = JSON.parse(JSON.stringify($scope.items));
                console.log("setWeb success");
              }

            resetOptions();
            $scope.searchLoading = false;
          }

          $scope.enableisEditing = function() {
            $scope.options.isEditing=!$scope.options.isEditing;
            $scope.options.rowSelection=false;
          };

            $scope.saveItems = function () {

              $scope.searchLoading = true;
            //TODO gestione setWeb
            var modifiedItems = [];

              for (var i=0;i<$scope.items.length; i++)
              {
                if (!angular.equals($scope.items[i],$scope.savedItems[i]))
                {
                  modifiedItems[i] = [];
                  angular.forEach($scope.items[i], function(value,key){
                    if (!angular.equals(value,$scope.savedItems[i][key]) && key != "$$hashKey") {
                      modifiedItems[i][key] = {
                          value    : value,
                          modified : true
                        };
                    }
                    else if (key != "$$hashKey") {
                      modifiedItems[i][key] = {value: value};
                    }
                  })

                }
              }
            console.log("modified items:");
            console.log(modifiedItems);
              $scope.setItemsClbk({
                promise: setItemsClbkHandler,
                params: modifiedItems
            });
          };

          $scope.goToItemDetails = function(event, dataItem)
          {
            $scope.goToDetailsClbk({
              params: dataItem
            });

          };

          $scope.addItem = function (addModeType, event, columns, dataItems) {

            //modeType 1 non apre la modale ma determina un operazione in funzione della clbk
            if (addModeType === "1")
            {
              $scope.addItemClbk();
            }
            //operazione di default: apre la modale
            else
            {
              $mdDialog.show({
                clickOutsideToClose: true,
                controller: function ($mdDialog, $scope, columns, addItemClbk) {

                  //recupera il min-date per gli input di tipo "date"
                  //eventualmente, se il campo ha un riferimento, assegna il min-date in funzione del valore del riferimento
                  this.getMinDate = function(column)
                  {

                    var colRef = $scope.columns.find(function(col){return col.model === column['min-date-ref-col']});
                    var minDate = column['min-date'];
                    if (!minDate && colRef)
                    {
                      minDate = $scope.items[column['min-date-ref-col']];
                    }
                    if (!minDate && colRef)
                    {
                      minDate = colRef['min-date'];
                    }
                    if (!minDate){return moment();}

                    return minDate;

                  };

                  this.cancel = $mdDialog.cancel;

                  $scope.addItemClbk = addItemClbk;

                  function success(item) {
                    $mdDialog.hide(item);
                  }

                  this.addItem = function () {
                    $scope.item.form.$setSubmitted();

                    if ($scope.item.form.$valid) {
                      $scope.addLoading = true;
                      //chiama funzione esterna che chiamerà il servizio di popolamento
                      $scope.addItemClbk(
                        {promise: this.addItemClbkHandler,
                         params: {columns:$scope.columns, items: $scope.items}
                        });
                    }
                  };

                  this.addItemClbkHandler = function (response) {
                    console.log("addItemClbkHandler called");
                    console.log("header:", response.header);
                    if (response.error) {
                      console.log("addItem: failed");
                      Notification.error({message: response.error});
                    }
                    else {
                      console.log("addItem: success");
                          $mdDialog.hide();
                      }
                    $scope.addLoading = false;
                  };

                  this.isDisabled = function(column){
                    return !column.editable ||
                      (column["batchDisabled"] && $scope.items[
                        $scope.columns.find(function(col){return col.batchEnabler}).model
                        ]==='Y');
                  };
                  this.isChanged = function(column){
                    if (column["batchEnabler"]) {
                      angular.forEach($scope.columns, function (col) {
                        if (col.batchDisabled)
                          $scope.items[col.model] = undefined;
                      });
                    }
                  };

                  this.isRequired = function(column){
                    return column.required && !this.isDisabled(column);

                  };

                  function init(){
                    $scope.items = {};
                    $scope.columns = columns.filter(function(column){return !!column.editable});
                    //se si sta copiando un altro item
                    if (dataItems[0])
                    {
                      angular.copy(dataItems[0],$scope.items);
                    }
                    //si sta aggiungendo un nuovo item
                    else {
                      angular.forEach($scope.columns,function(column){
                        //se è configurato un valore di default lo assegna
                        if (column.value)
                        {
                          $scope.items[column.model] = column.value;
                        }
                      });
                    }
                  }
                  init();

                },
                controllerAs: 'ctrl',
                focusOnOpen: false,
                targetEvent: event,
                templateUrl: 'app/directives/dbss-web-dataTable/html/add-item-dialog.html',
                locals: {
                  columns: columns,
                  addItemClbk: $scope.addItemClbk
                }
              }).then($scope.getItems);
            }
          };

          $scope.copyItem = function (event, columns, dataItems) {

            $scope.addItem(null, event,columns, dataItems)
          };

          $scope.deleteItem = function (event, selected) {
            if ($scope.deleteItemsClbk) {
              // Appending dialog to document.body to cover sidenav in docs app
              $mdDialog.show({
                clickOutsideToClose: true,
                controller: function ($mdDialog, $scope, deleteItemsClbk) {
                  this.loading = false;
                  this.deleteItemsClbk = deleteItemsClbk;
                  this.cancel = $mdDialog.cancel;
                  this.confirm = function () {
                    console.log("calling deleteItemClbk");
                    this.loading = true;
                    this.deleteItemsClbk({promise: deleteItemsClbkHandler, params: selected});
                  };
                },
                controllerAs: 'ctrl',
                focusOnOpen: false,
                targetEvent: event,
                locals: {deleteItemsClbk: $scope.deleteItemsClbk},
                templateUrl: 'app/directives/dbss-web-dataTable/html/delete-dialog.html',
              }).then(
                $scope.getItems);
            }
          };

          function deleteItemsClbkHandler(response) {
            console.log("deleteItemsClbkHandler called");
              if (response.error) {
                Notification.error({message: response.error});
              }
              $mdDialog.hide();

          }

          //TODO non utilizzato
            $scope.internalControl = $scope.control || {};

          function getItemsClbkHandler(response) {
            console.log("getItemsClbkHandler called");
            console.log("payload:",response.payload);
            console.log("header:",response.header);
            if (response.error) {
              Notification.error({message: response.error});
            }
            else {
              $scope.header = response.header;

              if (response.payload) {
                $scope.items = response.payload;
                $scope.savedItems = JSON.parse(JSON.stringify($scope.items));
              }
              else {
                $scope.items = [];
                Notification.error({message: "Risposta vuota dal server..."});
              }
            }
            $scope.searchLoading = false;

          }

          $scope.getItems = function () {

            console.log('called getItems, $scope.query.filter', $scope.query.filter);
            resetTable();
            resetOptions();
            $scope.searchLoading = true;

            $scope.getItemsClbk({promise: getItemsClbkHandler,params: $scope.searchParams});
          };



          $scope.removeFilter = function () {
            $scope.filter.show = false;
            $scope.query.filter = '';

            if ($scope.filter.form.$dirty) {
              $scope.filter.form.$setPristine();
            }
          };
          var bookmark;
          $scope.$watch('query.filter', function (newValue, oldValue) {
            console.log('query.filter', newValue, oldValue);
            if (!oldValue) {
              bookmark = $scope.query.page;
            }

            if (newValue !== oldValue) {
              $scope.query.page = 1;
            }

            if (!newValue) {
              $scope.query.page = bookmark;
            }
           // $scope.getItems();
            //$scope.getSimpleTableData();

          });
        /*  $scope.$watch('querySimpleData.filter', function (newValue, oldValue) {
            console.log('querySimpleData.filter', newValue, oldValue);
            if (!oldValue) {
              bookmark = $scope.querySimpleData.page;
            }

            if (newValue !== oldValue) {
              $scope.querySimpleData.page = 1;
            }

            if (!newValue) {
              $scope.querySimpleData.page = bookmark;
            }
            $scope.getSimpleTableData();

          });*/

          $scope.editTextField = function (isEditable, event, obj, column) {
            // if auto selection is enabled you will want to stop the event
            // from propagating and selecting the row
            event.stopPropagation();
            if (isEditable) {
              var model = column.model.split('.'),
                  modelValue = model[1] ? obj[model[0]][model[1]] : obj[model[0]];
              var dialog = {
                modelValue: modelValue,
                placeholder: column.title,
                save: function (input) {
                  if (model[1] && input.$modelValue && obj[model[0]][model[1]] !== input.$modelValue) {
                    obj[model[0]][model[1]] = input.$modelValue;
                  } else
                  if (model[0] && input.$modelValue && obj[model[0]] !== input.$modelValue)
                  {
                    obj[model[0]] = input.$modelValue;
                  }
                },
                targetEvent: event,
                title: column.title,
                type: column.type,
                validators: column.validators
              };

              var promise = $scope.options.largeEditDialog ? $mdEditDialog.large(dialog) : $mdEditDialog.small(dialog);

              promise.then(function (ctrl) {
                var input = ctrl.getInput();

                input.$viewChangeListeners.push(function () {
                  input.$setValidity('test', input.$modelValue !== 'test');
                });
              });
            }
          };

          $scope.toggleLimitOptions = function () {
            $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
          };


          $scope.onPaginate = function (page, limit) {

            $scope.promise = $timeout(function () {

            }, 300);
          };

          $scope.deselect = function (item) {
            console.log(item, 'was deselected');
          };

          $scope.log = function (item) {
            console.log(item, 'was selected');
          };

          $scope.loadStuff = function () {
            $scope.promise = $timeout(function () {

            }, 2000);
          };

          $scope.onReorder = function (order) {

            console.log('Scope Order: ' + $scope.query.order);
            console.log('Order: ' + order);

            $scope.promise = $timeout(function () {

            }, 2000);
          };

          function init ()
          {
            if ($scope.loadOnStart)
            {
              $scope.getItems();
            }

          }
          init();
        }
      }
})
}());
