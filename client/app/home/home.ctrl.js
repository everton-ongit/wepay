(function () {
	'use strict';
	angular.module('myApp').controller('HomeCtrl', ['$scope', '$timeout', 'ssSideNav', 'apiService', HomeCtrl]);

	function HomeCtrl($scope, $timeout, ssSideNav, apiService) {

		$scope.menu = ssSideNav;

		$scope.list = apiService.listar('transacao');

		apiService.salvar({
			valor:12,
			data:new Date(),
		})

		$timeout(function () {
			// force selection on child dropdown menu item and select its state too.
			ssSideNav.forceSelectionWithId('toogle_1');
		}, 1000 * 3);


		$scope.toggleSidenav = function () {
			$mdSidenav('left').toggle();
		};

		

		// $scope.list = [
		// 	{
		// 		name: 'agua', value: 200.00, description: 'primeira transação'
		// 	},
		// 	{
		// 		name: 'luz', value: 250.00, description: 'segunda transação'
		// 	},
		// 	{
		// 		name: 'telefone', value: 300.00, description: 'terceira transação'
		// 	},
		// 	{
		// 		name: 'casa', value: 350.00, description: 'quarta transação'
		// 	}
		// ]

	}

})();