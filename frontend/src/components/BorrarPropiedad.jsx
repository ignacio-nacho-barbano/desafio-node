import React, { useState } from "react";

function BorrarPropiedad() {
  const [id, setId] = useState();

  const borrarPropiedad = async (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.getItem("token"));

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `http://localhost:3001/api/inmuebles/eliminar/${id}`,
        requestOptions
      );
      if (response.ok) {
        const respuesta = await response.json();
        alert("Propiedad borrada exitosamente");
      } else {
        const respuesta = await response.json();
        alert("Error del lado del cliente");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <form action="submit" onSubmit={borrarPropiedad}>
        <label htmlFor="">
          Ingrese el id de la propiedad que quiere borrar
        </label>
        <input
          type="text"
          placeholder="Ingrese el id"
          onChange={(e) => {
            setId(e.target.value);
          }}
          value={id}
        />
        <button type="submit">Borrar propiedad</button>
      </form>
    </div>
  );
}

export default BorrarPropiedad;
