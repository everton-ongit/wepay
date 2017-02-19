(function () {
	'use strict';
	angular.module('myApp').controller('StartCtrl', ['$scope', '$rootScope', 'appService', 'transacaoService', StartCtrl]);

	function StartCtrl($scope, $rootScope, appService, transacaoService) {
		$scope.$parent.title = "Inicio";

		$rootScope.showPaybutton = true;

		$scope.list = transacaoService.listar();

		transacaoService.transacoesSaidaByUser(appService.usuarioLogado._id, function (list) {
			console.log('queri', list);
		})

	}

})();