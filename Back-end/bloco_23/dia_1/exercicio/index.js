const express = require('express');
const bodyParser = require('body-parser');
const {addUser, getUserById, getAllUsers, updateAnUser} = require('./Models/user');
const validateNewUser = require('./Middlewares/validateNewUser');

const app = express();

app.use(bodyParser.json());

app.post(
  '/user',
  validateNewUser,
  async (req, res) => {
    const {firstName, lastName, email} = req.body;
    const id = await addUser(req.body);
    console.log(id);
    res.status(200).json({
      id,
      firstName,
      lastName,
      email
    })
  }
)

app.get(
  '/user/:id/',
  async (req, res) => {
    const {id} = req.params;
    console.log('aa');
    const {message, status} = await getUserById(id);
    res.status(status).json(message);
  }
)

app.get(
  '/user',
  async (_req, res) => {
    const actualUsers = await getAllUsers();
    res.status(200).json({message: actualUsers});
  }
);

app.put(
  '/user/:id',
  validateNewUser,
  async (req, res) => {
    const {id} = req.params;
    const successOnUpdate = updateAnUser(id, req.body);

    if (!successOnUpdate) res.status(404).json({error: true, message: 'Usuário não encontrado'});

    const {firstName, lastName, email} = req.body;

    res.status(200).json({
      id,
      firstName,
      lastName,
      email
    })
  }
)


app.listen(3001);