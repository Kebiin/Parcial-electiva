import mongoose from "mongoose";

const conectarBaseDeDatos = async (cadenaConexion: string) => {
    try {
        await mongoose.connect(cadenaConexion);
        console.log("Conexión a la base de datos exitosa");
    } catch (err) {
        console.error("Error al conectar con la base de datos:", err);
    }
};

export { conectarBaseDeDatos };
