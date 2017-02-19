angular.module('myApp')
    .factory('appService', function (usuarioService) {
        var self = this;

        self.usuarioLogado = {}

        self.title = 'Inicio';

        return self;
    })