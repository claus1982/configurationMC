angular.module('app').factory('$dataTableResources', ['$resource','myConfig', function ($resource,myConfig) {
  'use strict';
  return {
    attribute:
    {
      CS:
      {
        items: $resource(myConfig.baseUrl+'/attribute/CS')
      },
      BF:
      {
        items: $resource(myConfig.baseUrl+'/attribute/BF')
      },
      SIM:
      {
        items: $resource(myConfig.baseUrl+'/attribute/SIM')
      },
      ricarica:
      {
        items: $resource(myConfig.baseUrl+'/attribute/ricarica')
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
