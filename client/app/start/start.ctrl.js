(function () {
	'use strict';
	angular.module('myApp').controller('StartCtrl', ['$scope', '$rootScope', 'appService', 'transacaoService', 'entradaService', StartCtrl]);

	function StartCtrl($scope, $rootScope, appService, transacaoService, entradaService) {

		$scope.labels = ['Entrada', 'Saída'];
	  $scope.data = [0, 0];
  	
		$scope.$parent.title = "Inicio";
		$rootScope.showPaybutton = true;

		$scope.list = [];

		$scope.entradas = 0;
		$scope.saidas = 0;

		transacaoService.listarRecebimentos(appService.usuarioLogado._id)
			.then(function (retorno) {
				for (var i of retorno.data) {
					i.tipo = 'recebimento';
					$scope.list.push(i)
					$scope.entradas += i.valor;
					$scope.data[0] += i.valor;
				}
		})

		transacaoService.listarPagamentos(appService.usuarioLogado._id)
			.then(function (retorno) {
				for (var i of retorno.data) {
					i.tipo = 'pagamento';
					$scope.list.push(i)
					$scope.saidas += i.valor;
					$scope.data[1] += i.valor;
				}
		})

		entradaService.listarEntradas(appService.usuarioLogado._id)
			.then(function (retorno) {
				for (var i of retorno.data) {
					i.tipo = 'entradas';
					$scope.list.push(i)
					$scope.entradas += i.valor;
					$scope.data[0] += i.valor;
				}
		})

	}

})();