// importar librería Mongoose
import mongoose from "mongoose";
// const mongoose= require("mongoose"); // forma antigua

// Crea funcion asíncrona para conectar con Base de datos
const dbConnection = async () => {
  try {
    // process guarda variables ocultas ".variable"
    
    
    await mongoose.connect(process.env.DB_CONNECTION, {
      
      // useNewUrlParser: convierte la URL para que no se muestre en consola.
      useNewUrlParser: true, 
      
      // useUnifiedTopology: Configura de manera entendible la salida de consola.
      useUnifiedTopology: true 
    });

    // Imprime mensaje de conexión exitosa
    console.log("Connection with MongoDB: OK");
  } catch (error) {

      // Imprime mensaje de conexión fallida y el error.
      console.log("Error connecting to MongoDB: \n" + error);
  }
};

// Exporta la conexión con la base de datos.
export default { dbConnection };
// module.exports = {dbConnection}; // forma antigua