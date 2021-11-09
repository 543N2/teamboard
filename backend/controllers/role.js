// Importa modelo de Role
import role from "../models/role.js";

// Crea funcion asíncrona que gestiona la peticion de Registro de Rol, y su respuesta.
const registerRole = async (request, response) => {

    // Valida campos vacíos y retorna error dado el caso
    if (!request.body.name || !request.body.description)
        return response.status(400).send("Incomplete data.");

    // Valida dato existente y retorna error dado el caso
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
    return response.status(200).send({ result });
};

// Consulta lista de roles
const listRole = async (request, response) => {
    const roleSchema = await role.find();
    if (!roleSchema || roleSchema.length == 0) return response.status(400).send("Empty role list.");
    return response.status(200).send({ roleSchema });
    // return !roleSchema || roleSchema.length==0 ? response.status(400).send("Empty role list.") : response.status(200).send({roleSchema});
};


// Editar rol
const updateRole = async (request, response) => {

    // Valida campos vacíos y retorna error dado el caso
    if (!request.body.name || !request.body.description)
        return response.status(400).send("Incomplete data.");

    // Valida dato existente y retorna error dado el caso
    const existingRole = await role.findOne(
        {
            name: request.body.name,
            description: request.body.description
        }
    );
    if (existingRole)
        return response.status(400).send("The role already exists.")

    // Busca un rol por id, actualizando su nombre y descripción.
    const roleUpdate = await role.findByIdAndUpdate(request.body._id,
        {
            name: request.body.name,
            description: request.body.description
        }
    );

    // Define una respuesta si no logra encontrar ni actualizar el rol.
    return !roleUpdate
        ? response.status(400).send("Error updating role")
        : response.status(200).send(roleUpdate);

};

// Elimina un rol buscando por ID
const deleteRole = async (request, response) => {
    
    // Busca un rol por id y lo elimina
    const roleDelete = await role.findByIdAndDelete({"_id": request.params["_id"]});
    
    // Define respuesta en caso de no obtener resultados de busqueda
    return !roleDelete
    ? response.status(400).send("Role not found")
    : response.status(200).send("Role deleted");
};


// Realiza búsqueda de rol por _Id (se hace internamente para el login)
const findRole = async (request, response) => {
    
    // Busca por id usando el metodo findById del modelo role
    const roleId = await role.findById({ _id: request.params["_id"] });
    
    // Define respuesta en caso de no obtener resultados de busqueda
    return !roleId
        ? response.status(400).send("No search results")
        : response.status(200).send({ roleId })
};


// Exporta el controlador de Rol con las funciones
export default { registerRole, listRole, findRole, updateRole, deleteRole};