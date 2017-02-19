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

        self.transacoesSaidaByUser = function (userId, callback) {

            self.listar(function (list) {
                console.log('all-data', list)
                console.log('userId', userId)

                var result = [];

                for (var t of list) {
                    if (t.usuarioPag == userId)
                        result.push(t)
                }
                console.log('query', result)
                callback(result);
            })
        }

        return self;
    });