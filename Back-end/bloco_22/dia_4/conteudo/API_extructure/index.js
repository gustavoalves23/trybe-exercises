const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

let drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Agua Mineral 500 ml', price: 5.0 },
];

const orderItems = (items) => {
  const order = items.map((item) => item.name).sort();
  return order.map((order_name) => items.find((item) => item.name === order_name))
}


app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  console.log(id, name, price);
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/:foodType/:id', (req, res) => {
  const { foodType, id } = req.params;
  const {name, price} =req.body;
  const foods = {
    recipes,
    drinks
  }

  const errorCall = () => res.status(404).json({ message: 'Recipe not found!' });

  if ([foodType, id, name, price].some((item) => item === undefined || item === null)) return errorCall;

  const idOfFood = foods[foodType].some((item) => item.id === Number(id));

  if (!idOfFood) return errorCall;

  foods[foodType] = foods[foodType].filter((item) => item.id !== Number(id))

  foods[foodType][Number(id)] = {id, name, price}

  if (foodType === 'recipes') {
    recipes = [...foods[foodType]]
  } else if (foodType === 'drinks') {
    drinks = [...foods[foodType]]
  }

  res.status(204).end();
})

app.get("/:foodType/", (req, res) => {
  const { foodType } = req.params;
  const foods = {
    recipes,
    drinks
  }

  res
    .status(200)
    .json(orderItems(foods[foodType]))
})

app.get('/:foodType/search', (req, res) => {
  const { foodType } = req.params;
  const { name, maxPrice, minPrice } = req.query;
  const foods = {
    recipes,
    drinks
  }

  const filteredItens  = foods[foodType].filter((food) => (
    ( name ? food.name.includes(name) : true) && 
    (maxPrice ? food.price < Number(maxPrice) : true) &&
    (minPrice ? food.price >= Number(minPrice) : true)
  ))

  console.log(filteredItens);

  if(filteredItens.length < 1) return res.status(404).json({message: 'Recipes not found!'});

  res.status(200).send(filteredItens);
})

app.get('/:foodType/:id', function (req, res) {
  const { id } = req.params;
  const { foodType } = req.params;
  const foods = {
    recipes,
    drinks
  }

  const recipe = foods[foodType].find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3000);