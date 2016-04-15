(function(){
  'use strict';

  angular.module('af.form', [
      'ui.router',
      'ngMaterial',
      'ngMessages',
      'formlyMaterial',
      'af.model'
    ])
    .config(formRouting);

  /**
   *
   * @param $stateProvider
   * @ngInject
   */
  function formRouting($stateProvider, $mdThemingProvider){
    $stateProvider.state('form', {
      parent: 'layout',
      url: '/form',
      views: {
        content: {
          controller: 'FormController as vm',
          templateUrl: 'app/view/layout/form/form.html'
        }
      }
    });

    $mdThemingProvider.theme('default')
      .primaryPalette('pink');
  }
})();
