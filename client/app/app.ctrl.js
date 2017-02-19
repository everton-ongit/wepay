(function () {
    'use strict';
    angular.module('myApp').controller('AppCtrl', ['$scope', 'appService', '$state', '$mdSidenav', '$mdDialog', AppCtrl]);

    function AppCtrl($scope, appService, $state, $mdSidenav, $mdDialog) {

        $scope.title = appService.title;

        $scope.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };

        $scope.isUsuarioLogado = function(){
            return appService.usuarioLogado._id;
        } 

        $scope.logar = function(){
            
            if(!appService.usuarioLogado._id){

                $mdDialog.show({
                    controller: 'LoginCtrl',
                    templateUrl: 'login/login.html',
                    parent: angular.element(document.body)
                })
                .then(function(){
                    $scope.logar();
                })
            }
            else{
                $scope.usuarioLogado = appService.usuarioLogado;
                $state.go('home.start');
            }
        }

        $scope.logar();

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