(function(){
'use strict';
	angular.module('myApp').controller('SearchCtrl',['$scope', SearchCtrl]);

	function SearchCtrl($scope){

		$scope.users = [
			{name: 'João Pereira'},
			{name: 'Maria Carla'},
			{name: 'Carlos Pedro'},
			{name: 'Ana Vivia'},
			{name: 'Paulo Antoniio'},
			{name: 'André '},
			{name: 'Julia'},
			{name: 'Pereira'},
			{name: 'João'},
			{name: 'Maria'},
			{name: 'Carlos'},
			{name: 'Ana'},
			{name: 'Paulo'},
			{name: 'André'},
			{name: 'Julia'},
			{name: 'Pereira'}
		]
	}

})();