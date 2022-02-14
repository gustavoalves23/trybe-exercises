const express = require('express');
const {Book} = require('../models/');

const Router = express.Router();

Router.get('/books',async (_req, res) => {
  const books = await Book.findAll();
  res.status(200).json(books);
})

Router.get('/book/:id', async (req, res) => {
  const {id} = req.params;
  const book = await Book.findByPk(id);
  res.status(200).json(book)
})

Router.post('/book', async (req, res) => {
  const {title, author, pageQuantity} = req.body;

  await Book.create({title, author, pageQuantity});

  res.status(200).json(req.body);
})

Router.post('/book/:id', async (req, res) => {
  const {id} = req.params;
  const {title, author, pageQuantity} = req.body;

  await Book.update({title, author, pageQuantity}, {where: { id: id }});

  res.status(200).json(req.body);
})

Router.delete('/book/:id', async (req, res) => {
  const {id} = req.params;
  const book = await Book.destroy({where: {id: id}});
  res.status(200).json(book)
})

module.exports = Router;