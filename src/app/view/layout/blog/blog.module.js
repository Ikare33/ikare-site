(function(){
  'use strict';

  angular.module('af.blog', [
      'ui.router',
      'ngMaterial',
      'af.model',
      'af.post'
    ])
    .config(blogRouting);

  /**
   *
   * @param $stateProvider
   * @ngInject
   */
  function blogRouting($stateProvider, $mdThemingProvider){
    $stateProvider.state('blog', {
      parent: 'layout',
      url: '/blog',
      views: {
        content: {
          controller: 'BlogController as vm',
          templateUrl: 'app/view/layout/blog/blog.html'
        }
      },
      resolve: {
        postList : getPostList
      }
    });
  }

  /**
   *
   * @param postModel
   * @ngInject
     */
  function getPostList(postModel){
    return postModel.findAll();
  }
})();
