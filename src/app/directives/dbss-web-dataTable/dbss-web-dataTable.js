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
          'addModeType': '@', //determina il tipo di dialog da mostrare in "addMode": '0': simple dialog + callback
                                                                      // '1' chiama dirrettamente external callback
          'deleteItemClbk': '&', //cancellare un item
          'rowClickClbk': '&',
          'goToDetailsClbk': '&',
          'confirmSelectedClbk': '&',
          'addConditionClbk': '&',
          'faToolbar': '=?',//aggiunge una nuova toolbar
          'selected': '=?' //record selezionati

        },

        controller: function ($http, $mdDialog, $mdEditDialog, $q, $timeout, $scope, Notification) {
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
            editMode: true,
            forwardMode: false,
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
          };

          if (!$scope.options) {
            $scope.options = defaultOptions;
          }

          //save initial options in order to reset the options
          initialOptions = JSON.parse(JSON.stringify($scope.options));

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
        /*  $scope.querySimpleData = {
            filter: '',
            order: 'name',
            limit: 5,
            page: 1
          };*/
          $scope.query = {
            filter: '',
            order: 'name',
            limit: 10,
            page: 1
          };


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

          function setItemsClbkHandler(header) {
            console.log("setItemsClbkHandler called");
            console.log("header:",header);
            if (!header) {
              $scope.error = 'Timeout: Nessuna Risposta dal Server';
              Notification.error({message: $scope.error});
              resetTable();
            }
            else {
              $scope.header = header;

              if ($scope.header && $scope.header.code == '0') {
                $scope.savedItems = JSON.parse(JSON.stringify($scope.items));
                console.log("setWeb success");
              }
              else {
                console.log("setWeb failed");
                $scope.error = 'Errore ' + header.code + ": " + header.description;
                Notification.error({message: $scope.error});
                resetTable();
              }
              resetOptions();
            }
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


          $scope.copyItem = function (event, columns, dataItems) {

            $mdDialog.show({
              clickOutsideToClose: true,
              controller: function ($mdDialog,  $scope, columns,regexService) {
                this.cancel = $mdDialog.cancel;
                $scope.columns = columns;
               var formattedDataItems = dataItems.map(function(item){
                 var nItem = {};
                    angular.forEach(item,function(field,key){
                   if (field.match(regexService.dateRange))
                   {
                       var startDate =  moment(field.split("-")[0].trim(), 'DD/MM/YYYY').utc().format("YYYY-MM-DD"),
                         endDate = moment(field.split("-")[1].trim(), 'DD/MM/YYYY').utc().format("YYYY-MM-DD");
                     nItem[key] = {
                       startDate: startDate.toString()+"T00:00:00.000Z",
                       endDate:  endDate.toString()+"T00:00:00.000Z"
                     };
                   }
                      else {
                     nItem[key] = field;
                   }
                 });
                 console.log("nItem",nItem);

                 return nItem;


               });

                $scope.item = formattedDataItems[0];
                function success(item) {
                  $mdDialog.hide(item);
                }

                this.addItem = function () {
                  $scope.item.form.$setSubmitted();

                  if ($scope.item.form.$valid) {

                  }
                };
              },
              controllerAs: 'ctrl',
              focusOnOpen: false,
              targetEvent: event,
              templateUrl: 'app/directives/dbss-web-dataTable/html/copy-item-dialog.html',
              locals: {
                columns: columns
              }

            }).then($scope.getItems);
          };


          $scope.addItem = function (addModeType, event, columns) {

            if (addModeType === "1")
            {
              $scope.addItemClbk();
            }
            else
            {
              $mdDialog.show({
                clickOutsideToClose: true,
                controller: function ($mdDialog, $scope, columns) {

                  this.cancel = $mdDialog.cancel;
                  $scope.columns = columns;

                  function success(item) {
                    $mdDialog.hide(item);
                  }

                  this.addItem = function () {
                    $scope.item.form.$setSubmitted();

                    if ($scope.item.form.$valid) {
                      //chiama funzione esterna che chiamerà il servizio di popolamento
                      $scope.addItemClbk($scope.addItemClbkHandler);
                    }
                  };
                  this.addItemClbkHandler = function (header) {
                    console.log("addItemClbkHandler called");
                    console.log("header:", header);
                    if (!header) {
                      console.log("addItem: no header");
                    }
                    else {
                      $scope.header = header;

                      if ($scope.header && $scope.header.code == '0') {

                        console.log("addItem: success");
                        $mdDialog.hide();
                      }
                      else {
                        console.log("addItem: failed");

                      }
                    }
                    $scope.searchLoading = false;
                  };
                },
                controllerAs: 'ctrl',
                focusOnOpen: false,
                targetEvent: event,
                templateUrl: 'app/directives/dbss-web-dataTable/html/add-item-dialog.html',
                locals: {
                  columns: columns
                }
              }).then($scope.getItems);
            }
          };

          $scope.delete = function (event) {
            $mdDialog.show({
              clickOutsideToClose: true,
              controller: 'deleteController',
              controllerAs: 'ctrl',
              focusOnOpen: false,
              targetEvent: event,
              locals: {items: $scope.selected},
              templateUrl: 'app/directives/dbss-web-dataTable/html/delete-dialog.html',
            }).then($scope.getItems);
          };


          //TODO non utilizzato
            $scope.internalControl = $scope.control || {};

          function getItemsClbkHandler(header, payload) {
            console.log("getItemsClbkHandler called");
            console.log("payload:",payload);
            console.log("header:",header);
            if (!header) {
              $scope.error = 'Nessuna risposta dal Server o risposta inattesa!';
              Notification.error({message: $scope.error});
            }
            else {
              $scope.header = header;

              if ($scope.header && $scope.header.code === '0') {
                $scope.items = payload;
                $scope.savedItems = JSON.parse(JSON.stringify($scope.items));
              }
              else {
                $scope.error = 'Errore ' + header.code + ": " + header.description;
                Notification.error({message: $scope.error});
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

          $scope.editTextField = function (isEditable, event, obj, model, title, placeholder, validators) {
            // if auto selection is enabled you will want to stop the event
            // from propagating and selecting the row
            event.stopPropagation();
            if (isEditable) {
              model = model.split('.');
              var dialog = {
                modelValue: model[1] ? obj[model[0]][model[1]] : obj[model[0]],
                placeholder: placeholder,
                save: function (input) {
                  if (model[1] && input.$modelValue.length && obj[model[0]][model[1]] !== input.$modelValue) {
                    obj[model[0]][model[1]] = input.$modelValue;
                  } else
                  if (model[0] && input.$modelValue.length && obj[model[0]] !== input.$modelValue)
                  {
                    obj[model[0]] = input.$modelValue;
                  }
                },
                targetEvent: event,
                title: title,
                validators: validators
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
