angular.module('app').factory('$dataTableResources', ['$resource', function ($resource) {
  'use strict';

  return {
    items: $resource('data/data.json'),
    simpleData: $resource('data/data-simple.json')
  };
}]);
