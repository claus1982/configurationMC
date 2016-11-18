( function () {
  'use strict';
  angular.module('app').factory('arrayService', function () {

function isInArray(a, e) {
  for ( var i = a.length; i--; ) {
    if ( a[i] === e ) return true;
  }
  return false;
}

function isEqArrays(a1, a2) {
  if ( a1.length !== a2.length ) {
    return false;
  }
  for ( var i = a1.length; i--; ) {
    if ( !isInArray( a2, a1[i] ) ) {
      return false;
    }
  }
  return true;
}

    var factory = {};

    factory.isInArray = isInArray;
    factory.isEqArrays = isEqArrays;

  return factory;
});
}());
