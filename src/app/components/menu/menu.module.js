(function(){
    'use strict';

    angular.module('af.menu', [
                               'ngMaterial',
                               'ui.router'
                               ])
                               .component('afMenu', {
                                   /*eslint no-unused-vars:0*/
                                   templateUrl: 'app/components/menu/menu.html',
                                   controller: "MenuController as vm"
                               });
})();
