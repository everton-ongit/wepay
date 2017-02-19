(function () {
	'use strict';
	angular.module('myApp').controller('HomeCtrl', ['$scope', '$mdSidenav', HomeCtrl]);

	function HomeCtrl($scope, $mdSidenav) {

		$scope.$parent.title = "Bem Vindo";

		$scope.toggleSidenav = function () {
			$mdSidenav('left').toggle();
		};

		$scope.onClickMenu = function () {
			$mdSidenav('left').toggle();
		};

	}

})();