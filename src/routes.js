angular
  .module('app')
  .config(function(NotificationProvider) {
    NotificationProvider.setOptions({
      delay: 5000,
      startTop: 400,
      startRight: 550,
      verticalSpacing: 100,
      horizontalSpacing: 20,
      replaceMessage: true,
      positionX: 'left',
      closeOnClick: true,
      positionY: 'top'
    });
  })
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      data: {label: 'Home'},
      url: '/home',
      views: {
        'main': {
          templateUrl: 'app/templates/home.html',
          controller: 'homeCtrl'
        }
      }
    })
    .state('attributiCS', {
      data: {label: 'Attributi CS', servicePath: "attribute"},
      url: '/attributi/CS',
      views: {
        'breadcrumb': {
          templateUrl: 'app/templates/partials/breadcrumb.html',
          controller: 'breadcrumbCtrl'
        },
        'header': {
          templateUrl: 'app/templates/partials/header.html',
          controller: 'headerCtrl'
        },
        'main': {
          templateUrl: 'app/templates/attribute.html',
          controller: 'attributeCtrl'
        }
      }
    })
    .state('attributiBF', {
      data: {label: 'Attributi BF'},
      url: '/attributi/BF',
      views: {
        'breadcrumb': {
          templateUrl: 'app/templates/partials/breadcrumb.html',
          controller: 'breadcrumbCtrl'
        },
        'header': {
          templateUrl: 'app/templates/partials/header.html',
          controller: 'headerCtrl'
        },
        'main': {
          templateUrl: 'app/templates/attribute.html',
          controller: 'attributeCtrl'
        }
      }
    })
    .state('attributiSIM', {
      data: {label: 'Attributi SIM'},
      url: '/attributi/SIM',
      views: {
        'breadcrumb': {
          templateUrl: 'app/templates/partials/breadcrumb.html',
          controller: 'breadcrumbCtrl'
        },
        'header': {
          templateUrl: 'app/templates/partials/header.html',
          controller: 'headerCtrl'
        },
        'main': {
          templateUrl: 'app/templates/attribute.html',
          controller: 'attributeCtrl'
        }
      }
    })
    .state('attributiRicarica', {
      data: {label: 'Attributi Ricarica'},
      url: '/attributi/ricarica',
      views: {
        'breadcrumb': {
          templateUrl: 'app/templates/partials/breadcrumb.html',
          controller: 'breadcrumbCtrl'
        },
        'header': {
          templateUrl: 'app/templates/partials/header.html',
          controller: 'headerCtrl'
        },
        'main': {
          templateUrl: 'app/templates/attribute.html',
          controller: 'attributeCtrl'
        }
      }
    })
    .state('promo', {
      data: {label: 'Promo'},
      url: '/promo',
      params: {
        tipoPromo: null
      },
      views: {
        "main": {
          templateUrl     : 'app/templates/promo.html',
          controller      : 'promoCtrl'
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
    .state('promoList', {
      data: {label: 'Promo List'},
      url: '/promo/list',
      params:{
        'tipoPromo' : null,
        'codicePromo': null
      },
      views: {
        "main": {
          templateUrl     : 'app/templates/promo.list.html',
          controller      : 'promoListCtrl'
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
    .state('promoListDetail', {
      data: {label: 'Condition List'},
      params:{
        'tipoPromo' : null,
        'codicePromo': null
      },
      url: '/promo/detail',
      views: {
        "main": {
          templateUrl     : 'app/templates/promo.detail.html',
          controller      : 'promoDetailCtrl'
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
    .state('promoSearch', {
      data: {label: 'Search'},
      params:{
        'tipoPromo' : null,
        'codicePromo': null,
        'type': null,
        'items': null
      },
      url: '/promo/detail/search',
      views: {
        "main": {
          templateUrl     : 'app/templates/promo.search.html',
          controller      : 'promoSearchCtrl'
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
    .state('promoConfirmed', {
      data: {label: 'Conferma'},
      params:{
        'tipoPromo' : null,
        'codicePromo': null,
        'type': null,
        'items': null
      },
      url: '/promo/detail/confirm',
      views: {
        "main": {
          templateUrl     : 'app/templates/promo.confirmed.html',
          controller      : 'promoConfirmedCtrl'
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
    });
}
