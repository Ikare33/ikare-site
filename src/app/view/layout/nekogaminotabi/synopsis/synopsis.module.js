(function(){
    'use strict';

    angular.module('af.nekogaminotabi.synopsis', [
                                                'ui.router',
                                                'ngMaterial'
                                                ])
                                                .config(nekogaminotabiSynopsisRouting);

    /**
     *
     * @param $stateProvider
     * @ngInject
     */
    function nekogaminotabiSynopsisRouting($stateProvider){
        $stateProvider.state('nekogaminotabi/synopsis', {
            parent: 'layout',
            url: '/nekogaminotabi/synopsis',
            title: 'Synopsis',
            views: {
                content: {
                    templateUrl: 'app/view/layout/nekogaminotabi/synopsis/synopsis.html'
                }
            }
        });

    }
})();
