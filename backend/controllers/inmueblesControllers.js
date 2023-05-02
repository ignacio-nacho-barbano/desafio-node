const knex = require("../config/knexfile");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.saludo = async (req, res) => {
    res.status(200)
    res.send("Bienvenidos a INMUEBLES SRL")
}


exports.mostrarInmuebles = async (req, res) => {
    try {
        const resultado = await knex.select("*").from("inmuebles");
        res.status(200).json({ inmuebles: resultado });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

exports.mostrarInmuebleId = async (req, res) => {
    const id = +req.params.id;
    try {
        const resultado = await knex.select("*").from("inmuebles").where({ id: id });
        res.status(200).json({ inmuebles: resultado });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

exports.nuevoInmueble = async (req, res) => {
    const { nombre, metros_cuadrados, direccion, precio_venta } = req.body;
    try {
        const resultado = await knex("inmuebles").insert({
            nombre: nombre,
            metros_cuadrados: metros_cuadrados,
            direccion: direccion,
            precio_venta: precio_venta
        })
        res.status(200).json({ message: "Se creo el inmueble correctamente" })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

exports.registroUsuario = async (req, res) => {
    const { usuario, contraseña, permisos } = req.body;
    const salt = await bcrypt.genSalt(10);
    const passwordEncrypt = await bcrypt.hash(contraseña, salt);
    try {
        const resultado = await knex("usuarios").insert({
            usuario: usuario,
            contraseña: passwordEncrypt,
            permisos: permisos
        })
        res.status(200).json({ message: "Se ha registrado el usuario" })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

exports.loginUsuario = async (req, res) => {
    const { usuario, contraseña } = req.body;

    knex("usuarios")
        .where({ usuario: usuario })
        .then(async (resultado) => {
            if (!resultado.length) {
                res
                    .status(404)
                    .json({ error: "El usuario no se encuentra registrado" });
                return;
            }
            const validatePassword = await bcrypt.compare(
                contraseña,
                resultado[0].contraseña
            );
            if (!validatePassword) {
                res.status(400).json({
                    error: "Usuario y/o contraseña inválido",
                });
                return;
            }

            const token = jwt.sign(
                {
                    usuario: resultado[0].usuario,
                    permisos: resultado[0].permisos,
                },
                process.env.TOKEN_SECRET
            );
            res.status(200).json({
                message: "El usuario se ha logeado correctamente",
                token: token,
            });
        })
        .catch((error) => {
            res.status(400).json({ error: error.message });
        });
}

exports.editarInmueble = async (req, res) => {
    const id = +req.params.id;
    const precio_venta = req.body.precio_venta;
    try {
        const resultado = await knex("inmuebles").where({ id: id }).update({
            precio_venta: precio_venta,
        });
        res.status(200).json({ message: "Precio modificado exitosamente", resultado });
    } catch (error) {
        res.status(400).json({ message: "No se encontro una propiedad con ese id" });
    }
}

exports.eliminarInmueble = async (req, res) => {
    const id = +req.params.id;
    try {
        const resultado = await knex("inmuebles").where({ id: id }).delete();
        const inmuebles = await knex.select("*").from("inmuebles");
        res.status(200).json({ message: "Propiedad borrada exitosamente", inmuebles });
    } catch (error) {
        res.status(400).json({ message: "No se encontro una propiedad con ese id" });
    }
}