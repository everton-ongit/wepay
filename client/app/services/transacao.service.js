angular.module('myApp')
    .factory('transacaoService', function ($http) {
        var self = this;
        self.iniciado = false;
        self.serverUrl = 'http://localhost:8081/api/';
        self.entidade = 'transacao';
        self.data = [];
        self.listar = function () {
            if (!self.iniciado) {
                self.iniciado = true;
                $http.get(self.serverUrl + self.entidade)
                    .then(function (result) {
                        for (var m of result.data) {
                            self.data.push(m);
                        }
                    })
            }
            return self.data;
        }

        self.salvar = function (model) {
            if (model) {
                //atualiza
                if (model.id) {
                    $http.post(self.serverUrl + self.entidade + '/' + model.id, model)
                        .then(function (data) {

                        })
                }
                //cria
                else {
                    $http.post(self.serverUrl + self.entidade, model)
                        .then(function (result) {
                            self.data.push(result.data.model);
                        })
                }
            }
        }

        return self;
    });