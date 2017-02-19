var api = require('./apigeneric');
var Model = require('../models/entrada');

var eApi = api('entrada', Model);

eApi.route('/entrada/dousuario/:id')
    .get(function (req, res) {
        Model.find({
            usuarioId : req.params.id
        }, function (err, model) {
            if (err)
                res.send(err);
            res.json(model);
        });
    })

module.exports = eApi;