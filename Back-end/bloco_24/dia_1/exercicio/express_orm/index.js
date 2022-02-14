const express = require('express');
const bodyParser = require('body-parser');
const bookController = require('./controllers/bookController')

const app = express();

app.use(bodyParser.json());

app.use('/', bookController);


app.listen(3000, () => {
  console.log('listening');
})