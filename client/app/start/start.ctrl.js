(function () {
	'use strict';
	angular.module('myApp').controller('StartCtrl', ['$scope', 'transacaoService', StartCtrl]);

	function StartCtrl($scope, transacaoService) {
		$scope.$parent.title = "Inicio";

		$scope.list = transacaoService.listar();

	}

})();