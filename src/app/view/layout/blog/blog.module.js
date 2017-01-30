(function() {
    'use strict';

    angular.module('af.blog',
            [ 'ui.router', 'ngMaterial', 'af.model', 'af.post' ]).config(
            blogRouting);

    /**
     * 
     * @param $stateProvider
     * @ngInject
     */
    function blogRouting($stateProvider) {
        $stateProvider.state('blog', {
            parent : 'layout',
            url : '/blog',
            title: 'Blog - tous les articles',
            views : {
                content : {
                    controller : 'BlogController as vm',
                    templateUrl : 'app/view/layout/blog/blog.html'
                }
            },
            resolve : {
                postList : getPostList
            }
        });
    }

    /**
     * 
     * @param postModel
     * @ngInject
     */
    function getPostList(postModel) {
        return postModel.findAll();
    }
})();
