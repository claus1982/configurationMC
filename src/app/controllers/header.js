angular.module('app')
  .controller('headerCtrl', function ($scope, $state) {


    $scope.model = $scope.model || {};

    $scope.model.currentState = $state.current.data.label;
    $scope.model.goToHome = function()
    {
      $state.go("home");
    };

    function init() {
      $scope.model.promo = {};
      $scope.model.pack = {};
      $scope.model.attributes = {};

      $scope.model.promo.onClick = function()
        {
          console.log("promo selected");
          };

      $scope.model.pack.onClick = function()
      {
        console.log("pack selected");
      };

      //menu Attributi
      $scope.model.attributes.menu = [
        {
          label: "BF",
          onClick: function () {
            console.log("BF attribute selected");
            $state.go('attributiBF');
          }
        },
        {
          label: "CS",
          onClick: function () {
            console.log("CS attribute selected");
            $state.go('attributiCS');
          }
        },
        {
          label: "SIM",
          onClick: function () {
            console.log("SIM attribute selected");
            $state.go('attributiSIM');
          }
        },
        {
          label: "Ricarica",
          onClick: function () {
            console.log("Ricarica attribute selected");
            $state.go('attributiRicarica');
          }
        }
      ];
    }
    init();


});

