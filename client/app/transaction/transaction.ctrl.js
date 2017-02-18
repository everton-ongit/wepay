(function(){
'use strict';
	angular.module('myApp').controller('TransactionCtrl',['$scope', TransactionCtrl]);

	function TransactionCtrl($scope){

		$scope.user = {name: 'Ana Vivia'};
		$scope.value = 0;
		
	}

})();