import Express, { Request, Response } from "express";
import { initDatabase } from "./database/db";
import { Parameters } from "./utils/constants";
import { bookRouter } from "./modules/book";

const app = Express();
const PORT = 3007;

// Middleware para el análisis de JSON
app.use(Express.json());

// Rutas de libros
app.use("/book", bookRouter);

// Ruta raíz
app.get("/", (req: Request, res: Response) => {
    res.status(200).send({ message: "Hello, world!" });
});

// Iniciar el servidor y conectar a la base de datos
app.listen(PORT, async () => {
    const dbUrl = `mongodb://${Parameters.DATABASE_HOST}:${Parameters.DATABASE_PORT}/${Parameters.DATABASE_NAME}`;
    try {
        await initDatabase(dbUrl);
        console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
});
