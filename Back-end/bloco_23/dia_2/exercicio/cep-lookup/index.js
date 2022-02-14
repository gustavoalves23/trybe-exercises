const express = require('express');
const bodyParser = require('body-parser');
const { ping } = require('./controllers/cepController');
const validateCep = require('./Middlewares/validateCep');
const validateNewCep = require('./Middlewares/validateNewCep');
const CEP = require('./controllers/cepController');

const app = express();

app.use(bodyParser.json());

app.get('/ping', ping);

app.get('/cep/:cep', validateCep, CEP.getCep);

app.post('/cep', validateNewCep, CEP.insertCep);

app.listen(3000);
