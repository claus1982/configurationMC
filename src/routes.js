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
  .config(routesConfig)
  .config(function($breadcrumbProvider) {
  $breadcrumbProvider.setOptions({
    templateUrl: 'app/templates/partials/breadcrumb-template.html'
  });
});

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      ncyBreadcrumb: {
        label: 'Home'
      },
      url: '/home',
      views: {
        'main': {
          templateUrl: 'app/templates/home.html',
          controller: 'homeCtrl'
        }
      }
    })
    .state('attributiCS', {
      ncyBreadcrumb: {
        label: 'Attributi CS'
      },
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
      data: {breadcrumb: 'Attributi BF'},
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
      data: {breadcrumb: 'Attributi SIM'},
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
      data: {breadcrumb: 'Attributi Ricarica'},
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
      data: {breadcrumb: 'Promo'},
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
      data: {breadcrumb: 'Promo List'},
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
      data: {breadcrumb: 'Condition List'},
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
      data: {breadcrumb: 'Search'},
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
      data: {breadcrumb: 'Confirm'},
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
