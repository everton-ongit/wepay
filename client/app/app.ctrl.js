(function () {
    'use strict';
    angular.module('myApp').controller('AppCtrl', ['$scope', '$state', '$mdSidenav', AppCtrl]);

    function AppCtrl($scope, $state, $mdSidenav) {

        $scope.title = "Bem Vindo";

        $scope.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };

        $scope.menu = [
            {
                icone: '',
                titulo: 'inicio',
                rota: 'home.start'
            },
            {
                icone: '',
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