// Importa modelo de Role
import role from "../models/role.js";

// Crea funcion asíncrona que gestiona la peticion de Registro de Rol, y su respuesta.
const registerRole = async (request, response) => {

    // Valida campos vacíos y retorna error
    if (!request.body.name || !request.body.description)
        return response.status(400).send("Incomplete data.");

    // Valida dato existente y retorna error
    const existingRole = await role.findOne(
        {
            name: request.body.name,
        }
    );
    if (existingRole)
        return response.status(400).send("The role already exists.")

    // Estructura el registro con base en la info de la petición.
    const roleSchema = new role(
        {
            name: request.body.name,
            price: request.body.price,
            description: request.body.description,
            stock: request.body.stock,
            registerDate: request.body.registerDate,
            dbStatus: true
        }
    );

    // Crea el registro usando el modelo de Role.
    const result = await roleSchema.save();
    if (!result)
        return response.status(400).send("Failed to register role.")

    // Retorna el resultado de registro del rol exitoso
    return response.status(200).send(result);
};

// Exporta el controlador de Rol
export default {registerRole};