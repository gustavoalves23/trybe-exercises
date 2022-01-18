const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT title FROM model_example.books;'
  )

  return books.map((book) => book.title);
}

const getByAuthorId = async (authorId) => {
  const [books] = await connection.execute(
    `SELECT title FROM model_example.books WHERE author_id = ${authorId};`
  );

  return books.map((book) => book.title);
}

module.exports = {
  getAll,
  getByAuthorId
}