(function(){
  'use strict';

  angular.module('af.liseuse', [
      'ui.router',
      'ngMaterial',
      'pdf',
      'angularSoundManager'
    ])
    .config(homeRouting);

  /**
   *
   * @param $stateProvider
   * @ngInject
   */
  function homeRouting($stateProvider, $mdThemingProvider){
    $stateProvider.state('liseuse', {
      cache: false,
      parent: 'layout',
      url: '/liseuse/:chapitre',
      views: {
        content: {
          controller: 'LiseuseController as vm',
          templateUrl: 'app/view/layout/liseuse/liseuse.html'
        }
      }
    });
  }
})();
