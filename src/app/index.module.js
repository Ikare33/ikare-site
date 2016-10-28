(function() {
    'use strict';

    angular
    .module('ikare', [
                      'ngAnimate',
                      'ngSanitize',
                      'ngMessages',
                      'ngAria',
                      'ui.router',
                      'ngMaterial',
                      'satellizer',
                      'formlyMaterial',
                      'af.layout',
                      'af.model',
                      'af.auth',
                      'pdf',
                      'angularSoundManager'
                      ]).filter('nospace', function () {
                          return function (value) {
                              return (!value) ? '' : value.replace(/ /g, '');
                          };
                      })

})();
