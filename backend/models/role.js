// Importa librería Mongoose para usar Mongo desde JS
import mongoose from "mongoose";

// Crea la estructura de una colección de Mongo
const roleSchema = new mongoose.Schema(
    {
    "name": String,
    "description": String,
    "dbStatus": Boolean,
    "registerDate": {type: Date, default: Date.now}
    }
);

// Crea la colección en el modelo de Mongo.
const role = mongoose.model("roles", roleSchema);

// Exporta el modelo
export default role;