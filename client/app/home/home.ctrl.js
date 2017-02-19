(function () {
	'use strict';
	angular.module('myApp').controller('HomeCtrl', ['$scope', '$timeout', 'ssSideNav', 'apiService', HomeCtrl]);

	function HomeCtrl($scope, $timeout, $mdSidenav, ssSideNav) {

		$scope.$parent.title = "Bem Vindo";

		$scope.menu = ssSideNav;

		$scope.list = apiService.listar('transacao');

		apiService.salvar({
			valor: 12,
			data: new Date(),
		})

		$timeout(function () {
			// force selection on child dropdown menu item and select its state too.
			ssSideNav.forceSelectionWithId('toogle_1');
		}, 1000 * 3);


		$scope.toggleSidenav = function () {
			$mdSidenav('left').toggle();
		};

		$scope.onClickMenu = function () {
			$mdSidenav('left').toggle();
		};

	}

})();