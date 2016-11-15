angular.module('app')
  .constant("myConfig", {

   // dev
 // "baseUrl": "http://10.13.254.188:1213",
    baseUrlAttr:"http://10.13.254.188:1212",
    baseUrlPromo:"http://10.13.254.188:1213",
    baseUrlPack:"http://10.13.254.188:1213e",
  // local
  //"baseUrlAttr": "http://localhost:4730",
  //"baseUrlPromo": "http://localhost:4730",
  //"baseUrlPack": "http://localhost:4730",

    //http services timeout
    "timeout": 60000
  });


