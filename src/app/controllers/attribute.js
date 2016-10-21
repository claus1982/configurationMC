angular.module('app')
  .controller('attributeCtrl', function ($scope, $state, dataTableResources, getWebService, setWebService) {
    $scope.model = $scope.model || {};
    //$scope.focusinControl = {};


    $scope.searchParams = dataTableResources[$state.$current.name].searchParams;

    $scope.columns = dataTableResources[$state.$current.name].columns;


    //callback richiamata nella direttiva
    $scope.getWeb = function (params, promise) {
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


          /*inizio trasformazione pipe | to array*/
        response.payload = response.payload.map(function (obj) {

          angular.forEach($scope.columns, function(column){
            if (column.type === "options" && column.multiple) {
              obj[column.model] = obj[column.model].split("|");
            }
          });
            return obj;
          });

          /*fine trasformazione*/

          promise(response.payload, response.header);

        },
        function (res) {
          promise([]);
          Notification.error({message: 'Error ' + res.status});
        }
      );
    };

    //callback richiamata nella direttiva
    $scope.setWeb = function (params, promise) {
      console.log("callback setItemsClbk called from directive");
      console.log(params);



      angular.forEach(params, function (item) {
        var input = {};
        angular.forEach($scope.columns, function (column) {
          /*inizio trasformazione array to pipe*/
          if (angular.isArray(item[column.model])) {

            input[column.model] = item[column.model].join('|');
          }
          /*fine trasformazione array to pipe*/
          else {
            input[column.model] = item[column.model];
          }
        });

        input["operation"] = dataTableResources[$state.$current.name].getOperation;

        setWebService.setWeb(setWebService.setWebRequest(input)).then(
          function (res) {
            var response = res.data.setWebResponse;
            promise(response.header);

          },
          function (res) {
            promise([]);
            // Message with custom delay
            Notification.error({message: 'Error ' + res.status});
          }
        );


      });
    };

  });

