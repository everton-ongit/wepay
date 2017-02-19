(function(){
'use strict';
	angular.module('myApp').controller('SearchCtrl',['$scope', 'usuarioService', '$state', 'appService', SearchCtrl]);

	function SearchCtrl($scope, usuarioService, $state, appService){

		$scope.$parent.title = "Pesquisa";

		$scope.users = usuarioService.listar();

		$scope.navegar = function (user) {
			appService.usuarioRecebedor = user;
      $state.go('home.transaction')
      //$mdSidenav('left').close();
    }

	}

})();