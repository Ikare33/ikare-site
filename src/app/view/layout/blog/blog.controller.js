(function(){
  'use strict';

  angular.module('af.blog')
    .controller('BlogController', BlogController);

  /**
   *
   * @param $log
   * @param $postModel
   * @constructor
   * @ngInject
     */
  function BlogController($log, postModel, $mdTheming){
    var vm = this;

    $log.debug('BlogController start');

    vm.title = 'Blog - Liste des articles';
    vm.posts = postModel.getAll();

    vm.submit = function(){
      if(vm.postForm.$valid) {
        vm.theme = vm.postForm.palette;
      }
    };

    vm.theme = 'default';
  }
})();
