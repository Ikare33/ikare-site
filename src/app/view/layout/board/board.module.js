(function(){
    'use strict';

    angular.module('af.board', [
                                          'ui.router',
                                          'ngMaterial'
                                          ])
                                          .config(boardRouting);

    /**
     *
     * @param $stateProvider
     * @ngInject
     */
    function boardRouting($stateProvider){
        $stateProvider.state('board', {
            parent: 'layout',
            url: '/avancement/:id',
            title: 'Boards',
            views: {
                content: {
                    controller: 'BoardController as vm',
                    templateUrl: 'app/view/layout/board/board.html'
                }
            }
        });
    }
})();
