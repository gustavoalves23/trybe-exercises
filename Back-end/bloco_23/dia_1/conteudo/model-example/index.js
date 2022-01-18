const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  if (!authors) return res.status(404).json({message: 'error'});
    res.status(200).json(authors);
})

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.get('/books', async (req, res) => {
  const {author_id} = req.query;

  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();

  if (!books.length) return res.status(404).json({message: 'error'});
    res.status(200).json(books);
})

const PORT = process.env.PORT || 3000;


app.listen(PORT);