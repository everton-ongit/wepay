(function(){
'use strict';
	angular.module('myApp').controller('TransactionCtrl',['$scope', '$state', TransactionCtrl]);

	function TransactionCtrl($scope, $state){

		$scope.$parent.title = "Realizar Transação";

		$scope.user = {name: 'Ana Vivia'};
		$scope.value = 0;
		
	}

})();