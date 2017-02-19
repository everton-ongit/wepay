(function () {
    'use strict';
    angular.module('myApp').controller('AppCtrl', ['$scope', 'appService', '$state', '$mdSidenav', '$mdDialog', AppCtrl]);

    function AppCtrl($scope, appService, $state, $mdSidenav, $mdDialog) {

        $scope.title = appService.title;

        $scope.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };

<<<<<<< HEAD
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
=======
        $scope.usuarioLogado = appService.usuarioLogado;
>>>>>>> bea67aa9a1f676f4d5fead1d8a34e600cbfe3951

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