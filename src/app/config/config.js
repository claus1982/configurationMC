angular.module('app')
  .constant("myConfig", {

  // dev

   /*
    BASE_URL_ATTR:"http://10.13.254.188:1212",
    BASE_URL_PROMO:"http://10.13.254.188:1212",
    BASE_URL_PACK:"http://10.13.254.188:1212",
    */

    //CHT

/*    BASE_URL_ATTR:"http://10.25.63.125:1212",
    BASE_URL_PROMO:"http://10.25.63.125:1212",
    BASE_URL_PACK:"http://10.25.63.125:1212",*/

    //EVO
/*
    BASE_URL_ATTR: "http://10.25.63.244:1127",
    BASE_URL_PROMO: "http://10.25.63.244:1127",
    BASE_URL_PACK: "http://10.25.63.244:1127",*/

    // local

    BASE_URL_ATTR  : "http://localhost:4730",
    BASE_URL_PROMO  : "http://localhost:4730",
    BASE_URL_PACK   : "http://localhost:4730",

    //http services timeout
    TIMEOUT          :  6000000,
    //sezione ATTRIBUTI: determina se filtrare i campi di tipo picklist consentendo di mostrare
    // solo i valori corrispondenti a quelli configurati
    ATTRIBUTE_FILTER: true
  });


