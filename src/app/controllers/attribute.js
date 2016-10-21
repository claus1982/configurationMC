angular.module('app')
  .controller('attributeCtrl', function ($scope, $state, dataTableResources, getWebService, setWebService) {
    $scope.model = $scope.model || {};
    //$scope.focusinControl = {};


      $scope.params = dataTableResources[$state.$current.name].params;

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
          promise(response.payload, response.header);

        },
        function (res) {
          promise([]);
          Notification.error({message: 'Error '+res.status});
        }
      );
    };

    //callback richiamata nella direttiva
    $scope.setWeb = function (params, promise) {
      console.log("callback setItemsClbk called from directive");
      console.log(params);


      angular.forEach(params, function (item) {
        setWebService.setWeb(setWebService.setWebRequest({
          "operation": dataTableResources[$state.$current.name].setOperation,
          "nomeOfferta": item.nomeOfferta,
          "nomeProdotto": item.nomeProdotto,
          "codiceCartaServizi": item.codiceCartaServizi,
          "defaultFlag": item.defaultFlag,
          "parentDisplayName": item.parentDisplayName,
          "webDescription": item.webDescription,
          "longDescriptionWeb": item.longDescriptionWeb,
          "joinedSeniorityConstraintWeb": item.joinedSeniorityConstraintWeb,
          "isWebSellable": item.isWebSellable,
          "paymentMethodWeb": item.paymentMethodWeb
        })).then(
          function (res) {
            var response = res.data.setWebResponse;
            promise(response.header);

          },
          function (res) {
            promise([]);
            // Message with custom delay
            Notification.error({message: 'Error '+res.status});
          }
        );


      });
    };

  });

