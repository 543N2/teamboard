// Importa librerías:
// - Servidor express
import express from "express";
// const express = require("express"); // forma antigua

// - Control de acceso de aplicaciones
import cors from "cors";
// const cors = require("cors"); // forma antigua

// - Conexión a base de datos
import db from "./db/db.js";
// const db = require("./db/db.js"); // forma antigua

// - Reconocimiento de variables de entorno
import dotenv from "dotenv";
// const dotenv = require("dotenv"); // forma antigua

// Importa ruta de Role
import role from "./routes/role.js";

// Permite que se lean variables de entorno.
dotenv.config();

// Variable  para crear el servidor
const app = express();

// Se configura recepción de archivos JSON
app.use(express.json());

// Aplica reglas de conexión con apliaciones
app.use(cors());

// Envía la ruta Role al servidor Express
app.use("/api/role", role)

// Conecta con puerto y crea servidor web
app.listen( process.env.PORT, () => {
  console.log("Backend server running on port " + process.env.PORT);
});

// Conecta con servidor de base de datos
db.dbConnection();
