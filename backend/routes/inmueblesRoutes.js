const express = require("express");
const { saludo, mostrarInmuebles, mostrarInmuebleId, nuevoInmueble } = require("../controllers/inmueblesControllers");
const routes = express.Router();

/* const { runValidation } = require("../middlewares/validators");
const { verifyToken } = require("../middlewares/auth/auth"); */

routes.get("/", saludo);
routes.get("/inmuebles", mostrarInmuebles);
routes.get("/inmuebles/:id", mostrarInmuebleId);
routes.post("/inmuebles/nuevo", nuevoInmueble);
routes.get("/", () => { })


module.exports = routes;