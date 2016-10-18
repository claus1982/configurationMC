angular.module('app').factory('$dataTableResources', ['$resource', function ($resource) {
  'use strict';

  return {
    attribute:
    {
      CS:
      {
        items: $resource('data/CS.json')
      },
      BF:
      {

      },
      SIM:
      {

      },
      ricarica:
      {

      }
    },
    promo:
    {

    },
    pack:
    {

    }
  };
}]);
