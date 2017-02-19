angular.module('myApp')
    .factory('appService', function (usuarioService) {
        var self = this;

        self.usuarioLogado = {};

        self.usuarioLogado = usuarioService.listar()[0];

        self.title = 'Inicio';

        self.usuarioRecebedor = {};

        return self;
    })