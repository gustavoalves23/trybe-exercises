const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const Author = require('./controllers/Author');

const app = express();

app.use(bodyParser.json());

app.get('/authors', Author.getAll);

app.get('/authors/:id', Author.getById);

app.post('/authors', Author.createAuthor);

app.listen(3000);