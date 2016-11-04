( function () {
  'use strict';
  angular.module('app').factory('regexService', function () {

    var regex = {}


    regex.dateRange =/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}\s*[-]\s*(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;



    return regex;
  });
}());
