var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


mongoose.connect('mongodb://192.168.99.100:27017/wepay');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var porta = 8080; 

var router = express.Router();

router.get('/', function (req, res) {
    res.json({ message: 'bem vindo a api do wepay' });
});

app.use('/api', router);


//==================
// REGISTRO DE ROTAS
//==================

//USUARIO
var usuario = require('./app/api/usuarioapi');
app.use('/api', usuario);

//TRANSACAO
var transacao = require('./app/api/transacaoapi');
app.use('/api', transacao);

// INICIA SERVIDOR
app.listen(porta);
console.log('Servidor wepay rodando na porta:' + porta);