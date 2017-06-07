(function() {
  'use strict';

  angular
    .module('ikare')
    .config(config);

  /** @ngInject */
  function config($logProvider, $urlRouterProvider, $locationProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $urlRouterProvider.otherwise('/accueil');
    $locationProvider.html5Mode(true);
  }

})();
