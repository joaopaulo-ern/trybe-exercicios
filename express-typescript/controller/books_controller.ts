import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import BookService from "../services/books_service";

class BooksController {
  constructor(private bookService = new BookService()) { }

  // Todos os livros
  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    res.status(StatusCodes.OK).json(books);
  };
  //

  // Livros por Id
  public getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const books = await this.bookService.getById(id);

    if(!books) {
      res.status(StatusCodes.NOT_FOUND).json({ message: 'Livro não encontrado' });
    }

    res.status(StatusCodes.OK).json(books);
  };
  //

  // Novo livro
  public create = async (req: Request, res: Response) => {
    const newBook = req.body;
    const books = await this.bookService.create(newBook);

    res.status(StatusCodes.CREATED).json(books);
  }
  //

  //atualização livro
  public update = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const updateBook = req.body

    await this.bookService.update(id, updateBook)

    res.status(StatusCodes.NO_CONTENT).end()
  }
  //

  //remoção de livro
  public delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    await this.bookService.delete(id)

    res.status(StatusCodes.OK).json({ message: `O livro que foi atribuido ao id '${id}' foi removido com sucesso` })
  }
}

export default BooksController;