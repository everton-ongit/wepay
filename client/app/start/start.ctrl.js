(function () {
	'use strict';
	angular.module('myApp').controller('StartCtrl', ['$scope', '$rootScope', 'transacaoService', StartCtrl]);

	function StartCtrl($scope, $rootScope, transacaoService) {
		$scope.$parent.title = "Inicio";

		$rootScope.showPaybutton = true;

		$scope.list = transacaoService.listar();

	}

})();