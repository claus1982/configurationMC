angular.module('app')
  .controller('attributeCtrl', function ($scope, $state, dataTableResources, getWebService, setWebService) {
    $scope.attributeModel = $scope.attributeModel || {};
    //$scope.focusinControl = {};

    $scope.title = dataTableResources[$state.$current.name].title;

    $scope.searchParams = dataTableResources[$state.$current.name].searchParams;

    $scope.columns = dataTableResources[$state.$current.name].columns;



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

    //callback richiamata nella direttiva
    $scope.setWeb = function (promise, params) {
      console.log("callback setItemsClbk called from directive");
      console.log(params);



      angular.forEach(params, function (item) {
        var input = {};
        angular.forEach($scope.columns, function (column) {
          /*inizio trasformazione array to pipe*/
          if (column.model && item[column.model] && angular.isArray(item[column.model].value)
            && item[column.model].value.length && item[column.model].modified) {
            input[column.model] = item[column.model].value.join('|');
          }
          /*fine trasformazione array to pipe*/
          else if (column.model && item[column.model] && item[column.model].value && item[column.model].modified){
            input[column.model] = item[column.model].value;
          }
        });

        if (item["nomeProdotto"] && item["nomeProdotto"].value)
        input["nomeProdotto"] = item["nomeProdotto"].value;
        if (item["nomeOfferta"] && item["nomeOfferta"].value)
        input["nomeOfferta"] = item["nomeOfferta"].value;
        input["operation"] = dataTableResources[$state.$current.name].setOperation;

        setWebService.setWeb(setWebService.setWebRequest(input)).then(
          function (res) {
            var response = res.data.setWebResponse;

          if (response && response.header) {
            promise(response.header);
          }

          },
          function (res) {
            promise();
            // Message with custom delay
          }
        );


      });
    };

  });

