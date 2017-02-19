angular.module('myApp')
    .factory('transacaoService', function ($http) {
        var self = this;
        self.iniciado = false;
        self.serverUrl = 'http://localhost:8081/api/';
        self.entidade = 'transacao';
        self.data = [];
        self.listar = function (callback) {
            if (!self.iniciado) {
                self.iniciado = true;
                $http.get(self.serverUrl + self.entidade)
                    .then(function (result) {
                        for (var m of result.data) {
                            self.data.push(m);
                        }
                        if (callback) {
                            callback(self.data);
                        }
                    })
            }
            else {
                if (callback)
                    callback(self.data)
            }
            return self.data;
        }

        self.listarRecebimentos = function(userId){
            return $http.get(self.serverUrl + self.entidade + '/recebimentos/'+ userId);
        }

        self.listarPagamentos = function(userId){
            return $http.get(self.serverUrl + self.entidade + '/pagamentos/'+ userId);
        }

        self.salvar = function (model) {
            if (model) {
                //atualiza
                if (model._id) {
                    return $http.post(self.serverUrl + self.entidade + '/' + model._id, model)
                }
                //cria
                else {
                    var req = $http.post(self.serverUrl + self.entidade, model);
                    req.then(function (result) {
                        self.data.push(result.data.model);
                    })
                    return req;
                }
            }
        }

        return self;
    });