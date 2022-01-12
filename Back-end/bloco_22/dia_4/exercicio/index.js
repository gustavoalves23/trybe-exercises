const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const rescue = require('express-rescue')

const app = express();
app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({message: 'pong'})
})

app.post('/hello', (req, res) => {
  const {name} = req.body;
  res.status(201).json({message: `Hello, ${name}!`})
})

app.post('/greetings', (req, res) => {
  const {name,age} = req.body;

  if (age < 17) return res.status(401).json({ "message": "Unauthorized" })
  res.status(200).json({message: `Hello, ${name}!`})
})

app.put('/users/:name/:age', (req, res) => {
  const {name, age} = req.params;

  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` } )
})

app.get('/simpsons',async (_req, res) => {
  const simpsons =  await fs.readFile('./simpsons.json', 'utf-8').then((content) => JSON.parse(content));
  console.log(simpsons);
  
  if (!simpsons) return res.status(500)

  res.status(200).json(simpsons);

})

app.get('/simpsons/:id',async (req, res) => {
  const {id} = req.params;
  const simpsons =  await fs.readFile('./simpsons.json', 'utf-8').then((content) => JSON.parse(content));
  const person = simpsons.find((simp) => simp.id === id)
  
  if (!person) return res.status(404).json({message: 'simpson not found'});

  res.status(200).json(person);
})

app.post('/simpsons', rescue(async (req, res) => {
  const {id, name} = req.body;
  const simpsons =  await fs.readFile('./simpsons.json', 'utf-8').then((content) => JSON.parse(content));

  if (simpsons.some((simpson) => simpson.id === id)) return res.status(409).json( { message: 'id already exists' });

  const newContent = [...simpsons, {id, name,}]
  console.log(newContent);

  await fs.writeFile('./simpsons.json', JSON.stringify(newContent), {encoding: 'utf-8'})

  res.status(204).end();
}))

app.listen(3000);