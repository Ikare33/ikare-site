(function(){
    'use strict';

    angular.module('af.menu')
    .provider('afMenu', AfMenuProvider);

    /**
     * @ngInject
     */
    function AfMenuProvider(){
        var self = this;
        var menuItems = [];
        var categories = [];

        this.addMenuItem = addMenuItem;

        this.addCategorie = addCategorie;

        this.categorieCompare = categorieCompare;

        this.$get = serviceConstructor;

        /**
         * @ngInject
         */
        function serviceConstructor(){
            return {
                menuItems: menuItems,
                categories: categories
            };
        }

        /**
         * @ngInject
         */
        function addMenuItem(menuItem){
            if(!angular.isObject(menuItem)){
                throw new Error('menuItem must be an object !');
            }else{
                menuItems.push(menuItem);
            }

            return self;
        }

        /**
         * @ngInject
         */
        function addCategorie(categorie){
            if(!angular.isObject(categorie)){
                throw new Error('categorie must be an object !');
            }else{
                categories.push(categorie);
                categories.sort(this.categorieCompare);
            }
            return self;
        }

        /**
         * @ngInject
         */
        function categorieCompare(categorie1, categorie2){
            if(categorie1.order < categorie2.order){
                return -1;
            }else if(categorie1.order < categorie2.order){
                return 1;
            }else{
                return 0;
            }
        }
    }
})();
