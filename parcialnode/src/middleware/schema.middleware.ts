import { NextFunction, Request, Response } from "express";
import Joi from "joi";

// Validador de Esquema
export const validarEsquema = (esquema: Joi.Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const datos = req.body;
            const resultado = esquema.validate(datos);
            if (resultado.error) {
                res.status(400).json({
                    mensaje: "Todos los campos en la solicitud deben estar completos"
                });
            } else {
                next();
            }
        } catch (err) {
            console.error("Error al validar el esquema:", err);
            res.status(500).send("Error interno del servidor"
