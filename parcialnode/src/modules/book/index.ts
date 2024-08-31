import { Request, Response, Router } from "express";
import { createBook, deleteBook, getAllBooks, getBookById, updateBook } from "./controller/book.controller";
import { schemaValidator } from "../../middleware/schema.middleware";
import { BookSchemaCreate } from "./schemas/book.schema";

const bookRouter = Router();

bookRouter.get("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const book = await getBookById(id);
        if (!book) {
            return res.status(404).json({ msg: "Book not found" });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ msg: "Error retrieving the book" });
    }
});

bookRouter.post("/", schemaValidator(BookSchemaCreate), async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const newBook = await createBook(body);
        res.status(201).json({ msg: "Book created successfully", book: newBook });
    } catch (error) {
        res.status(400).json({ msg: "Error creating the book" });
    }
});

bookRouter.get("/", async (req: Request, res: Response) => {
    try {
        const books = await getAllBooks();
        res.status(200).json({ books });
    } catch (error) {
        res.status(500).json({ msg: "Error retrieving the books" });
    }
});

bookRouter.patch("/:id", schemaValidator(BookSchemaCreate), async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const existingBook = await getBookById(id);
        if (!existingBook) {
            return res.status(404).json({ msg: "Book not found" });
        }
        const updatedBook = await updateBook(id, req.body);
        const newUpdatedBook = await getBookById(id);
        res.status(200).json({ msg: "Book updated successfully", book: newUpdatedBook });
    } catch (error) {
        res.status(500).json({ msg: "Error updating the book" });
    }
});

bookRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const existingBook = await getBookById(id);
        if (!existingBook) {
            return res.status(404).json({ msg: "Book not found" });
        }
        await deleteBook(id);
        res.status(200).json({ msg: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Error deleting the book" });
    }
});

export { bookRouter };
