(function(){
    'use strict';

    angular.module('af.model')
    .factory('commentModel', commentModel);

    /**
     *
     * @param DS
     * @param $log
     * @return {*}
     * @ngInject
     */
    function commentModel(DS, $log){
        return DS.defineResource({
            name: 'comment',
            idAttribute: 'id',
            endpoint: 'comments',
            afterCreate: function(resource, obj, cb){
                cb(null, obj);
            }
        });
    }
})();
