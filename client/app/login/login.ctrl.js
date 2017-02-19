(function () {
	'use strict';
	angular.module('myApp').controller('LoginCtrl', ['$scope', 'usuarioService', 'appService', '$mdDialog', '$mdToast', LoginCtrl]);

	function LoginCtrl($scope, usuarioService, appService, $mdDialog, $mdToast) {

		$scope.usuarios = usuarioService.listar();

		$scope.usuario = {};

		$scope.login = function () {
			var u = $scope.usuarios.filter(function (m) {
				return m.nome == $scope.usuario.nome && m.senha == $scope.usuario.senha;
			})[0];

			if (u) {
				appService.usuarioLogado = u;
				$mdDialog.hide();
			}
		}

		$scope.cadastar = function () {
			usuarioService.salvar($scope.usuario);
			$mdToast.show(
				$mdToast.simple()
					.textContent('Usuario cadastro com sucesso! Efetue o login')
					.hideDelay(3000)
			);
		}

	}

})();