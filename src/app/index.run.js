(function() {
    'use strict';

    angular.module('ikare').run(runBlock);

    /** @ngInject */
    function runBlock($log, $rootScope, formlyConfig, formlyValidationMessages) {
        /* eslint angular/on-watch:0 */
        $rootScope.$on('$stateChangeError', function(event, toState, toParams,
                fromState, fromParams, error) {
            $log.error(error);
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            if(!(!toState.title || toState.title.length === 0)){
                $log.debug("Changement de titre : " + toState.title);
                $rootScope.title = toState.title;
            }
        });
        
        $log.debug('runBlock end');

        formlyValidationMessages.addTemplateOptionValueMessage('required',
                'required', 'The field', ' is required', 'alternate');
    }
    
    var app = angular.module('ngLoadScript', []);

    app.directive('script', function() {
      return {
        restrict: 'E',
        scope: false,
        link: function(scope, elem, attr) 
        {
          if (attr.type==='text/javascript-lazy') 
          {
            var s = document.createElement("script");
            s.type = "text/javascript";                
            var src = elem.attr('src');
            if(src!==undefined)
            {
                s.src = src;
            }
            else
            {
                var code = elem.text();
                s.text = code;
            }
            document.head.appendChild(s);
            elem.remove();
          }
        }
      }});

})();
