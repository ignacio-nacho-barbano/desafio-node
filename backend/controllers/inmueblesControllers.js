const knex = require("../config/knexfile");

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
