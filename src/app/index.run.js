(function() {
    'use strict';

    angular.module('ikare').run(runBlock);

    /** @ngInject */
    function runBlock($log, $rootScope, formlyConfig, formlyValidationMessages) {
        /* eslint angular/on-watch:0 */
        $rootScope.$on('stateChangeError', function(event, toState, toParams,
                fromState, fromParams, error) {
            $log.error(error);
        });

        $log.debug('runBlock end');

        formlyValidationMessages.addTemplateOptionValueMessage('required',
                'required', 'The field', ' is required', 'alternate');
    }

})();
