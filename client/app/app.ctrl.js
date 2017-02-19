(function () {
    'use strict';
    angular.module('myApp').controller('AppCtrl', ['$scope', 'appService', '$state', '$mdSidenav', AppCtrl]);

    function AppCtrl($scope, appService, $state, $mdSidenav) {

        $scope.title = appService.title;

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