(function(){
'use strict';
	angular.module('myApp').controller('TransactionCtrl',['$scope', '$state', 'appService', 'transacaoService', '$q', '$mdToast', TransactionCtrl]);

	function TransactionCtrl($scope, $state, appService, transacaoService,  $q, $mdToast){

		$scope.$parent.title = "Realizar Transação";

		$scope.user = appService.usuarioRecebedor;
		$scope.value = 0;
		
		$scope.pagar = function(){
			$scope.transacao.date = new Date();
			var deferred = $q.defer();
			transacaoService.salvar($scope.transacao).then(function(data, status, header, config) {
				 if(data.status == 200){
				 	mensagem('Salvo com Sucesso');
				 	$scope.transacao = {}; 		
				 } else {
					mensagem('Ocorreu um Erro, entre em contato com o suporte');
				 }
				 deferred.resolve(data);
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