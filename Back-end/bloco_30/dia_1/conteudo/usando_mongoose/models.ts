import {model} from 'mongoose';
import {IBook} from './interfaces';
import { bookSchema } from './Schemas';

const bookModel = model<IBook>('books', bookSchema);

export {bookModel};