import React, { useState } from "react";

function ListadoInmuebles() {
  const [inmuebles, setInmuebles] = useState([]);

  const verInmuebles = async (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "http://localhost:3001/api/inmuebles",
        requestOptions
      );
      if (response.ok) {
        const respuesta = await response.json();
        setInmuebles(respuesta.inmuebles);
      } else {
        alert("Ocurrio un error del lado del cliente");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <button onClick={verInmuebles}> Mostrar inmuebles</button>

      {inmuebles &&
        inmuebles.map((propiedad) => {
          return (
            <div>
              Nombre: {propiedad.nombre} , Superficie:
              {propiedad.metros_cuadrados} , Dirección: {propiedad.direccion} ,
              Precio: {propiedad.precio_venta}
            </div>
          );
        })}
    </div>
  );
}

export default ListadoInmuebles;
