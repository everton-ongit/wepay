(function(){
'use strict';
	angular.module('myApp').controller('StartCtrl',['$scope', StartCtrl]);

	function StartCtrl($scope){
		
		$scope.$parent.title = "Início" ;

		$scope.list = [
			{
				name: 'agua', value: 200.00, description: 'primeira transação'
			},
			{
				name: 'luz', value: 250.00, description: 'segunda transação'
			},
			{
				name: 'telefone', value: 300.00, description: 'terceira transação'
			},
			{
				name: 'casa', value: 350.00, description: 'quarta transação'
			}
		]

	}

})();