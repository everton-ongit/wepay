angular.module('myApp')
    .factory('apiService', function ($http) {
        var self = this;
        self.iniciado = false;
        self.serverUrl = 'http://localhost:8081/api/';
        self.data = [];
        self.listar = function (entidade, $scope) {
            self.entidade = entidade;
            self.$scope = $scope;
            if (!this.iniciado) {
                this.iniciado = true;
                $http.get(this.serverUrl + this.entidade)
                    .then(function (result) {
                        console.log('data',result.data);
                        for (var m of result.data) {
                            self.data.push(m);
                            console.log('m', m);
                        }
                    })
            }
            return self.data;
        }

        self.salvar = function (model) {
            if (model) {
                //atualiza
                if (model.id) {
                    $http.post(self.serverUrl+self.entidade+ '/'+ model.id,model)
                    .then(function(data){
                        
                    })
                }
                //cria
                else{
                    $http.post(self.serverUrl+self.entidade,model)
                    .then(function(result){
                        self.data.push(result.data.model);
                    })
                }
            }
        }

        return self;
    });