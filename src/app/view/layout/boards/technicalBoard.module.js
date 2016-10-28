(function(){
    'use strict';

    angular.module('af.board.technical', [
                                          'ui.router',
                                          'ngMaterial'
                                          ])
                                          .config(technicalBoardRouting);

    /**
     *
     * @param $stateProvider
     * @ngInject
     */
    function technicalBoardRouting($stateProvider){
        $stateProvider.state('technicalBoard', {
            parent: 'layout',
            url: '/avancement/technique',
            views: {
                content: {
                    controller: 'TechnicalBoardController as vm',
                    templateUrl: 'app/view/layout/boards/technicalBoard.html'
                }
            }
        });
    }
})();
