angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/home.html',
      controller: 'homeCtrl'
    })
    .state('CS', {
      url: '/attributi/CS',
      templateUrl: 'app/CS.html',
      controller: 'CSCtrl'
    })
}
