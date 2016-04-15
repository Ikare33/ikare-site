(function(){
  'use strict';

  angular.module('af.layout', [
    'ui.router',
    'ngMaterial',
    'af.blog',
    'af.post',
    'af.form',
    'af.toolbar',
    'af.menu',
    'af.liseuse'
  ])
    .config(layoutRouting);

  /**
   *
   * @param $stateProvider
   * @ngInject
     */
  function layoutRouting($stateProvider, $mdThemingProvider, afMenuProvider){
    $stateProvider.state('layout', {
      abstract: true,
      url: '',
      templateUrl: 'app/view/layout/layout.html'
    });
    
    //Menu
    
    afMenuProvider.addCategorie({
        id: 'blog',
        name: 'Blog',
        order : 1
      });
      
      afMenuProvider.addCategorie({
        id: 'nekogaminotabi',
        name: 'Nekogami no tabi',
        order : 2
      });

    afMenuProvider.addMenuItem({
      name: 'Chapitre 1',
      state: 'liseuse({chapitre: 1})',
      url: 'liseuse/1',
      params: {chapitre: 1},
      categorieId: 'nekogaminotabi'
    })
      .addMenuItem({
    	  name: 'Chapitre 2',
          state: 'liseuse({chapitre: 2})',
          url: 'liseuse/2',
          params: {chapitre: 2},
          categorieId: 'nekogaminotabi'
    });
    
    afMenuProvider.addMenuItem({
        name: 'Blog',
        state: 'blog',
        url: 'blog',
        categorieId: 'blog'
      });
    
    //Theme

    $mdThemingProvider.theme('default')
      .primaryPalette('red');

    $mdThemingProvider.theme('blueTheme')
      .primaryPalette('blue');

    $mdThemingProvider.theme('greenTheme')
      .primaryPalette('green');

    $mdThemingProvider.theme('yellowTheme')
      .primaryPalette('yellow');

    $mdThemingProvider.theme('purpleTheme')
      .primaryPalette('purple');

    $mdThemingProvider.theme('DarkBlueTheme')
      .primaryPalette('blue').dark();

    $mdThemingProvider.theme('DarkRedTheme')
      .primaryPalette('red').dark();

    $mdThemingProvider.theme('DarkGreenTheme')
      .primaryPalette('green').dark();

    $mdThemingProvider.alwaysWatchTheme(true);
  }
})();
