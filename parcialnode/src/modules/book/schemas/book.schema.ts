import Joi from "joi";

// Definir los atributos del esquema de validación
const schemaAttributes = {
    title: Joi.string().required(),
    author: Joi.string().required(),
    publicationDate: Joi.date().required(),
    isbn: Joi.string().required(),
    genre: Joi.string().required()
};

// Crear el esquema de validación para la creación de libros
export const BookSchemaCreate = Joi.object(schemaAttributes);
