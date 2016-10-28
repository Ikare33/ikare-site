(function(){
    'use strict';

    angular.module('af.toolbar', [
                                  'ngMaterial',
                                  'satellizer',
                                  'ui.router'
                                  ])
                                  .component('afToolbar', {
                                      /*eslint no-unused-vars:0*/
                                      templateUrl: function($element, $attrs){
                                          return 'app/components/toolbar/toolbar.html'
                                      },
                                      controller: "ToolbarController as vm"
                                  });
})();
