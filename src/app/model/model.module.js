(function(){
    'use strict';

    angular.module('af.model', [
                                'js-data'
                                ])
                                .config(modelConfig)
                                .constant('afModelConfig', {
                                    basePath: '/api/v1'
                                });

    /**
     *
     * @param DSProvider
     * @param DSHttpAdpaterProvider
     * @param afModelConfig
     * @ngInject
     */
    function modelConfig(DSProvider, DSHttpAdapterProvider, afModelConfig){
        angular.extend(DSProvider.defaults, afModelConfig);
        angular.extend(DSHttpAdapterProvider.defaults, afModelConfig);
    }
})();
