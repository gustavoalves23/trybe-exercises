import { BookSchema, IBook} from "../schemas/BookSchema";
import { model, Schema } from "mongoose";

class BookModel {
  constructor(private bookModel = model<IBook>('books', BookSchema)) {}

  public async getBooks(): Promise<IBook[]> {
    const books = await this.bookModel.find();
    return books;
  }

  public async createBook(bookData: object): Promise<IBook> {
    const book = await this.bookModel.create(bookData);
    return book;
  }

  public async getBook(id:string): Promise<IBook | null> {
    const book = await this.bookModel.findById(id);
    return book;
  }

  public async editBook(id: string, bookData: object): Promise<IBook | null> {
    const book = await this.bookModel.findOneAndUpdate(
      { _id: id },
      { ...bookData },
      {new: true}
    );
    return book;
  }

  public async deleteBook(id: string): Promise<IBook | null> {
    const book = await this.bookModel.findOneAndDelete({ _id: id });
    return book;
  }
}

export default BookModel