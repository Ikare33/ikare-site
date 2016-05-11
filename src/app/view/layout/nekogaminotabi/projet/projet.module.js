(function(){
	'use strict';

	angular.module('af.nekogaminotabi.projet', [
	                             'ui.router',
	                             'ngMaterial'
	                             ])
	                             .config(nekogaminotabiProjetRouting);

	/**
	 *
	 * @param $stateProvider
	 * @ngInject
	 */
	function nekogaminotabiProjetRouting($stateProvider, $mdThemingProvider, afMenuProvider){
		$stateProvider.state('nekogaminotabi/projet', {
		      parent: 'layout',
		      url: '/nekogaminotabi/projet',
		      views: {
		        content: {
		          templateUrl: 'app/view/layout/nekogaminotabi/projet/projet.html'
		        }
		      }
		});
		      
	}
})();
