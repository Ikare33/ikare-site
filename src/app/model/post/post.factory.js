(function(){
  'use strict';

  angular.module('af.model')
    .factory('postModel', postModel);

  /**
  *
  * @param DS
  * @param $log
  * @return {*}
  * @ngInject
  */
  function postModel(DS, $log){
    return DS.defineResource({
      name: 'post',
      idAttribute: 'id',
      endpoint: 'posts',
      afterFindAll: function(resource, obj, cb){
        $log.debug('resource: ', resource);
        $log.debug('data: ', obj);
        cb(null, obj);
      }
    });
  }
})();
