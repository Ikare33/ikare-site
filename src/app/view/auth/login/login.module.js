(function(){
    'use strict';

    angular.module('af.auth')
    .config(loginConfig);

    /**
     *
     * @param $stateProvider
     * @ngInject
     */
    function loginConfig($stateProvider, $mdThemingProvider) {
        $stateProvider.state('login', {
            parent: 'auth',
            url: '/login',
            templateUrl: 'app/view/auth/login/login.html',
            controller: "LoginController as vm"
        })

        $mdThemingProvider.theme('default')
        .primaryPalette('red').accentPalette('red').dark();
    }
})();
