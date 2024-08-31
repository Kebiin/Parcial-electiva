import { Schema, model } from "mongoose";
import { BookInfo } from "../interface/book.interface";

// Esquema para el modelo de libros
const BookSchema = new Schema<BookInfo>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publicationDate: { type: Date, required: true },
    isbn: { type: String, required: true },
    genre: { type: String, required: true }
});

export const BookModel = model<BookInfo>("Book", BookSchema);
