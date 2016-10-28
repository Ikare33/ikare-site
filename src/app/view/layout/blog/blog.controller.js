(function() {
    'use strict';

    angular.module('af.blog').controller('BlogController', BlogController);

    /**
     * 
     * @param $log
     * @param $postModel
     * @constructor
     * @ngInject
     */
    function BlogController($log, postModel, $state) {
        var vm = this;

        $log.debug('BlogController start');

        vm.title = 'Blog - Liste des articles';
        vm.posts = postModel.getAll();
        
        $log.debug(vm.posts);

        vm.submit = function() {
            if (vm.postForm.$valid) {
                vm.theme = vm.postForm.palette;
            }
        };

        vm.toPost = function(id){
            $log.debug("toPost : " + id);
            return $state.href('post', {id: id});
          };
        
        vm.theme = 'default';
    }
})();
