(function() {
    'use strict';

    angular.module('af.model').factory('commentModel', commentModel);

    /**
     * 
     * @param DS
     * @param $log
     * @return {*}
     * @ngInject
     */
    function commentModel(DS) {
        return DS.defineResource({
            name : 'comment',
            idAttribute : 'id',
            endpoint : 'comments',
            relations : {
                belongsTo : {
                    post : {
                        localField : 'post',
                        localKey : 'postId'
                    }
                }
            }
        });
    }
})();
