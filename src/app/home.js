angular.module('app')
  .controller('homeCtrl', function ($scope, $state) {
  $scope.model = {};
  $scope.model.selectedCS = function () {
    console.log("CS SELECTED");
    $state.go('CS');
  };
})

