// Importa librería de servidor Express
import express from "express";

// Importa controlador de Rol
import role from "../controllers/role.js";

// Crea instancia de Enrutador
const router = express.Router();

// Crea el endpoint para Registro de Rol mediante POST
router.post( "/registerRole", role.registerRole );

// Crea el endpoint para Listar roles ediante GET
router.get( "/listRole", role.listRole );

// Crea el endpoint para listar rol de acuerdo al id
router.get( "/findRole/:_id", role.findRole);

// Crea el endpoint para editar rol.
router.put("/updateRole", role.updateRole);

// Crea el endpoint para borrar un rol
router.delete("/deleteRole/:_id", role.deleteRole);

// Exporta el Enrutador de rol
export default router;