var express = require('express');
var router = express.Router();

var api = function (entityName, Model) {

    router.route('/' + entityName)

        //lista
        .get(function (req, res) {
            Model.find(function (err, bears) {
                if (err)
                    res.send(err);

                res.json(bears);
            });
        })
        //salva
        .post(function (req, res) {

            var model = new Model();
            for (var p in req.body) {
                model[p] = req.body[p];
            }
            model.save(function (err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Salvo com sucesso from apigeneric!' });
            });
        });

    router.route('/' + entityName + '/:id')

        //retorna por id
        .get(function (req, res) {
            Model.findById(req.params.id, function (err, model) {
                if (err)
                    res.send(err);
                res.json(model);
            });
        })
        //atualiza
        .put(function (req, res) {

            Model.findById(req.params.id, function (err, model) {

                if (err)
                    res.send(err);

                for (var p in req.body) {
                    model[p] = req.body[p];
                }

                // salva
                model.save(function (err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Atualizado com sucesso!' });
                });
            });
        })

        //deleta
        .delete(function (req, res) {
            Model.remove({
                _id: req.params.id
            }, function (err, bear) {
                if (err)
                    res.send(err);

                res.json({ message: 'Deletado com sucesso!' });
            });
        });

    return router;
}

module.exports = api;