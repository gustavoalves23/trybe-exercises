require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');
const validateLogin = require('./middlewares/validateLogin');
const { newLogin, getLogin, topSecret } = require('./controllers/login');
const auth = require('./middlewares/auth');
const adminAuth = require('./middlewares/adminAuth');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);

app.post('/login', validateLogin, newLogin);

app.get('/users/me', auth, getLogin);

app.get('/top-secret', auth, adminAuth, topSecret);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
