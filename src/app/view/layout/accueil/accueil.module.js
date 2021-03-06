(function() {
    'use strict';

    angular.module('af.accueil', [ 'ui.router', 'ngMaterial' ]).config(
            accueilRouting);

    /**
     * 
     * @param $stateProvider
     * @ngInject
     */
    function accueilRouting($stateProvider) {
        $stateProvider.state('accueil', {
            parent : 'layout',
            url : '/accueil',
            title: 'Accueil',
            views : {
                content : {
                    templateUrl : 'app/view/layout/accueil/accueil.html'
                }
            }
        });

    }
})();
