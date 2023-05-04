import React, { useState } from "react";

function AgregarInmueble() {
  const [nombre, setNombre] = useState("");
  const [metros, setMetros] = useState(0);
  const [direccion, setDireccion] = useState("");
  const [precio, setPrecio] = useState("");

  const FuncionAgregarInmueble = async (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      nombre: nombre,
      metros_cuadrados: metros,
      direccion: direccion,
      precio_venta: precio,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:3001/api/inmuebles/nuevo",
        requestOptions
      );
      if (response.ok) {
        const respuesta = await response.json();
        alert("Se agregó la propiedad");
      } else {
        const respuesta = await response.json();
        alert(respuesta);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <form action="submit" onSubmit={FuncionAgregarInmueble}>
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          placeholder="Ingrese el nombre"
          onChange={(e) => {
            setNombre(e.target.value);
          }}
          value={nombre}
        />
        <label htmlFor="">Metros cuadrados</label>
        <input
          type="text"
          placeholder="Ingrese la superficie"
          onChange={(e) => {
            setMetros(e.target.value);
          }}
          value={metros}
        />
        <label htmlFor=""> Dirección</label>
        <input
          type="text"
          placeholder="Ingrese la direccion"
          onChange={(e) => {
            setDireccion(e.target.value);
          }}
          value={direccion}
        />
        <label htmlFor="">Precio venta</label>
        <input
          type="text"
          placeholder="Ingrese el precio"
          onChange={(e) => {
            setPrecio(e.target.value);
          }}
          value={precio}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default AgregarInmueble;
