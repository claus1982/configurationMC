angular.module('app')
  .controller('breadcrumbCtrl', function ($scope, $state) {


    $scope.model = $scope.model || {};

    $scope.model.currentState = $state.$current.data.label;


  });

