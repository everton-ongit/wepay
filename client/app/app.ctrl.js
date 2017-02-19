(function () {
    'use strict';
    angular.module('myApp').controller('AppCtrl', ['$scope', 'appService', '$state', '$mdSidenav', AppCtrl]);

    function AppCtrl($scope, appService, $state, $mdSidenav) {

        $scope.title = appService.title;

        $scope.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };

        $scope.usuarioLogado = appService.usuarioLogado;

        $scope.menu = [
            {
                icone: 'home',
                titulo: 'inicio',
                rota: 'home.start'
            },
            {
                icone: 'add',
                titulo: 'adicionar',
                rota: 'home.add'
            }
        ]

        $scope.navegar = function (item) {
            $state.go(item.rota)
            $mdSidenav('left').close();
        }
    }

})();