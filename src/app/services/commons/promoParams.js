( function () {
  "use strict";
angular.module('app').service('promoParamsService',
  function () {
   var promoParamsJson;

      this.getPromoParams = function()
    {
        return promoParamsJson;
    };

      this.setPromoParams = function(params)
    {
      promoParamsJson = params;
    };
  })
}());
