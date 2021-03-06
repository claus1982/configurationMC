angular.module('app')
  .controller('headerCtrl', function ($scope, $state) {


    $scope.model = $scope.model || {};



    $scope.model.goToHome = function()
    {
      $state.go("home");
    };


    var originatorEv;

    $scope.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };

    function init() {
      $scope.model.promo = {};
      $scope.model.pack = {};
      $scope.model.attributes = {};

      $scope.model.promo.onClick = function()
        {
          console.log("promo selected");
          $state.go('promo.categories');
          };

      $scope.model.pack.onClick = function()
      {
        console.log("pack selected");
        $state.go('pack.list');
      };

      //menu Attributi
      $scope.model.attributes.menu = [
        {
          label: "BF",
          onClick: function () {
            console.log("BF attribute selected");
            $state.go('attributi.BF');
          }
        },
        {
          label: "CS",
          onClick: function () {
            console.log("CS attribute selected");
            $state.go('attributi.CS');
          }
        },
        {
          label: "SIM",
          onClick: function () {
            console.log("SIM attribute selected");
            $state.go('attributi.SIM');
          }
        },
        {
          label: "Ricarica",
          onClick: function () {
            console.log("Ricarica attribute selected");
            $state.go('attributi.ricarica');
          }
        }
      ];
    }
    init();


});

