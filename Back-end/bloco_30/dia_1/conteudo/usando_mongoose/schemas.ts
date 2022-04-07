import { Schema } from 'mongoose';
import { IBook } from './interfaces';

const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

export {
  bookSchema,
}