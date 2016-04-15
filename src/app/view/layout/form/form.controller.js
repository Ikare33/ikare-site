(function(){
  'use strict';

  angular.module('af.form')
    .controller('FormController', FormController);

  /**
   *
   * @param $log
   * @param $postModel
   * @constructor
   * @ngInject
   */
  function FormController($log, postModel){
    var vm = this;

    $log.debug('FormController start');

    vm.submit = function(post){
      if(vm.postForm.$valid) {
        postModel
          .create(post)
          .then(function (createdPost) {
            $log.debug('Creation success : ' + createdPost);
          })
          .catch(function (err) {
            $log.error('Fatality : ' + err);
          });
      }
    }
  }

})();
