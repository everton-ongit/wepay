(function(){
'use strict';
	angular.module('myApp').controller('AddCtrl',['$scope', 'entradaService', 'appService', '$state', '$mdToast', '$q', AddCtrl]);

	function AddCtrl($scope, entradaService, appService, $state, $mdToast, $q){
	
		$scope.$parent.title = "Adicionar Valor";

		$scope.confirmar = function(){
			var deferred = $q.defer();
			entradaService
			.salvar({usuarioId : appService.usuarioLogado._id, valor : $scope.valor, data : new Date()})
			.then(function(data, status, header, config) {
				 if(data.status == 200){
				 	mensagem('Salvo com Sucesso');
				 	delete $scope.valor;
				 } else {
					mensagem('Ocorreu um Erro, entre em contato com o suporte');
				 }
				 deferred.resolve(data);
				 $state.go('home.start');
			});
			deferred.promise;
			
		}
	
		function mensagem (label){
			$mdToast.show(
      $mdToast.simple()
        .textContent(label)
        .position('top right' )
        .hideDelay(3000)
    	);
		}

	}

})();