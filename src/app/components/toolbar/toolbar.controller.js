(function(){
    'use strict';

    angular.module('af.toolbar')
    .controller('ToolbarController', ToolbarController);

    /**
     *
     * @constructor
     * @ngInject
     */
    function ToolbarController($log, $auth, $mdSidenav, $state){
        var vm = this;

        $log.debug('ToolbarController start');

        vm.toggleAside = toggleAside;
        vm.logout = logout;

        $log.debug("menu ouvert : " + $mdSidenav('menu').isOpen());

        if($mdSidenav('menu').isOpen()){
            $mdSidenav('menu').close();
        }

        function toggleAside(){
            $mdSidenav('menu').toggle();
        }

        function logout(){
            $auth.logout();
            $state.go('login');
        }
    }
})();
