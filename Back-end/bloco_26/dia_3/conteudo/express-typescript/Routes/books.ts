import {Router, Request, Response} from 'express';
import Book from '../interfaces/Book';
import status from '../Enums/StatusCode';
import { read, write } from '../Utils/utils';
import validateBook from '../Middlewares/validationBook';

const Books = Router();

Books.get("/books", async (_req: Request, res: Response) => {
  const books:Book[] = await read();
  res.status(status.OK).json(books);
});

Books.get("/books/:isbn", async (req: Request, res: Response) => {
  const { isbn } = req.params;
  const books:Book[] = await read();
  const myBook: Book | undefined = books.find((book) => book.isbn === isbn);
  if(!myBook) return res.status(status.NOT_FOUND).send('NOT_FOUND');
  res.status(200).json(myBook);
});

Books.post("/books",validateBook, async (req: Request, res: Response) => {
  const book:Book = req.body;
  const oldBooks = await read();
  const newBooks:Book[] = [...oldBooks, book];
  await write(newBooks);
  res.status(status.CREATED).json(book);
});

Books.put("/books/:isbn", validateBook, async (req: Request, res: Response) => {

  const { isbn } = req.params;

  const editedBook: Book = req.body;

  const books = await read();

  const index = books.findIndex(book => book.isbn === isbn);

  if (index === -1) return res.status(status.NOT_FOUND).send('NOT_FOUND');

  books.splice(index, 1, editedBook);

  await write(books);

  return res.status(status.OK).json(editedBook);
});

Books.delete("/books/:isbn", async (req: Request, res: Response) => {
  const { isbn } = req.params;

  const books = await read();

  const index = books.findIndex(book => book.isbn === isbn);

  if (index === -1) return res.status(status.NOT_FOUND).send('NOT_FOUND');

  books.slice(index, 1);

  await write(books);

  return res.status(status.NO_CONTENT).send();
});

export default Books;