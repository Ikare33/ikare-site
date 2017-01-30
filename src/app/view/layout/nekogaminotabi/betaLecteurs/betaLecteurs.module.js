(function(){
    'use strict';

    angular.module('af.nekogaminotabi.betaLecteurs', [
                                                'ui.router',
                                                'ngMaterial'
                                                ])
                                                .config(nekogaminotabiBetaLecteursRouting);

    /**
     *
     * @param $stateProvider
     * @ngInject
     */
    function nekogaminotabiBetaLecteursRouting($stateProvider){
        $stateProvider.state('nekogaminotabi/betaLecteurs', {
            parent: 'layout',
            url: '/nekogaminotabi/betaLecteurs',
            title: 'Bêta-lecteurs',
            views: {
                content: {
                    templateUrl: 'app/view/layout/nekogaminotabi/betaLecteurs/betaLecteurs.html'
                }
            }
        });

    }
})();
