(function(){
    'use strict';

    angular.module('af.nekogaminotabi.lectureEnLigne', [
                                                'ui.router',
                                                'ngMaterial'
                                                ])
                                                .config(nekogaminotabiLectureEnLigneRouting);

    /**
     *
     * @param $stateProvider
     * @ngInject
     */
    function nekogaminotabiLectureEnLigneRouting($stateProvider){
        $stateProvider.state('nekogaminotabi/lectureEnLigne', {
            parent: 'layout',
            url: '/nekogaminotabi/lectureEnLigne',
            title: 'La liseuse',
            views: {
                content: {
                    templateUrl: 'app/view/layout/nekogaminotabi/lectureEnLigne/lectureEnLigne.html'
                }
            }
        });

    }
})();
