(function() {
    'use strict';

    angular.module('af.auth',
            [ 'ui.router', 'ngMaterial', 'satellizer', 'formlyMaterial' ])
            .constant('afAuthConfig', {
                baseUrl : 'http://localhost:3000'
            }).config(authConfig);

    /**
     * 
     * @param $authProvider
     * @ngInject
     */
    function authConfig($authProvider, afAuthConfig, $stateProvider) {
        angular.extend($authProvider, afAuthConfig);
        $stateProvider.state('auth', {
            url : '',
            abstract : true,
            templateUrl : 'app/view/auth/auth.html',
            resolve : {
                skipIfLoggedIn : skipIfLoggedIn
            }
        })
    }

    /**
     * 
     * @param $auth
     * @param $q
     * @Inject
     */
    function skipIfLoggedIn($auth, $q, $location) {
        return $q(function(resolve, reject) {
            if ($auth.isAuthenticated()) {
                $location.path('/home');
            } else {
                resolve();
            }
        });
    }
})();
