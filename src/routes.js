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
  });

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
 $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/GUI_MKT');
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
      url: '/GUI_MKT'
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
   parent: 'promo.list'
   },
   params:{
   'tipoPromo' : null,
   'codicePromo': null,
   'promoBatch': null
   },
   url: '/GUI_MKT/promo/:tipoPromo/:codicePromo',
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
        'promoBatch': null
      },
      url: '/GUI_MKT/promo/:tipoPromo/:codicePromo/newCondition',
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


//gestione reload
window.onbeforeunload = function(event) {

    // Allow reload without any alert
    event.preventDefault()
};
