(function () {
  'use strict';
  angular.module('app')
    .directive('dbssWebDataTable', function () {
      return {
        restrict : 'E',
        templateUrl: 'app/directives/dbss-web-dataTable/html/advanced-table.html',
        scope: {
          'options': '=?',
          'columns': '=?',
          'searchParams': '=',
          'control': '=',
          'getItemsClbk': '&',
          'setItemsClbk': '&'

        },

        controller: function ($http, $mdDialog, $mdEditDialog, $q, $timeout, $scope, Notification) {
          'use strict';

          $scope.isArray = angular.isArray;

          var initialOptions = {},
            defaultOptions = {
            addMode: false,
            editMode: false,
            deleteMode: false,
            copyMode: false,
            showFilter: false,
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
              return $scope.items && $scope.items.data ? $scope.items.data.length : 0;
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
            limit: 5,
            page: 1
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

          $scope.restoreSavedItems = function () {
            resetOptions();
            $scope.items = JSON.parse(JSON.stringify($scope.savedItems));
          };



          function setItemsClbkHandler(header) {
            console.log("setItemsClbkHandler called");
            console.log("header:",header);
            $scope.header = header;

            if ($scope.header && $scope.header.code == '0') {
              $scope.savedItems = JSON.parse(JSON.stringify($scope.items));
              console.log("setWeb success");
            }
            else {
              console.log("setWeb failed");
              $scope.error = 'Errore '+header.code+": "+header.description;
              Notification.error({message: $scope.error});
            }
            resetOptions();
            $scope.loading = false;
          }

          $scope.enableEditMode = function() {
            $scope.options.editMode=!$scope.options.editMode;
            $scope.options.rowSelection=false;
          };

          $scope.saveItems = function () {

            //TODO gestione setWeb
            var modifiedItems = [];

              for (var i=0;i<$scope.items.length; i++)
              {
                if (!angular.equals($scope.items[i],$scope.savedItems[i]))
                {
                  modifiedItems.push($scope.items[i]);
                  console.log($scope.items[i]);
                }
              }
            console.log("modified items:");
            console.log(modifiedItems);

              $scope.setItemsClbk({
              params: modifiedItems,
              promise: setItemsClbkHandler
            });

          };

          $scope.copyItem = function (event, dataItem) {

            $mdDialog.show({
              clickOutsideToClose: true,
              controller: function ($mdDialog,  $scope, columns) {
                this.cancel = $mdDialog.cancel;
                $scope.columns = columns;
                $scope.item = dataItem[0];
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
                columns: $scope.columns
              }

            }).then($scope.getItems);
          };

          $scope.addItem = function (event) {

            $mdDialog.show({
              clickOutsideToClose: true,
              controller: function ($mdDialog,  $scope, columns) {
                this.cancel = $mdDialog.cancel;
                $scope.columns = columns;

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
              templateUrl: 'app/directives/dbss-web-dataTable/html/add-item-dialog.html',
              locals: {
                columns: $scope.columns
              }
            }).then($scope.getItems);
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

          function getItemsClbkHandler(payload, header) {
            console.log("getItemsClbkHandler called");
            console.log("payload:",payload);
            console.log("header:",header);
            $scope.header = header;

            if ($scope.header && $scope.header.code === '0') {
              $scope.items = payload;
              $scope.savedItems = JSON.parse(JSON.stringify($scope.items));
            }
            else {
              $scope.error = 'Errore '+header.code+": "+header.description;
              Notification.error({message: $scope.error});
            }
            $scope.loading = false;

          }

          $scope.getItems = function () {

            console.log('called getItems, $scope.query.filter', $scope.query.filter);
            resetTable();
            resetOptions();
            $scope.loading = true;

            $scope.getItemsClbk({
              params: $scope.searchParams,
              promise: getItemsClbkHandler
            });
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
                  if (model[1]) {
                    obj[model[0]][model[1]] = input.$modelValue;
                  } else {
                    obj[model[0]] = input.$modelValue;
                  }
                  obj.modified = true;
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
        }
      }
    })
}());
