import { Router } from "express";
import BooksController from "../controller/books_controller";
import validationBook from "../middlewares/books_middleware";

const router = Router();

const booksController = new BooksController();

router.get('/books', booksController.getAll);

router.get('/books/:id', booksController.getById);

router.post('/books', validationBook, booksController.create);

router.put('/books/:id', validationBook, booksController.update);

router.delete('/books/:id', booksController.delete);

export default router;
