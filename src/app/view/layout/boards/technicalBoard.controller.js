(function(){
    'use strict';

    angular.module('af.board.technical')
    .controller('TechnicalBoardController', TechnicalBoardController);

    /**
     *
     * @param $log
     * @param $postModel
     * @constructor
     * @ngInject
     */
    function TechnicalBoardController($log){
        var vm = this;

        $log.debug('TechnicalBoardController start');

        vm.title = 'Avancement';
        vm.theme = 'default';

        vm.tasks = [
                    {
                        id:'1',
                        name:'Page Avancement technique',
                        status:'ENC',
                        priority:'haute'
                    },
                    {
                        id:'2',
                        name:'Page Avancement contenu',
                        status:'ENC',
                        priority:'haute'
                    },
                    {
                        id:'6',
                        name:'Externalisation du contenu de la liseuse',
                        status:'NEW',
                        priority:'basse'
                    },
                    {
                        id:'3',
                        name:'Zoom sur la liseuse',
                        status:'NEW',
                        priority:'moyenne'
                    },
                    {
                        id:'8',
                        name:'Gestion du volume sur la liseuse',
                        status:'NEW',
                        priority:'basse'
                    },
                    {
                        id:'4',
                        name:'Migration des articles de blog',
                        status:'NEW',
                        priority:'haute'
                    },
                    {
                        id:'5',
                        name:'Migration des commentaires disqus',
                        status:'NEW',
                        priority:'haute'
                    },
                    {
                        id:'7',
                        name:'Mise en ligne du site',
                        status:'NEW',
                        priority:'haute'
                    }
                    ];
    }
})();
