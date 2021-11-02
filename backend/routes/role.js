// Importa librería de servidor Express
import express from "express";

// Importa controlador de Rol
import role from "../controllers/role.js";

// Crea instancia de Enrutador
const router = express.Router();

// Crea el endpoint para Registro de Rol mediante POST
router.post( "/registerRole", role.registerRole );

// Exporta el Enrutador de rol
export default router;