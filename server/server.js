var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


mongoose.connect('mongodb://192.168.99.100:27017/wepay');

//CONFIGURA
var porta = 8081; 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


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