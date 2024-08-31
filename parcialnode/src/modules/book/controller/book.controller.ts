import { Types } from "mongoose";
import { IBook } from "../interface/book.interface";
import { BookModel } from "../models/book.model";

export const addBook = async (bookData: IBook) => {
    try {
        // Creación en la base de datos
        const newBook = new BookModel(bookData);
        return await newBook.save();
    } catch (error) {
        throw new Error("No se pudo guardar en la base de datos");
    }
};

export const fetchAllBooks = async () => {
    try {
        return await BookModel.find();
    } catch (error) {
        throw new Error("No se pudieron obtener los libros almacenados");
    }
};

export const fetchBookById = async (id: string) => {
    try {
        return await BookModel.findById(id);
    } catch (error) {
        throw new Error("No se pudo encontrar el libro");
    }
};

export const removeBook = async (id: string) => {
    try {
        return await BookModel.findByIdAndDelete(id);
    } catch (error) {
        throw new Error("No se pudo eliminar el libro");
    }
};

export const modifyBook = async (id: string, updates: any) => {
    try {
        return await BookModel.findByIdAndUpdate(id, updates, { new: true });
    } catch (error) {
        throw new Error("No se pudo actualizar el libro");
    }
};
