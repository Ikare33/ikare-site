(function() {
    'use strict';

    angular.module(
            'af.layout',
            [ 'ui.router', 'ngMaterial', 'ngLoadScript', 'af.blog', 'af.post', 'af.form',
                    'af.toolbar', 'af.board', 'af.menu',
                    'af.liseuse', 'af.accueil', 'af.nekogaminotabi.synopsis', 'af.nekogaminotabi.betaLecteurs' ])
            .config(layoutRouting);

    /**
     * 
     * @param $stateProvider
     * @ngInject
     */
    function layoutRouting($stateProvider, $mdThemingProvider, afMenuProvider) {
        $stateProvider.state('layout', {
            abstract : true,
            url : '',
            templateUrl : 'app/view/layout/layout.html'
        });

        // Menu

        /*
         * afMenuProvider.addCategorie({ id: 'blog', name: 'Blog', order : 1 });
         * 
         * afMenuProvider.addCategorie({ id: 'nekogaminotabi', name: 'Nekogami
         * no tabi', order : 2 });
         * 
         * afMenuProvider.addMenuItem({ name: 'Chapitre 1', state:
         * 'liseuse({chapitre: 1})', url: 'liseuse/1', params: {chapitre: 1},
         * categorieId: 'nekogaminotabi' }) .addMenuItem({ name: 'Chapitre 2',
         * state: 'liseuse({chapitre: 2})', url: 'liseuse/2', params: {chapitre:
         * 2}, categorieId: 'nekogaminotabi' });
         * 
         * afMenuProvider.addMenuItem({ name: 'Blog', state: 'blog', url:
         * 'blog', categorieId: 'blog' });
         */

        afMenuProvider.addMenuItem({
            name : 'Nekogami no tabi',
            type : 'categorie',
            children : [ 
            {
                name : 'Synopsis',
                state : 'nekogaminotabi/synopsis',
                type : 'link'
            }, {
                name : 'Bêta-lecteurs',
                state : 'nekogaminotabi/betaLecteurs',
                type : 'link'
            }, {
                name : 'La liseuse',
                state : 'nekogaminotabi/liseuse',
                type : 'link'
            }, {
                name : 'Lecture en ligne',
                type : 'submenu',
                children : [ {
                    name : 'Chapitre 1',
                    state : 'liseuse({chapitre: 1})',
                    type : 'link'
                }, {
                    name : 'Chapitre 2',
                    state : 'liseuse({chapitre: 2})',
                    type : 'link'
                } ]
            }, {
                name : 'Infos sur les chapitres',
                type : 'submenu',
                children : [ {
                    name : 'Chapitre 1',
                    state : 'nekogaminotabi/infos({chapitre: 1})',
                    type : 'link'
                }, {
                    name : 'Chapitre 1',
                    state : 'nekogaminotabi/infos({chapitre: 2})',
                    type : 'link'
                } ]
            } ]
        }).addMenuItem({
            name : 'Blog',
            type : 'categorie',
            children : [ {
                name : 'Tous les articles',
                state : 'blog',
                type : 'link'
            } ]
        }).addMenuItem({
            name : 'Avancement',
            type : 'categorie',
            children : [ {
                name : 'Boards',
                type : 'submenu',
                children : [ {
                    name : 'Technique',
                    state : 'board({id: "technique"})',
                    type : 'link'
                }, {
                    name : 'Nekogami no tabi',
                    state : 'board({id: "nekogami"})',
                    type : 'link'
                }, {
                    name : 'Autres',
                    state : 'board({id: "autres"})',
                    type : 'link'
                } ]
            } ]
        });
        ;

        // Theme

        $mdThemingProvider.theme('default').primaryPalette('red');

        $mdThemingProvider.theme('blueTheme').primaryPalette('blue');

        $mdThemingProvider.theme('greenTheme').primaryPalette('green');

        $mdThemingProvider.theme('yellowTheme').primaryPalette('yellow');

        $mdThemingProvider.theme('purpleTheme').primaryPalette('purple');

        $mdThemingProvider.theme('DarkBlueTheme').primaryPalette('blue').dark();

        $mdThemingProvider.theme('DarkRedTheme').primaryPalette('red').dark();

        $mdThemingProvider.theme('DarkGreenTheme').primaryPalette('green')
                .dark();

        $mdThemingProvider.alwaysWatchTheme(true);
    }
})();
