(function(){
'use strict';
	angular.module('myApp').controller('TransactionCtrl',['$scope', '$state', 'appService', TransactionCtrl]);

	function TransactionCtrl($scope, $state, appService){

		$scope.$parent.title = "Realizar Transação";

		$scope.user = appService.usuarioRecebedor;
		$scope.value = 0;
		
	}

})();