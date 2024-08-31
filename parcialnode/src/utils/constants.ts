import { config } from "dotenv";

config();

export class Parameters {
    // Métodos estáticos permiten el acceso sin instanciar la clase
    static readonly DATABASE_NAME: string = process.env.DATABASE_NAME ?? "test";
    static readonly DATABASE_PORT: string = process.env.DATABASE_PORT ?? "27017";
    static readonly DATABASE_HOST: string = process.env.DATABASE_HOST ?? "localhost";
}
