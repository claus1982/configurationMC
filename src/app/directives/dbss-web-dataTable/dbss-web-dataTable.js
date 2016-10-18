(function () {
  'use strict';
  angular.module('app')
    .directive('dbssWebDataTable', function () {
      return {
        restrict : 'E',
        templateUrl: 'app/directives/dbss-web-dataTable/html/advanced-table.html',
        scope: {
          'options': '=?',
          'data': '=?',
          'columns': '=?'
        },

        controller: function ($http, $mdDialog, $mdEditDialog, $q, $timeout, $scope, $dataTableResources, $state) {
          'use strict';


          $scope.options = {
            editMode: false,
            showFilter: false,
            rowSelection: true,
            multiSelect: true,
            autoSelect: true,
            decapitate: false,
            largeEditDialog: false,
            boundaryLinks: false,
            limitSelect: true,
            pageSelect: true
          };

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


          $scope.columns = [];

          function success(res) {
            $scope.columns = res.payload[0].columns;
            $scope.items = res.payload[0];
            $scope.savedItems = JSON.parse(JSON.stringify($scope.items));

          }

   /*       function successSimpleData(res) {
            $scope.columnsSimpleData = res.payload[0].columns;
            $scope.itemsSimpleData = res.payload[0];
          }
*/
          $scope.resetItems = function () {
            $scope.options.editMode = false;
            $scope.options.rowSelection = true;
            $scope.items = JSON.parse(JSON.stringify($scope.savedItems));
          };

          $scope.saveItems = function () {
            $scope.options.editMode = false;
            $scope.options.rowSelection = true;
            $scope.savedItems = JSON.parse(JSON.stringify($scope.items));
          }

          $scope.copyItem = function (event, dataItem) {

            $mdDialog.show({
              clickOutsideToClose: true,
              controller: function ($mdDialog, $dataTableResources, $scope, table) {
                this.cancel = $mdDialog.cancel;
                $scope.table = table;
                $scope.item = dataItem[0];
                function success(item) {
                  $mdDialog.hide(item);
                }

                this.addItem = function () {
                  $scope.item.form.$setSubmitted();

                  if ($scope.item.form.$valid) {
                    $dataTableResources.attribute.CS.items.save({item: $scope.item}, success);
                  }
                };
              },
              controllerAs: 'ctrl',
              focusOnOpen: false,
              targetEvent: event,
              templateUrl: 'app/directives/dbss-web-dataTable/html/copy-item-dialog.html',
              locals: {
                table: $scope.data
              }

            }).then($scope.getItems);
          };

          $scope.addItem = function (event) {

            $mdDialog.show({
              clickOutsideToClose: true,
              controller: function ($mdDialog, $dataTableResources, $scope, table) {
                this.cancel = $mdDialog.cancel;
                $scope.table = table;

                function success(item) {
                  $mdDialog.hide(item);
                }

                this.addItem = function () {
                  $scope.item.form.$setSubmitted();

                  if ($scope.item.form.$valid) {
                    $dataTableResources.attribute.CS.items.save({item: $scope.item}, success);
                  }
                };
              },
              controllerAs: 'ctrl',
              focusOnOpen: false,
              targetEvent: event,
              templateUrl: 'app/directives/dbss-web-dataTable/html/add-item-dialog.html',
              locals: {
                table: $scope.data
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

          $scope.getItems = function () {
            console.log('$scope.query.filter', $scope.query.filter);
            $scope.promise = $dataTableResources.attribute.CS.items.get($scope.query, success).$promise;
          };
     /*     $scope.getSimpleTableData = function () {
            console.log('$scope.query.filter', $scope.query.filter);
            $scope.promiseSimpleData = $dataTableResources.simpleData.get($scope.querySimpleData, successSimpleData).$promise;
          };*/
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
            $scope.getItems();
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


          $scope.editField = function (isEditable, event, obj, model, title, placeholder, validators) {
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

          $scope.getTypes = function () {
            return ['Si', 'No'];
          };

          $scope.onPaginate = function (page, limit) {

            $scope.promise = $timeout(function () {

            }, 2000);
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
