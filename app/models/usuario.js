var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UsuarioSchema   = new Schema({
    nome: String,
    senha: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);