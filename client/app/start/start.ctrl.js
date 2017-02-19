(function () {
	'use strict';
	angular.module('myApp').controller('StartCtrl', ['$scope', '$rootScope', 'appService', 'transacaoService', 'entradaService', StartCtrl]);

	function StartCtrl($scope, $rootScope, appService, transacaoService, entradaService) {
		
		$scope.data = [];
    $scope.labels = ['Fevereiro'];
    $scope.series = ['pagas'];

		$scope.$parent.title = "Inicio";

		$rootScope.showPaybutton = true;

		$scope.list = [];

		transacaoService.listarRecebimentos(appService.usuarioLogado._id)
			.then(function (retorno) {
				for (var i of retorno.data) {
					i.tipo = 'recebimento';
					$scope.list.push(i)
				}
			})

		transacaoService.listarPagamentos(appService.usuarioLogado._id)
			.then(function (retorno) {
				for (var i of retorno.data) {
					i.tipo = 'pagamento';
					$scope.list.push(i)
				}
			})

		entradaService.listarEntradas(appService.usuarioLogado._id)
			.then(function (retorno) {
				for (var i of retorno.data) {
					i.tipo = 'entradas';
					$scope.list.push(i)
				}
			})


 		ajustarChart();
		
		function ajustarChart() {
			var soma = 0;
			angular.forEach($scope.list, function(value, key){
        if(value.valor){
        	soma += value.valor;
        }
      });
      $scope.data.push(soma);
		}

	}

})();