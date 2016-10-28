(function(){
    'use strict';

    angular.module('af.menu')
    .controller('MenuController', MenuController);

    /**
     *
     * @constructor
     * @ngInject
     */
    function MenuController($log, $window, afMenu){
        var vm = this;

        $log.debug('ToolbarController start');

        vm.menuItems = afMenu.menuItems;

        vm.categories = afMenu.categories;

        $log.debug(vm.categories);

        vm.goTo = function(state){
            $window.location.href = state;
        };

        vm.isOpen = function(section){
            if(angular.isUndefined(section.isOpen)){
                section.isOpen = false;
            }

            return section.isOpen;
        };

        vm.toggle = function(section){
            if(angular.isUndefined(section.isOpen)){
                section.isOpen = false;
            }else if(section.isOpen){
                section.isOpen = false
            }else{
                section.isOpen = true;
            }
        };
    }
})();
