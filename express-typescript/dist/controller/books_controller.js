"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const books_service_1 = __importDefault(require("../services/books_service"));
class BooksController {
    constructor(bookService = new books_service_1.default()) {
        this.bookService = bookService;
        // Todos os livros
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const books = yield this.bookService.getAll();
            res.status(http_status_codes_1.StatusCodes.OK).json(books);
        });
        //
        // Livros por Id
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const books = yield this.bookService.getById(id);
            if (!books) {
                res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message: 'Livro não encontrado' });
            }
            res.status(http_status_codes_1.StatusCodes.OK).json(books);
        });
        //
        // Novo livro
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const newBook = req.body;
            const books = yield this.bookService.create(newBook);
            res.status(http_status_codes_1.StatusCodes.CREATED).json(books);
        });
        //
        //atualização livro
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const updateBook = req.body;
            yield this.bookService.update(id, updateBook);
            res.status(http_status_codes_1.StatusCodes.NO_CONTENT).end();
        });
        //
        //remoção de livro
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            yield this.bookService.delete(id);
            res.status(http_status_codes_1.StatusCodes.OK).json({ message: `O livro que foi atribuido ao id '${id}' foi removido com sucesso` });
        });
    }
}
exports.default = BooksController;
