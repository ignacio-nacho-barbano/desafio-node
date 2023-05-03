const express = require("express");
const { saludo, mostrarInmuebles, mostrarInmuebleId, nuevoInmueble, registroUsuario, loginUsuario, editarInmueble, eliminarInmueble } = require("../controllers/inmueblesControllers");
const routes = express.Router();

const { runValidation } = require("../middleware/validator/index");
const { verifyToken } = require("../middleware/auth/auth");
const { validarUsuarioCliente, validarUsuarioAdmin, validarUsuarioGerente } = require("../middleware/inmuebles/inmueblesMiddleware")

routes.get("/", saludo);
routes.get("/inmuebles", verifyToken, runValidation, validarUsuarioCliente, mostrarInmuebles);
routes.get("/inmuebles/:id", verifyToken, runValidation, validarUsuarioCliente, validarUsuarioAdmin, validarUsuarioGerente, mostrarInmuebleId);
routes.post("/inmuebles/nuevo", verifyToken, runValidation, validarUsuarioAdmin, nuevoInmueble);
routes.post("/registro", registroUsuario);
routes.post("/login", loginUsuario);

routes.put("/inmuebles/editar/:id", editarInmueble);
routes.delete("inmuebles/elimnar/:id", eliminarInmueble);


module.exports = routes;