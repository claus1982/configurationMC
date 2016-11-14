(function () {
  'use strict';
  angular.module('app')
  .directive('dynAttr',  ['$compile',  function($compile) {
  return {
    //priority:1001, // compiles first,
    restrict: 'A',
    replace: false,
    scope: {
      dynAttr: '=?'
    },
    //terminal: true,
    controller: ['$scope', '$element', '$compile', function ($scope, $element, $compile) {
      var list = $scope.dynAttr;
      $element.removeAttr('dynAttr');
      if (list) {
        angular.forEach(list, function (attr, key) {
          $element.attr(key, attr);
        });
        $compile($element)($scope);
      }
    }]
  }
  }]);
}());
