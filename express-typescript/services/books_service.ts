import connection from "../models/connection";
import BookModel from "../models/book_model";
import Book from "../interfaces/book_interface";
import { NotFoundError } from 'restify-errors';

class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection)
  }

  public async getAll(): Promise<Book[]> {
    const books = await this.model.getAll();
    return books;
  }

  public async getById(id: number): Promise<Book> {
    const book = await this.model.getById(id);
    return book;
  }

  public async create(book: Book): Promise<Book> {
    return this.model.create(book);
  }

  public async update(id: number, book: Book) {
    const foundBook = await this.model.getById(id)
    if(!foundBook) {
      throw new NotFoundError('NotFoundError');
    }
    return this.model.update(id, book)
  }

  public async delete(id: number) {
    const foundBook = await this.model.getById(id)
    if(!foundBook) {
      throw new NotFoundError('NotFoundError');
    }
    return this.model.delete(id)
  }
}

export default BookService;
