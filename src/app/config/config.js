angular.module('app')
  .constant("myConfig", {

  // dev

   /* baseUrlAttr:"http://10.13.254.188:1212",
    baseUrlPromo:"http://10.13.254.188:1212",
    baseUrlPack:"http://10.13.254.188:1212",*/

    //CHT

/*    baseUrlAttr:"http://10.25.63.125:1212",
    baseUrlPromo:"http://10.25.63.125:1212",
    baseUrlPack:"http://10.25.63.125:1212",*/

    //EVO

    baseUrlAttr: "http://10.25.63.244:1127",
    baseUrlPromo: "http://10.25.63.244:1127",
    baseUrlPack: "http://10.25.63.244:1127",

    // local

/*    baseUrlAttr: "http://localhost:4730",
    baseUrlPromo: "http://localhost:4730",
    baseUrlPack: "http://localhost:4730",*/

    //http services timeout
    "timeout": 120000
  });


