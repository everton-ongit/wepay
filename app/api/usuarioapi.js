var express    = require('express');
var router = express.Router();
var Model = require('../models/usuario');


router.route('/usuario')

//retorna todos usuarios
.get(function (req, res) {
    Model.find(function (err, bears) {
        if (err)
            res.send(err);

        res.json(bears);
    });
})
//salva usuario
.post( function (req, res) {

    var model = new Model();
    model.nome = req.body.name;

    model.save(function (err) {
        if (err)
            res.send(err);

        res.json({ message: 'Salvo com sucesso!' });
    });

});


router.route('/usuario/:id')

    //retorna por id
    .get(function(req, res) {
        Model.findById(req.params.id, function(err, model) {
            if (err)
                res.send(err);
            res.json(model);
        });
    })
    //update usuario
    .put(function(req, res) {

        Model.findById(req.params.id, function(err, model) {

            if (err)
                res.send(err);

            //atualiza informacoes do usuario
            model.nome = req.body.nome;  

            // salva
            model.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Usuario atualizado com sucesso!' });
            });
        });
    })

    //delete usuario
    .delete(function(req, res) {
        Model.remove({
            _id: req.params.id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Deletado com sucesso!' });
        });
    });



module.exports = router;