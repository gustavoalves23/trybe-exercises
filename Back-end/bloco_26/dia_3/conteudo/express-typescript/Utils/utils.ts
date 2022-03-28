import { readFileSync, writeFileSync } from "fs";
import Book from "../interfaces/Book";

const read = async ():Promise<Book[]> => {
  const data = readFileSync('./books.json', 'utf-8');
  const books:Book[] = await JSON.parse(data);

  return books;
}

const write = async (Books: Book[]):Promise<void> => {
   writeFileSync('./books.json', JSON.stringify(Books));
}

export {read, write};