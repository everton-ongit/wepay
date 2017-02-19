(function () {
	'use strict';
	angular.module('myApp').controller('SearchCtrl', ['$scope', '$rootScope', 'usuarioService', '$state', 'appService', SearchCtrl]);

	function SearchCtrl($scope, $rootScope, usuarioService, $state, appService) {

		$rootScope.title = 'Enviar pagamento';

		$rootScope.showPaybutton = false;

		$scope.users = usuarioService.listar();

		$scope.navegar = function (user) {
			appService.usuarioRecebedor = user;
			$state.go('home.transaction')
			//$mdSidenav('left').close();
		}

	}

})();