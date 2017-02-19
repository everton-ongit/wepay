var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EntradaSchema   = new Schema({
    usuarioId: String,
    valor: Number,
    data: Date
});

module.exports = mongoose.model('Entrada', EntradaSchema);