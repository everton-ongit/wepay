(function () {
	'use strict';
	angular.module('myApp').controller('StartCtrl', ['$scope', '$rootScope', 'transacaoService', StartCtrl]);

	function StartCtrl($scope, $rootScope, transacaoService) {
		
		$scope.data = [];
    $scope.labels = ['Fevereiro'];
    $scope.series = ['pagas'];
		$scope.$parent.title = "Inicio";

		$rootScope.showPaybutton = true;

		$scope.list = transacaoService.listar();

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