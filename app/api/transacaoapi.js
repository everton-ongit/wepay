var express    = require('express');
var router = express.Router();
var Model = require('../models/transacao');


router.route('/transacao')

//retorna todas as transacoes
.get(function (req, res) {
    Model.find(function (err, bears) {
        if (err)
            res.send(err);

        res.json(bears);
    });
})
//salva transacao
.post( function (req, res) {

    var model = new Model();
    model.nome = req.body.valor;
    
    console.log('body', req.body);

    model.save(function (err) {
        if (err)
            res.send(err);

        res.json({ message: 'Salvo com sucesso!' });
    });
});

router.route('/transacao/:id')

    //retorna por id
    .get(function(req, res) {
        Model.findById(req.params.id, function(err, model) {
            if (err)
                res.send(err);
            res.json(model);
        });
    })
    //update transacao
    .put(function(req, res) {

        Model.findById(req.params.id, function(err, model) {

            if (err)
                res.send(err);

            //atualiza informacoes da transacao
            model.nome = req.body.nome;  

            // salva
            model.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Atualizado com sucesso!' });
            });
        });
    })

    //delete transacao
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