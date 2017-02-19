var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TransacaoSchema   = new Schema({
    valor: Number,
    data: Date,
    mensagem: String,
    usuarioRec: String,
    usuarioPag: String
});

module.exports = mongoose.model('Transacao', TransacaoSchema);