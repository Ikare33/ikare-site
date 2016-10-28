(function(){
    'use strict';

    angular.module('af.post',[
                              'ngMaterial',
                              'ui.router',
                              'af.model'
                              ])
                              .config(postConfig);

    /**
     *
     * @param $stateProvider
     * @ngInject
     */
    function postConfig($stateProvider){
        $stateProvider.state('post', {
            parent: 'layout',
            url: '/post/:id',
            views: {
                content: {
                    templateUrl: 'app/view/layout/post/post.html',
                    controller: 'PostController as vm'
                }
            },
            resolve: {
                post: getPost
            }
        })
    }

    /**
     *
     * @param postModel
     * @param $stateparams
     * @ngInject
     */
    function getPost(postModel, $stateParams, commentModel){
        return postModel
        .find($stateParams.id)
        .then(function(post) {
            return postModel.loadRelations(post, ['comment']);
        }).then(function(post){
            return post;
        });
    }
})();
