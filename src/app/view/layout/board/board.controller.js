(function(){
    'use strict';

    angular.module('af.board')
    .controller('BoardController', BoardController);

    /**
     *
     * @param $log
     * @param $http
     * @param $stateParams
     * @constructor
     * @ngInject
     */
    function BoardController($log, $http, $stateParams){
        var vm = this;

        $log.debug('BoardController start');

        vm.title = 'Avancement';
        vm.theme = 'default';
        
        angular.element(document).ready(function () {
             $http.get('/api/v1/trello/' + $stateParams.id).success(function(response) {
                //return response.data;
                 $log.debug(replaceAll(response.slice(68, response.length - 2), "\\\"", "\""));
               document.getElementById("divBoard").innerHTML = replaceAll(response.slice(68, response.length - 2), "\\\"", "\"");
            });
        });
    }
    
    function escapeRegExp(str) {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }
    
    function replaceAll(str, find, replace) {
        return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
      }
})();
