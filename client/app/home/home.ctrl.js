(function () {
	'use strict';
	angular.module('myApp').controller('HomeCtrl', ['$scope', '$rootScope', '$mdSidenav', HomeCtrl]);

	function HomeCtrl($scope, $rootScope, $mdSidenav) {

		$rootScope.title = 'Inicio';

		$scope.toggleSidenav = function () {
			$mdSidenav('left').toggle();
		};

		$scope.onClickMenu = function () {
			$mdSidenav('left').toggle();
		};

	}

})();