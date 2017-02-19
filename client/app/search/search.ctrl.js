(function(){
'use strict';
	angular.module('myApp').controller('SearchCtrl',['$scope', 'usuarioService', '$state', SearchCtrl]);

	function SearchCtrl($scope, usuarioService, $state){

		$scope.$parent.title = "Pesquisa";

		$scope.users = usuarioService.listar();

		$scope.navegar = function (user) {
        $state.go('home.transaction')
        //$mdSidenav('left').close();
    }

	}

})();