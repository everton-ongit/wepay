var api = require('./apigeneric');
var Model = require('../models/transacao');

var tApi = api('transacao', Model);

tApi.route('/transacao/recebimentos/:id')
    .get(function (req, res) {
        Model.find({
            usuarioRec : req.params.id
        }, function (err, model) {
            if (err)
                res.send(err);
            res.json(model);
        });
    })

tApi.route('/transacao/pagamentos/:id')
    .get(function (req, res) {
        Model.find({
            usuarioPag : req.params.id
        }, function (err, model) {
            if (err)
                res.send(err);
            res.json(model);
        });
    })

module.exports = tApi;