angular
  .module('app')
  .config(function(NotificationProvider) {
    NotificationProvider.setOptions({
      delay: 5000,
      startTop: 400,
      startRight: 550,
      verticalSpacing: 200,
      horizontalSpacing: 100,
      replaceMessage: true,
      positionX: 'left',
      closeOnClick: true,
      positionY: 'top'
    });
  })
  .config(routesConfig)
  .config(function($breadcrumbProvider) {
  $breadcrumbProvider.setOptions({
    templateUrl: 'app/templates/partials/breadcrumb-template.html'
  });
})
  .config(function($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
      templateUrl: 'app/templates/partials/breadcrumb-template.html'
    });
  })
/*.config(function ($mdThemingProvider) {
  var customPrimary = {
    '50': '#43b6fe',
    '100': '#2aacfe',
    '200': '#11a2fe',
    '300': '#0196f4',
    '400': '#0187da',
    '500': '0177c1',
    '600': '#0167a8',
    '700': '#01588e',
    '800': '#014875',
    '900': '#00385b',
    'A100': '#5dc0fe',
    'A200': '#76cafe',
    'A400': '#90d4fe',
    'A700': '#002942'
  };
  $mdThemingProvider
    .definePalette('customPrimary',
      customPrimary);

  var customAccent = {
    '50': '#052b67',
    '100': '#063680',
    '200': '#074098',
    '300': '#084ab0',
    '400': '#0954c9',
    '500': '#0a5fe1',
    '600': '#2979f5',
    '700': '#4288f6',
    '800': '#5a98f7',
    '900': '#72a7f9',
    'A100': '#2979f5',
    'A200': '116af4',
    'A400': '#0a5fe1',
    'A700': '#8bb6fa'
  };
  $mdThemingProvider
    .definePalette('customAccent',
      customAccent);

  var customWarn = {
    '50': '#ffb280',
    '100': '#ffa266',
    '200': '#ff934d',
    '300': '#ff8333',
    '400': '#ff741a',
    '500': '#ff6400',
    '600': '#e65a00',
    '700': '#cc5000',
    '800': '#b34600',
    '900': '#993c00',
    'A100': '#ffc199',
    'A200': '#ffd1b3',
    'A400': '#ffe0cc',
    'A700': '#803200'
  };
  $mdThemingProvider
    .definePalette('customWarn',
      customWarn);

  var customBackground = {
    '50': '#ffffff',
    '100': '#ffffff',
    '200': '#ffffff',
    '300': '#ffffff',
    '400': '#ffffff',
    '500': '#ffffff',
    '600': '#f2f2f2',
    '700': '#e6e6e6',
    '800': '#d9d9d9',
    '900': '#cccccc',
    'A100': '#ffffff',
    'A200': '#ffffff',
    'A400': '#ffffff',
    'A700': '#bfbfbf'
  };
  $mdThemingProvider
    .definePalette('customBackground',
      customBackground);

  $mdThemingProvider.theme('default')
    .primaryPalette('customPrimary')
    .accentPalette('customAccent')
    .warnPalette('customWarn')
    .backgroundPalette('customBackground')
});*/
  .config(function ($mdThemingProvider) {
    var customPrimary = {
      '50': '#8c8df9',
      '100': '#7475f8',
      '200': '#5c5df7',
      '300': '#4445f5',
      '400': '#2b2df4',
      '500': '#1315F3',
      '600': '#0b0de1',
      '700': '#0a0cc9',
      '800': '#090ab1',
      '900': '#080998',
      'A100': '#a5a5fa',
      'A200': '#bdbdfc',
      'A400': '#d5d5fd',
      'A700': '#070880'
    };
    $mdThemingProvider
      .definePalette('customPrimary',
        customPrimary);

    var customAccent = {
      '50': '#660000',
      '100': '#800000',
      '200': '#990000',
      '300': '#b30000',
      '400': '#cc0000',
      '500': '#e60000',
      '600': '#ff1a1a',
      '700': '#ff3333',
      '800': '#ff4d4d',
      '900': '#ff6666',
      'A100': '#ff1a1a',
      'A200': '#FF0000',
      'A400': '#e60000',
      'A700': '#ff8080'
    };
    $mdThemingProvider
      .definePalette('customAccent',
        customAccent);

    var customWarn = {
      '50': '#ffb280',
      '100': '#ffa266',
      '200': '#ff934d',
      '300': '#ff8333',
      '400': '#ff741a',
      '500': '#ff6400',
      '600': '#e65a00',
      '700': '#cc5000',
      '800': '#b34600',
      '900': '#993c00',
      'A100': '#ffc199',
      'A200': '#ffd1b3',
      'A400': '#ffe0cc',
      'A700': '#803200'
    };
    $mdThemingProvider
      .definePalette('customWarn',
        customWarn);

    var customBackground = {
      '50': '#ffffff',
      '100': '#ffffff',
      '200': '#ffffff',
      '300': '#ffffff',
      '400': '#ffffff',
      '500': '#F1F1F7',
      '600': '#e1e1ee',
      '700': '#d1d1e4',
      '800': '#c0c0db',
      '900': '#b0b0d2',
      'A100': '#ffffff',
      'A200': '#ffffff',
      'A400': '#ffffff',
      'A700': '#a0a0c9'
    };
    $mdThemingProvider
      .definePalette('customBackground',
        customBackground);

    $mdThemingProvider.theme('default')
      .primaryPalette('customPrimary')
      .accentPalette('customAccent')
      .warnPalette('customWarn')
      .backgroundPalette('customBackground')
  });

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/GUI_MKT/home');
  $stateProvider
    .state('home', {
      ncyBreadcrumb: {
        label: 'Home'
      },
      views: {
        'main': {
          templateUrl: 'app/templates/home.html',
          controller: 'homeCtrl'
        }
      },
      url: '/GUI_MKT/home'
    })
    .state('attributi', {
      url: '/GUI_MKT/attributi',
      abstract: true,
      views: {
        'breadcrumb': {
          templateUrl: 'app/templates/partials/breadcrumb.html',
          controller: 'breadcrumbCtrl'
        },
        'main': {
          templateUrl: 'app/templates/attribute/attribute-main.html'
        },
        'header': {
          templateUrl: 'app/templates/partials/header.html',
          controller: 'headerCtrl'
        }
      }
    })
    .state('attributi.CS', {
      ncyBreadcrumb: {
        label: 'Attributi CS',
        parent: 'home'
      },
      url: '/CS',
      templateUrl: 'app/templates/attribute/attribute.html',
      controller: 'attributeCtrl'
    })
    .state('attributi.BF', {
      ncyBreadcrumb: {
        label: 'Attributi BF',
        parent: 'home'
      },
      url: '/BF',
      templateUrl: 'app/templates/attribute/attribute.html',
      controller: 'attributeCtrl'
    })
    .state('attributi.SIM', {
      ncyBreadcrumb: {
        label: 'Attributi SIM',
        parent: 'home'
      },
      url: '/SIM',
      templateUrl: 'app/templates/attribute/attribute.html',
      controller: 'attributeCtrl'
    })
    .state('attributi.ricarica', {
      ncyBreadcrumb: {
        label: 'Attributi Ricarica',
        parent: 'home'
      },
      url: '/Ricarica',
          templateUrl: 'app/templates/attribute/attribute.html',
          controller: 'attributeCtrl'

    })
    .state('promo', {
      abstract: true,
      views: {
        "main": {
          templateUrl     : 'app/templates/promo/promo.html'
        },
        "breadcrumb" : {
          templateUrl     : "app/templates/partials/breadcrumb.html",
          controller      : "breadcrumbCtrl"
        },
        "header" : {
          templateUrl: 'app/templates/partials/header.html',
          controller: 'headerCtrl'
        }
      }
    })
    .state('promo.categories', {
      ncyBreadcrumb: {
        label: 'Promo',
        parent: 'home'
      },
      url: '/GUI_MKT/promo',
      templateUrl     : 'app/templates/promo/promo.categories.html',
      controller      : 'promoCtrl'
    })
    .state('promo.list', {
   ncyBreadcrumb: {
     parent: 'promo.categories',
     label: '{{tipoPromo}}'
   },
   url: '/GUI_MKT/promo/:tipoPromo',
   params:{
   'tipoPromo' : null
   },
   templateUrl     : 'app/templates/promo/promo.list.html',
   controller      : 'promoListCtrl'
   })
   .state('promo.detail', {
   ncyBreadcrumb: {
   label: '{{codicePromo}}',
   parent: 'promo.list',
   },
   params:{
   'tipoPromo' : null,
   'codicePromo': null,
   'isBatch': null
   },
   url: '/GUI_MKT/promo/:tipoPromo/dettaglio',
   templateUrl     : 'app/templates/promo/promo.detail.html',
   controller      : 'promoDetailCtrl'
   })
    .state('promo.addDetail', {
      ncyBreadcrumb: {
        label: 'Aggiungi',
        parent: 'promo.detail'
      },
      params:{
        'tipoPromo' : null,
        'codicePromo': null,
        'isBatch': null
      },
      url: '/promo/:tipoPromo/dettaglio/aggiungi',
      templateUrl     : 'app/templates/promo/promo.addDetail.html',
      controller      : 'promoAddDetailCtrl'
    })
    .state('pack', {
      abstract: true,
      views: {
        "main": {
          templateUrl     : 'app/templates/pack/pack.html'
        },
        "breadcrumb" : {
          templateUrl     : "app/templates/partials/breadcrumb.html",
          controller      : "breadcrumbCtrl"
        },
        "header" : {
          templateUrl: 'app/templates/partials/header.html',
          controller: 'headerCtrl'
        }
      }
    })
    .state('pack.list', {
      ncyBreadcrumb: {
        parent: 'home',
        label: 'Pack'
      },
      url: '/GUI_MKT/pack',
      templateUrl     : 'app/templates/pack/pack.list.html',
      controller      : 'packListCtrl'
    })
    .state('pack.detail', {
      ncyBreadcrumb: {
        parent: 'pack.list',
        label: '{{codicePack}}'
      },
      params:{
        'codicePack': null
      },
      url: '/GUI_MKT/pack/:codicePack',
      templateUrl     : 'app/templates/pack/pack.detail.html',
      controller      : 'packDetailCtrl'
    })
    .state('pack.addDetail', {
      ncyBreadcrumb: {
        label: 'Aggiungi',
        parent: 'pack.detail'
      },
      params:{
        'codicePack': null
      },
      url: '/GUI_MKT/pack/:codicePack/add',
      templateUrl     : 'app/templates/pack/pack.addDetail.html',
      controller      : 'packAddDetailCtrl'
    })
}
