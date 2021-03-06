angular.module('myApp')
    .factory('usuarioService', function ($http) {
        var self = this;
        self.iniciado = false;
        self.serverUrl = 'http://localhost:8081/api/';
        self.entidade = 'usuario';
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
                    var req = $http.post(self.serverUrl + self.entidade + '/' + model.id, model);

                    req.then(function (data) {

                    });

                    return req;
                }
                //cria
                else {
                    var req = $http.post(self.serverUrl + self.entidade, model);

                    req.then(function (result) {
                        self.data.push(result.data.model);
                    });

                    return req;
                }
            }
        }


        return self;
    });