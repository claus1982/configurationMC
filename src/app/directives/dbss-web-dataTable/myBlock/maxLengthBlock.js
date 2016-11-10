//blocca l'input quando si raggiunge il maxlength//

(function () {
  'use strict';
  angular.module('app')
    .directive('maxlengthBlock', function () {
  return {
    scope: {
      ngMaxlength: '='
    },
    link: function (scope, elm, attrs) {

      elm.bind('keypress', function(e){

        // stop typing if length is equal or greater then limit
        if(elm[0].value.length >= scope.ngMaxlength){
          e.preventDefault();
          return false;
        }
      });
    }
  }
});
}());
