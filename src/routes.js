angular
  .module('app')
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
    .state('promo', {
      data: {label: 'Promo'},
      url: '/promo',
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
          templateUrl: 'app/templates/promo.html',
          controller: 'promoCtrl'
        }
      }
    })
    .state('pack', {
      data: {label: 'Pack'},
      url: '/pack',
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
          templateUrl: 'app/templates/pack.html',
          controller: 'packCtrl'
        }
      }
    })
    .state('attributiCS', {
      data: {label: 'Attributi CS'},
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
          templateUrl: 'app/templates/attributeCS.html',
          controller: 'attributeCSCtrl'
        }
      }
    })
}
